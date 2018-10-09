import React, { Component } from 'react';
import img from '../assets/img/team-1-800x800.jpg';
import firebase from '../config/firebase';
import 'firebase/firestore';

export default class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			projects: []
		};
	}

	componentWillMount() {
		this.refreshProjects();
	}

	refreshProjects() {
		const db = firebase.firestore();
		db.settings({
			timestampsInSnapshots: true
		});
		const projectsRef = db.collection('projects');
		projectsRef
			.get()
			.then(snapshot => {
				const projects = [];
				snapshot.forEach(doc => {
					projects.push(doc.data());
				});
				this.setState({
					projects: projects
				});
			})
			.catch(err => {
				console.log('Error getting documents', err);
			});
	}

	addProject() {
		const db = firebase.firestore();
		db.settings({
			timestampsInSnapshots: true
		});

		db.collection('projects')
			.add({
				name: this.refs.name.value,
				description: this.refs.description.value
			})
			.then(ref => {
				db.collection('projects')
					.doc(ref.id)
					.update({
						id: ref.id
					});
			});
		window.$('#modal-form').modal('toggle');
		this.refs.name.value = '';
		this.refs.description.value = '';
		this.refreshProjects();
	}

	render() {
		const projects = this.state.projects.map(project => {
			return (
				<div key={project.id} className="list-group-item list-group-item-action flex-column align-items-start">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">{project.name}</h5>
						<small className="text-muted">3 days ago</small>
					</div>
					<p className="mb-1">{project.description}</p>
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
										<div className="card-body">Mis Proyectos: </div>
									</div>
								</div>
								<div>
									<img src={img} alt="Profile" className="img-thumbnail profile mx-auto d-block" />
								</div>
								<div className="my-auto mx-auto py-4">
									<button
										className="btn btn-icon btn-3 btn-primary"
										type="button"
										data-toggle="modal"
										data-target="#modal-form"
									>
										<span className="btn-inner--icon">
											<i className="ni ni-bag-17" />
										</span>

										<span className="btn-inner--text">Nuevo Proyecto</span>
									</button>
								</div>
							</div>
							<br />
							<div className="list-group mx-2 my-2">{projects}</div>
						</div>
					</div>
				</section>

				<div
					className="modal fade"
					id="modal-form"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="modal-form"
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
													type="email"
													ref="name"
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
