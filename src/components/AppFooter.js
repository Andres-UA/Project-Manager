import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class AppFooter extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <hr />
                        <div className="row align-items-center justify-content-md-between">
                            <div className="col-md-6">
                                <div className="copyright">
                                    &copy; 2018
                                    <NavLink to="/">Project Manager</NavLink>.
                                </div>
                            </div>
                            <div className="col-md-6">
                                <ul className="nav nav-footer justify-content-end">
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link">
                                            Acerca
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link">
                                            Blog
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
