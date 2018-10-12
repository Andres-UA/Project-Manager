import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ProjectDetail from './components/ProjectDetail';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<AppHeader />
						<Switch>
							<Route path="/" component={Home} exact />
							<Route path="/login" component={Login} />
							<Route path="/register" component={Register} />
							<Route path="/dashboard" component={Dashboard} />
							<Route path="/projects/:projectId" component={ProjectDetail}/>
						</Switch>
						<AppFooter />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
