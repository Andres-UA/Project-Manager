import React, { Component } from 'react';
import img from '../assets/img/team-1-800x800.jpg';

export default class Dashboard extends Component {
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
                        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
                                    <button className="btn btn-icon btn-3 btn-primary" type="button" data-toggle="modal" data-target="#modal-form">
                                        <span className="btn-inner--icon">
                                            <i className="ni ni-bag-17" />
                                        </span>

                                        <span className="btn-inner--text">Nuevo Proyecto</span>
                                    </button>
                                </div>
                            </div>
                            <br />
                            <div className="list-group mx-2 my-2">
                                <a href="." className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Proyecto 123</h5>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                </a>
                                <a href="." className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Proyecto 123</h5>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                </a>
                                <a href="." className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Proyecto 123</h5>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="modal fade" id="modal-form" tabindex="-1" role="dialog" aria-labelledby="modal-form" aria-hidden="true">
                    <div class="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
                        <div class="modal-content">
                            <div class="modal-body p-0">
                                <div class="card bg-secondary shadow border-0">
                                    <div class="card-body px-lg-5 py-lg-5">
                                        <div class="text-center text-muted mb-4">
                                            <small>Nuevo Proyecto</small>
                                        </div>
                                        <form>
                                            <div class="form-group mb-3">
                                                <div class="input-group input-group-alternative">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="ni ni-book-bookmark" />
                                                        </span>
                                                    </div>
                                                    <input class="form-control" placeholder="Nombre del proyecto" type="email" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="input-group input-group-alternative">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="ni ni-align-center" />
                                                        </span>
                                                    </div>
                                                    <textarea class="form-control form-control-alternative" rows="3" placeholder="Escribe una descripción del proyecto" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                            Cancelar
                                        </button>
                                        <button type="button" class="btn btn-primary">
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
