// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './assets/NGEN.png';
import { logout } from './actions/auth-actions';
import './app.css';

function mapStateToProps(state) {
    return { auth: state.auth };
}

class App extends Component {
    logout = () => {
        this.props.dispatch(logout());
    }
    render() {
        let user = 'Not logged in';
        let navItem;
        if ( this.props.auth.loggedIn ) {
            user = `Signed in as ${this.props.auth.user}`;
            navItem = <a className="navbar-link" style={{ color: 'white' }} href='#' onClick={this.logout}>Logout</a>;
        } else {
            navItem = <a className="navbar-link" style={{ color: 'white' }} href='/login'>Login</a>;
        }
        const imgStyle = { maxWidth: '100%', maxHeight: '100%' };
        return (
            <div>
                <nav className="navbar navbar-default nav-custom  navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <img alt="NGC" src={logo} style={imgStyle}/>
                            </a>
                        </div>
                        <p className="navbar-text navbar-right" style={{ color: 'black' }}>{user}</p>
                        <ul className="nav navbar-nav navbar-right"><li>{navItem}</li></ul>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}
export default connect(mapStateToProps)(App);
