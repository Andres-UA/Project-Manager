import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="position-relative">
                <section className="section section-lg section-shaped pb-250">
                    <div className="shape shape-style-1 shape-default bg-gradient-default">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="container py-lg-md d-flex">
                        <div className="col px-0">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1 className="display-3  text-white">
                                        PROJECT MANAGER
                                        <span>Controla tus proyectos</span>
                                    </h1>
                                    <p className="lead  text-white">Maneja los proyectos y tareas asociadas a estos.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="separator separator-bottom separator-skew">
                        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>
                </section>
                <section className="section section-lg pt-lg-0 mt--200">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="row row-grid">
              <div className="col-lg-4">
                <div className="card card-lift--hover shadow border-0">
                  <div className="card-body py-5">
                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                      <i className="ni ni-check-bold"></i>
                    </div>
                    <h6 className="text-primary text-uppercase">Control</h6>
                    <p className="description mt-3">Descripción...</p>
                    <div>
                      <span className="badge badge-pill badge-primary">Tag</span>
                      <span className="badge badge-pill badge-primary">Tag</span>
                      <span className="badge badge-pill badge-primary">Tag</span>
                    </div>        
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-lift--hover shadow border-0">
                  <div className="card-body py-5">
                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                      <i className="ni ni-istanbul"></i>
                    </div>
                    <h6 className="text-success text-uppercase">Proyectos</h6>
                    <p className="description mt-3">Descripción...</p>
                    <div>
                      <span className="badge badge-pill badge-success">Tag</span>
                      <span className="badge badge-pill badge-success">Tag</span>
                      <span className="badge badge-pill badge-success">Tag</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card card-lift--hover shadow border-0">
                  <div className="card-body py-5">
                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                      <i className="ni ni-planet"></i>
                    </div>
                    <h6 className="text-warning text-uppercase">Tareas</h6>
                    <p className="description mt-3">Descripción...</p>
                    <div>
                      <span className="badge badge-pill badge-warning">Tag</span>
                      <span className="badge badge-pill badge-warning">Tag</span>
                      <span className="badge badge-pill badge-warning">Tag</span>
                    </div>
                  </div>
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
