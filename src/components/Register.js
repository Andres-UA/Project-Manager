import React, { Component } from 'react';

export default class Register extends Component {
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
                                            <form>
                                                <div className="form-group">
                                                    <div className="input-group input-group-alternative mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="ni ni-hat-3" />
                                                            </span>
                                                        </div>
                                                        <input className="form-control" placeholder="Nombre" type="text" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group input-group-alternative mb-3">
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
                                                    <button type="button" className="btn btn-primary mt-4">
                                                        Crear cuenta
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12 text-right">
                                            <a href="." className="text-light">
                                                <small>Inicia sesión</small>
                                            </a>
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
