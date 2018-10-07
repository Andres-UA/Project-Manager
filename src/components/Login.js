import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div>
                <section class="section section-shaped section-lg">
                    <div class="shape shape-style-1 bg-gradient-default">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div class="container pt-lg-md">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card bg-secondary shadow border-0">
                                    <div class="card-body px-lg-5 py-lg-5">
                                        <div class="text-center text-muted mb-4">
                                            <small>Inicia Sesión</small>
                                        </div>
                                        <form>
                                            <div class="form-group mb-3">
                                                <div class="input-group input-group-alternative">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="ni ni-email-83" />
                                                        </span>
                                                    </div>
                                                    <input class="form-control" placeholder="Email" type="email" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="input-group input-group-alternative">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="ni ni-lock-circle-open" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        class="form-control"
                                                        placeholder="Password"
                                                        type="password"
                                                    />
                                                </div>
                                            </div>
                                            <div class="text-center">
                                                <button type="button" class="btn btn-primary my-4">
                                                    Iniciar
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-6">
                                        <a href="." class="text-light">
                                            <small>Olvidaste tu contraseña?</small>
                                        </a>
                                    </div>
                                    <div class="col-6 text-right">
                                        <a href="." class="text-light">
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
