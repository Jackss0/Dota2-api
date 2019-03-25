import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ProPlayers from './ProPlayers'



export default class Navigation extends Component {
	
    render() {

        return (
            
            <nav className="navbar navbar-default navbar-expand-lg navbar-light" >
	<div key="navbar-h" className="navbar-header d-flex col">
		<a className="navbar-brand" href="#">Dota2<b>API</b></a>  		
		<button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle navbar-toggler ml-auto">
			<span className="navbar-toggler-icon"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
			<span className="icon-bar"></span>
		</button>
	</div>
	
	<div key="navbar-c" id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
	<Router >
		<ul className="nav navbar-nav">
			<li> <Link to='/index' >Inicio</Link></li>
			<li className="nav-item"><a href="#" className="nav-link">ProPlayers</a></li>	
			<li> <Link to='/ProPlayers' >ProPlayers</Link></li>
			<li className="nav-item dropdown">
				<a data-toggle="dropdown" className="nav-link dropdown-toggle" href="#">Services <b className="caret"></b></a>
				<ul className="dropdown-menu">					
					<li><a href="#" className="dropdown-item">Web Design</a></li>
					<li><a href="#" className="dropdown-item">Web Development</a></li>
					<li><a href="#" className="dropdown-item">Graphic Design</a></li>
					<li><a href="#" className="dropdown-item">Digital Marketing</a></li>
				</ul>
			</li>
			<li className="nav-item active"><a href="#" className="nav-link">Pricing</a></li>
			<li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
			<li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
		</ul>
	</Router>	
		<form className="navbar-form form-inline">
			<div key="input-g" className="input-group search-box">								
				<input className="text" id="search" className="form-control" placeholder="Search here..."/>
				<span className="input-group-addon"><i className="material-icons">&#xE8B6;</i></span>
			</div>
		</form>
		<ul className="nav navbar-nav navbar-right ml-auto">			
			<li className="nav-item">
				<a data-toggle="dropdown" className="nav-link dropdown-toggle" href="#">Login</a>
				<ul className="dropdown-menu form-wrapper">					
					<li>
						<form action="/examples/actions/confirmation.php" method="post">
							<p className="hint-text">Sign in with your social media account</p>
							<div key="fg" className="form-group social-btn clearfix">
								<a href="#" className="btn btn-primary pull-left"><i className="fa fa-facebook"></i> Facebook</a>
								<a href="#" className="btn btn-info pull-right"><i className="fa fa-twitter"></i> Twitter</a>
							</div>
							<div key="os" className="or-seperator"><b>or</b></div>
							<div key="fg2" className="form-group">
								<input type="text" className="form-control" placeholder="Username" required="required"/>
							</div>
							<div key="fg3" className="form-group">
								<input type="password" className="form-control" placeholder="Password" required="required"/>
							</div>
							<input type="submit" className="btn btn-primary btn-block" value="Login"/>
							<div key="ff" className="form-footer">
								<a href="#">Forgot Your password?</a>
							</div>
						</form>
					</li>
				</ul>
			</li>
			<li className="nav-item">
				<a href="#" data-toggle="dropdown" className="btn btn-primary dropdown-toggle get-started-btn mt-1 mb-1">Sign up</a>
				<ul className="dropdown-menu form-wrapper">					
					<li>
						<form action="/examples/actions/confirmation.php" method="post">
							<p className="hint-text">Fill in this form to create your account!</p>
							<div key="fg4" className="form-group">
								<input type="text" className="form-control" placeholder="Username" required="required"/>
							</div>
							<div key="fg5" className="form-group">
								<input type="password" className="form-control" placeholder="Password" required="required"/>
							</div>
							<div key="fg6" className="form-group">
								<input type="password" className="form-control" placeholder="Confirm Password" required="required"/>
							</div>
							<div key="fg7" className="form-group">
								<label className="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="#">Terms &amp; Conditions</a></label>
							</div>
							<input type="submit" className="btn btn-primary btn-block" value="Sign up"/>
						</form>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	
</nav>
        );
    }
}

