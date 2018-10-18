import React, { Component } from 'react';
import img from '../assets/img/perfil.png';
import { firebase } from '../firebase/firebase';
import { NavLink } from 'react-router-dom';
import 'firebase/firestore';
import toastr from 'toastr';
import PropTypes from 'prop-types';

export default class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			projects: [],
			filteredProjects: [],
			user: {
				id: ''
			}
		};
	}

	static contextTypes = {
		router: PropTypes.object
	};

	componentDidMount() {
		this.getUser();
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	getUser() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				let name = user.displayName;
				let email = user.email;
				let uid = user.uid;
				let userData = { name: name, email: email, id: uid };
				this.setState({ user: userData });
				this.refreshProjects();
			} else {
				this.context.router.history.push('/login');
				toastr.error('No te has logueado', 'Error');
			}
		});
	}

	refreshProjects() {
		const db = firebase.firestore();
		db.settings({
			timestampsInSnapshots: true
		});
		const projectsRef = db.collection('projects');
		projectsRef
			.where('userId', '==', this.state.user.id)
			.get()
			.then(snapshot => {
				const projects = [];
				snapshot.forEach(doc => {
					projects.push(doc.data());
				});
				this.setState({
					projects: projects,
					filteredProjects: projects
				});
			})
			.catch(err => {
				console.log('Error getting documents', err);
			});
	}

	addProject() {
		const name = this.refs.name.value;
		const accountable = this.refs.accountable.value;
		const start_date = this.refs.start_date.value;
		const end_date = this.refs.end_date.value;
		const description = this.refs.description.value;

		if (name === '' || accountable === '' || start_date === '' || end_date === '' || description === '') {
			toastr.error('Hay campos vacios', 'Error');
		} else {
			const db = firebase.firestore();
			db.settings({
				timestampsInSnapshots: true
			});

			db.collection('projects')
				.add({
					userId: this.state.user.id,
					name: this.refs.name.value,
					accountable: this.refs.accountable.value,
					start_date: this.refs.start_date.value,
					end_date: this.refs.end_date.value,
					description: this.refs.description.value,
					state: 'En Progreso',
					tasks: []
				})
				.then(ref => {
					db.collection('projects')
						.doc(ref.id)
						.update({
							id: ref.id
						});
					this.refreshProjects();
					window.$('#modal-project').modal('toggle');
					toastr.success('El proyecto se ha creado satisfactoriamente.');
					this.refs.name.value = '';
                    this.refs.accountable.value = '';
                    this.refs.start_date.value = '';
                    this.refs.end_date.value = '';
                    this.refs.description.value = '';
				});
		}
	}

	filterProject(event) {
		let filteredProjects = this.state.projects;
		filteredProjects = filteredProjects.filter(item => {
			return item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
		});
		this.setState({
			filteredProjects
		});
	}

	render() {
		const projects = this.state.filteredProjects.map(project => {
			const url = 'projects/' + project.id;
            const style = 'list-group-item list-group-item-action flex-column align-items-start';
            const date = (new Date(project.end_date) < new Date()); 
            return (
				<NavLink
					key={project.id}
					to={url}
                    className={ date ? style+' list-group-item-danger' : style }
				>
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">{project.name}</h5>
						<span className={date ? "badge badge-warning my-auto" : "badge badge-info my-auto" }>{project.state}</span>
					</div>
					<p className="mb-1">
						Inicio: {project.start_date} - Finalización: {project.end_date}{' '}
					</p>
				</NavLink>
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
										<div className="card-body">Mis Proyectos: </div>
									</div>
								</div>
								<div>
									<img src={img} alt="Profile" className="img-thumbnail profile mx-auto d-block" />
									<h5 className="text-center my-2"> {this.state.user.name} </h5>
								</div>
								<div className="my-auto mx-auto py-4">
									<button
										className="btn btn-icon btn-3 btn-primary"
										type="button"
										data-toggle="modal"
										data-target="#modal-project"
									>
										<span className="btn-inner--icon">
											<i className="ni ni-bag-17" />
										</span>

										<span className="btn-inner--text">Nuevo Proyecto</span>
									</button>
								</div>
							</div>
							<br />
							<div className="mx-4 my-4">
								<div className="form-group d-flex justify-content-around flex-column flex-md-row">
									<h5 className="my-auto mx-4 py-4">Buscar</h5>
									<div className="input-group input-group-alternative mb-4 my-auto">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="ni ni-zoom-split-in" />
											</span>
										</div>
										<input
											className="form-control form-control-alternative"
											placeholder="Escribe el nombre de un proyecto"
											type="text"
											onChange={this.filterProject.bind(this)}
										/>
									</div>
								</div>
							</div>
							<div className="list-group mx-2 my-2">{projects}</div>
						</div>
					</div>
				</section>

				<div
					className="modal fade"
					id="modal-project"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="modal-project"
					aria-hidden="true"
				>
					<div className="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
						<div className="modal-content">
							<div className="modal-body p-0">
								<div className="card bg-secondary shadow border-0">
									<div className="card-body px-lg-5 py-lg-5">
										<div className="text-center text-muted mb-4">
											<small>Nuevo Proyecto</small>
										</div>

										<div className="form-group mb-3">
											<div className="input-group input-group-alternative">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="ni ni-book-bookmark" />
													</span>
												</div>
												<input
													className="form-control"
													placeholder="Nombre del proyecto"
													type="text"
													ref="name"
												/>
											</div>
										</div>
										<div className="form-group mb-3">
											<div className="input-group input-group-alternative">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="ni ni-single-02" />
													</span>
												</div>
												<input
													className="form-control"
													placeholder="Responsable del proyecto"
													type="text"
													ref="accountable"
												/>
											</div>
										</div>
										<div className="form-group">
											<div className="input-group input-group-alternative">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="ni ni-calendar-grid-58" />
													</span>
												</div>
												<input
													className="form-control datepicker"
													placeholder="Mes/Dia/Año"
													type="text"
													ref="start_date"
												/>
											</div>
										</div>

										<div className="form-group">
											<div className="input-group input-group-alternative">
												<div className="input-group-prepend">
													<span className="input-group-text">
														<i className="ni ni-calendar-grid-58" />
													</span>
												</div>
												<input
													className="form-control datepicker"
													placeholder="Fecha de entrega del proyecto"
													type="text"
													ref="end_date"
												/>
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
													placeholder="Escribe una descripción del proyecto"
													ref="description"
												/>
											</div>
										</div>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											Cancelar
										</button>
										<button
											type="button"
											className="btn btn-primary"
											onClick={this.addProject.bind(this)}
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
