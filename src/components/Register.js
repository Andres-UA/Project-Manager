import React, { Component } from 'react';
import { auth } from '../firebase';
import { Redirect } from 'react-router-dom';
import { firebase } from '../firebase/firebase';

export default class Register extends Component {
    
    constructor() {
        super();
        this.state = {
            redirect: false,
        };
    }

    register(event) {
        window.$('#boton').attr("disabled", true);
        const name = this.refs.name.value;
        const email = this.refs.email.value;
        const password = this.refs.password.value;

        auth.doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                this.updateUser(name);
                this.setState({ redirect: true });
            })
            .catch(error => {
                console.log(error);
            });
        event.preventDefault();
    }

    updateUser(name) {
        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        })
            .then(function() {
                
            })
            .catch(function(error) {
                // An error happened.
            });
    }

    render() {

        const redirect = this.state.redirect;

        if (redirect) {
            return <Redirect to="/dashboard" />;
        }

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
                                                        <input className="form-control" placeholder="Nombre" type="text" ref="name" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group input-group-alternative mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="ni ni-email-83" />
                                                            </span>
                                                        </div>
                                                        <input className="form-control" placeholder="Email" type="email" ref="email" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group input-group-alternative">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="ni ni-lock-circle-open" />
                                                            </span>
                                                        </div>
                                                        <input className="form-control" placeholder="Password" type="password" ref="password" />
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <button type="button" id="boton" className="btn btn-primary mt-4" onClick={this.register.bind(this)}>
                                                        Crear cuenta
                                                    </button>
                                                </div>
                                            </form>
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
