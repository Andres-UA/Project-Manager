import React, { Component } from 'react';
import firebase from '../services/firebase';
import 'firebase/firestore';

export default class ProjectDetail extends Component {
	constructor(props) {
		super();
		this.state = {
			projectId: props.match.params.projectId,
			project: {}
		};
	}

	componentWillMount() {
		this.refreshProject();
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

	render() {
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
										<div className="card-body">Proyecto: {this.state.project.name} </div>
									</div>
								</div>
								<div className="my-auto mx-auto py-4">
									<div className="card">
										<div className="card-body">Tareas: </div>
									</div>
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

										<span className="btn-inner--text">Nueva Tarea</span>
									</button>
								</div>
							</div>
							<br />
							<div className="list-group mx-2 my-2">
								<a
									href="."
									className="list-group-item list-group-item-action flex-column align-items-start"
								>
									<div className="d-flex w-100 justify-content-between">
										<h5 className="mb-1">Tarea 1</h5>
										<div className="custom-control custom-checkbox mb-3">
											<input className="custom-control-input" id="customCheck2" type="checkbox" />
											<label className="custom-control-label" htmlFor="customCheck2">
												¿Completada?
											</label>
										</div>
									</div>
									<p className="mb-1">
										Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
										varius blandit.
									</p>
								</a>
								<a
									href="."
									className="list-group-item list-group-item-action flex-column align-items-start"
								>
									<div className="d-flex w-100 justify-content-between">
										<h5 className="mb-1">Proyecto 123</h5>
										<small className="text-muted">3 days ago</small>
									</div>
									<p className="mb-1">
										Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
										varius blandit.
									</p>
								</a>
								<a
									href="."
									className="list-group-item list-group-item-action flex-column align-items-start"
								>
									<div className="d-flex w-100 justify-content-between">
										<h5 className="mb-1">Proyecto 123</h5>
										<small className="text-muted">3 days ago</small>
									</div>
									<p className="mb-1">
										Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus
										varius blandit.
									</p>
								</a>
							</div>
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
														type="email"
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
													<select className="form-control">
														<option>1</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
														<option>6</option>
														<option>7</option>
														<option>8</option>
														<option>9</option>
														<option>10</option>
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
													/>
												</div>
											</div>
										</form>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											Cancelar
										</button>
										<button type="button" className="btn btn-primary">
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
