import React, { Component } from 'react';
import img from './../assets/img/brand/blue.png';
import { NavLink } from 'react-router-dom';

export default class AppHeader extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">
                            Project Manager
                        </NavLink>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbar-default"
                            aria-controls="navbar-default"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-default">
                            <div className="navbar-collapse-header">
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <a href="index.html">
                                            <img src={img} alt="" />
                                        </a>
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <button
                                            type="button"
                                            className="navbar-toggler"
                                            data-toggle="collapse"
                                            data-target="#navbar-default"
                                            aria-controls="navbar-default"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation">
                                            <span />
                                            <span />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <ul className="navbar-nav ml-lg-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">
                                        Entrar
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">
                                        Registrarse
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/dashboard" className="btn btn-neutral btn-icon">
                                        <span className="btn-inner--icon">
                                            <i className="fa fa-file-text-o mr-2" />
                                        </span>
                                        <span className="nav-link-inner--text">Dashboard</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
