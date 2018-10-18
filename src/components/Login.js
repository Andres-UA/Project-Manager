import React, { Component } from 'react';
import { auth } from '../firebase';
import toastr from 'toastr';
import PropTypes from 'prop-types';

export default class Login extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	login(event) {
		const email = this.refs.email.value;
		const password = this.refs.password.value;

		if (email === '' || password === '') {
			toastr.error('Hay campos vacios', 'Error');
		} else {
			window.$('#boton_enviar').attr('hidden', true);
			window.$('#boton_carga').attr('hidden', false);

			auth.doSignInWithEmailAndPassword(email, password)
				.then(authUser => {
					this.context.router.history.push('/dashboard');
				})
				.catch(error => {
					console.log(error);
					window.$('#boton_enviar').attr('hidden', false);
					window.$('#boton_carga').attr('hidden', true);
				});
			event.preventDefault();
		}
	}

	render() {
		return (
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
											<small>Inicia Sesión</small>
										</div>
											<div className="form-group mb-3">
												<div className="input-group input-group-alternative">
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
													id="boton_enviar"
													hidden={false}
													onClick={this.login.bind(this)}
													type="button"
													className="btn btn-primary my-4"
												>
													Iniciar
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
		);
	}
}
