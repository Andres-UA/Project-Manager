import React, { Component } from 'react';

export default class Login extends Component {
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
                                        <form>
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-alternative">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="ni ni-email-83" />
                                                        </span>
                                                    </div>
                                                    <input className="form-control" placeholder="Email" type="email" />
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
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="button" className="btn btn-primary my-4">
                                                    Iniciar
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-6">
                                        <a href="." className="text-light">
                                            <small>Olvidaste tu contraseña?</small>
                                        </a>
                                    </div>
                                    <div className="col-6 text-right">
                                        <a href="." className="text-light">
                                            <small>Crear una cuenta</small>
                                        </a>
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
