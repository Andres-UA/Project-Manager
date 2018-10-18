import React, { Component } from 'react';
import { firebase } from '../firebase/firebase';
import 'firebase/firestore';
import toastr from 'toastr';
import PropTypes from 'prop-types';

export default class ProjectDetail extends Component {
	
	constructor(props) {
		super();
		this.state = {
			projectId: props.match.params.projectId,
			project: {
				tasks: []
			},
			isLoggedIn: false
		};
	}
	
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		this.getUser();		
	}

	getUser() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				let name = user.displayName;
				let email = user.email;
				let uid = user.uid;
				let userData = { name: name, email: email, id: uid };
				this.setState({ user: userData });
				this.refreshProject();
			} else {
				this.context.router.history.push('/login');
                toastr.error('No te has logueado', 'Error');
            }
		});
	}


	refreshProject() {
		const db = firebase.firestore();
		db.settings({
			timestampsInSnapshots: true
		});
		const projectRef = db.collection('projects').doc(this.state.projectId);
		projectRef
			.get()
			.then(doc => {
				if (!doc.exists) {
					console.log('No such document!');
				} else {
					this.setState({
						project: doc.data()
					});
				}
			})
			.catch(err => {
				console.log('Error getting document', err);
			});
	}

	addTask() {
		const name = this.refs.name.value;
		const priority = this.refs.priority.value;
		const description = this.refs.description.value;
		if (name === '' || priority === '' || description === '') {
			toastr.error('Hay campos vacios','Error');
		} else {
			const db = firebase.firestore();
			db.settings({
				timestampsInSnapshots: true
			});
			const projectRef = db.collection('projects').doc(this.state.projectId);
			projectRef
				.get()
				.then(doc => {
					if (!doc.exists) {
						console.log('No such document!');
					} else {
						const tasks = doc.data().tasks;
						tasks.push({
							id: tasks.length + 1,
							name: this.refs.name.value,
							priority: this.refs.priority.value,
							description: this.refs.description.value
						});
						db.collection('projects')
							.doc(this.state.projectId)
							.update({
								tasks: tasks
							});
						this.refreshProject();
						window.$('#modal-task').modal('toggle');
						toastr.success('Tarea agregada correctamente.');
						this.refs.name.value = '';
						this.refs.priority.value = '0';
						this.refs.description.value = '';
					}
				})
				.catch(err => {
					console.log('Error getting document', err);
				});
		}
	}

	render() {

		const tasks = this.state.project.tasks.map(task => {
			return (
				<div key={task.id} className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">{task.name}</h5>
						<span className="badge badge-success my-auto">Prioridad: {task.priority}</span>
					</div>
					<p className="mb-1">{task.description}</p>
				</div>
			);
		});

		return (
			<div>
				<section className="section-profile-cover section-shaped my-0">
					<div className="shape shape-style-1 shape-primary alpha-4">
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
					</div>
					<div className="separator separator-bottom separator-skew">
						<svg
							x="0"
							y="0"
							viewBox="0 0 2560 100"
							preserveAspectRatio="none"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<polygon className="fill-white" points="2560 0 2560 100 0 100" />
						</svg>
					</div>
				</section>
				<section className="section">
					<div className="container">
						<div className="card card-profile shadow mt--300">
							<br />
							<div className="d-flex justify-content-around flex-column flex-md-row">
								<div className="my-auto mx-auto py-4">
									<div className="card">
										<div className="card-body d-flex justify-content-around flex-column">
											<div className="d-flex justify-content-between flex-column flex-md-row mb-1">
												<div className="mr-4">
													<i className="fa fa-bookmark mr-2" aria-hidden="true" /> Proyecto
												</div>
												<div>{this.state.project.name}</div>
											</div>

											<div className="d-flex justify-content-between flex-column flex-md-row mb-1">
												<div className="mr-4">
													<i className="fa fa-user mr-2" aria-hidden="true" /> Responsable
												</div>
												<div>{this.state.project.accountable}</div>
											</div>

											<div className="d-flex justify-content-between flex-column flex-md-row mb-1">
												<div className="mr-4">
													<i className="fa fa-calendar-check-o mr-2" aria-hidden="true" />{' '}
													Fecha inicio
												</div>
												<div>{this.state.project.start_date}</div>
											</div>

											<div className="d-flex justify-content-between flex-column flex-md-row mb-1">
												<div className="mr-4">
													<i className="fa fa-calendar-times-o mr-2" aria-hidden="true" />{' '}
													Fecha fin
												</div>
												<div>{this.state.project.end_date}</div>
											</div>

											<div className="d-flex justify-content-between flex-column flex-md-row mb-1">
												<div className="mr-4">
													<i className="fa fa-spinner mr-2" aria-hidden="true" /> Estado
												</div>
												<div>{this.state.project.state}</div>
											</div>
										</div>
									</div>
								</div>
								<div className="my-auto mx-auto py-4">
									<div className="card text-center">
										<div className="card-body d-flex justify-content-around flex-column">
											<div className="d-flex justify-content-between flex-column mb-1">
												<div className="mr-4">
													<i className="fa fa-bookmark mr-2" aria-hidden="true" /> Descripción
												</div>
												<div>{this.state.project.description}</div>
											</div>
										</div>
									</div>
								</div>
								<div className="my-auto mx-auto py-4">
									<button
										className="btn btn-icon btn-3 btn-primary"
										type="button"
										data-toggle="modal"
										data-target="#modal-task"
									>
										<span className="btn-inner--icon">
											<i className="ni ni-bag-17" />
										</span>

										<span className="btn-inner--text">Nueva Tarea</span>
									</button>
								</div>
							</div>
							<br />
							<div className="list-group mx-2 my-2">{tasks}</div>
						</div>
					</div>
				</section>

				<div
					className="modal fade"
					id="modal-task"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="modal-task"
					aria-hidden="true"
				>
					<div className="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
						<div className="modal-content">
							<div className="modal-body p-0">
								<div className="card bg-secondary shadow border-0">
									<div className="card-body px-lg-5 py-lg-5">
										<div className="text-center text-muted mb-4">
											<small>Nueva Tarea</small>
										</div>
										<form>
											<div className="form-group mb-3">
												<div className="input-group input-group-alternative">
													<div className="input-group-prepend">
														<span className="input-group-text">
															<i className="ni ni-book-bookmark" />
														</span>
													</div>
													<input
														className="form-control"
														placeholder="Nombre de la tarea"
														type="text"
														ref="name"
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<div className="input-group input-group-alternative">
													<div className="input-group-prepend">
														<span className="input-group-text">
															<i className="ni ni-ruler-pencil" />
														</span>
													</div>
													<select className="form-control" ref="priority">
														<option value="0">Seleccione una prioridad</option>
														<option value="1">1</option>
														<option value="2">2</option>
														<option value="3">3</option>
														<option value="4">4</option>
														<option value="5">5</option>
														<option value="6">6</option>
														<option value="7">7</option>
														<option value="8">8</option>
														<option value="9">9</option>
														<option value="10">10</option>
													</select>
												</div>
											</div>
											<div className="form-group">
												<div className="input-group input-group-alternative">
													<div className="input-group-prepend">
														<span className="input-group-text">
															<i className="ni ni-align-center" />
														</span>
													</div>
													<textarea
														className="form-control form-control-alternative"
														rows="3"
														placeholder="Escribe una descripción de la tarea"
														ref="description"
													/>
												</div>
											</div>
										</form>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											Cancelar
										</button>
										<button
											type="button"
											className="btn btn-primary"
											onClick={this.addTask.bind(this)}
										>
											Crear
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
