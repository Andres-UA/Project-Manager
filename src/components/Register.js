import React, { Component } from 'react';
import { auth } from '../firebase';
import { firebase } from '../firebase/firebase';
import toastr from 'toastr';
import PropTypes from 'prop-types';

export default class Register extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	register(event) {
		const name = this.refs.name.value;
		const email = this.refs.email.value;
		const password = this.refs.password.value;

		if (email === '' || password === '' || name === '') {
			toastr.error('Hay campos vacios', 'Error');
		} else {
			window.$('#boton_enviar').attr('hidden', true);
			window.$('#boton_carga').attr('hidden', false);
			auth.doCreateUserWithEmailAndPassword(email, password)
				.then(authUser => {
					this.updateUser(name);
				})
				.catch(error => {
					console.log('Error: ', error);
					window.$('#boton_enviar').attr('hidden', false);
					window.$('#boton_carga').attr('hidden', true);
				});
		}
		event.preventDefault();
	}

	updateUser(name) {
		var user = firebase.auth().currentUser;
		user.updateProfile({
			displayName: name
		})
			.then(() => {
				this.context.router.history.push('/dashboard');
			})
			.catch(error => {
				console.log('Error: ', error);
			});
	}

	render() {
		return (
			<div>
				<div>
					<section className="section section-shaped section-lg">
						<div className="shape shape-style-1 bg-gradient-default">
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
							<span />
						</div>
						<div className="container pt-lg-md">
							<div className="row justify-content-center">
								<div className="col-lg-5">
									<div className="card bg-secondary shadow border-0">
										<div className="card-body px-lg-5 py-lg-5">
											<div className="text-center text-muted mb-4">
												<small>Crea una nueva cuenta</small>
											</div>
											<div className="form-group">
												<div className="input-group input-group-alternative mb-3">
													<div className="input-group-prepend">
														<span className="input-group-text">
															<i className="ni ni-hat-3" />
														</span>
													</div>
													<input
														className="form-control"
														placeholder="Nombre"
														type="text"
														ref="name"
													/>
												</div>
											</div>
											<div className="form-group">
												<div className="input-group input-group-alternative mb-3">
													<div className="input-group-prepend">
														<span className="input-group-text">
															<i className="ni ni-email-83" />
														</span>
													</div>
													<input
														className="form-control"
														placeholder="Email"
														type="email"
														ref="email"
													/>
												</div>
											</div>
											<div className="form-group">
												<div className="input-group input-group-alternative">
													<div className="input-group-prepend">
														<span className="input-group-text">
															<i className="ni ni-lock-circle-open" />
														</span>
													</div>
													<input
														className="form-control"
														placeholder="Password"
														type="password"
														ref="password"
													/>
												</div>
											</div>

											<div className="text-center">
												<button
													type="button"
													id="boton_enviar"
													className="btn btn-primary mt-4"
													onClick={this.register.bind(this)}
												>
													Crear cuenta
												</button>
												<button id="boton_carga" hidden={true} className="btn btn-primary my-4">
													<i className="fa fa-circle-o-notch fa-spin" /> Cargando
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}
