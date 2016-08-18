import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toolbar, ToolbarGroup } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { logout } from './actions/auth-actions';
import logo from './assets/NGEN.png';
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
            navItem = <a className="logout" href='#' onClick={this.logout}>Logout</a>;
        } else {
            navItem = <a className="logout" href='/login'>Login</a>;
        }

        return (
            <MuiThemeProvider>
                <div>
                    <Toolbar className="toolbar">
                        <ToolbarGroup firstChild={true}>
                            <a href="">
                                <img alt="NGC" src={logo} className="image"/>
                            </a>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <div className="title">APPLICATION TITLE</div>
                        </ToolbarGroup>
                        <ToolbarGroup lastChild={true}>
                            <div className="user">{user}</div>
                            {navItem}
                        </ToolbarGroup>
                    </Toolbar>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}
export default connect(mapStateToProps)(App);
