import React, { Component } from 'react';

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
                                    <a href="." target="_blank">
                                        Project Manager
                                    </a>.
                                </div>
                            </div>
                            <div className="col-md-6">
                                <ul className="nav nav-footer justify-content-end">
                                    <li className="nav-item">
                                        <a
                                            href="."
                                            className="nav-link"
                                            target="_blank">
                                            Acerca
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="." className="nav-link" target="_blank">
                                            Blog
                                        </a>
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
