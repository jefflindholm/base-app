import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { FlatButton, TextField } from 'material-ui';
import { login } from '../actions/auth-actions';

function mapStateToProps(state) {
    return { auth: state.auth };
}
class Login extends React.Component {

    login = (e) => {
        e.preventDefault();
        const username = this.username.getValue();
        const password = this.password.getValue();
        this.props.dispatch(login(username, password));
    };
    componentWillReceiveProps(newProps) {
        if ( newProps.auth.loggedIn ) {
            browserHistory.push('/');
        }
    }
    render() {
        const styles = {
            div: {
                display: 'flex',
                flexDirection: 'row',
                padding: 5,
                top: '57px',
                bottom: '5px',
                right: '1px',
                left: '1px',
                position: 'absolute',
                justifyContent: 'center',
            },
            form: {
                flex: 1,
                textAlign: 'center',
            },
        };
        return (
            <div style={styles.div}>
                <form style={styles.form} onSubmit={this.login}>
                    <TextField
                        id="username"
                        ref={ref => { this.username = ref; }}
                        floatingLabelText="Username"
                        hintText="Your username" /><br/>
                    <TextField
                        id="password"
                        ref={ref => { this.password = ref; }}
                        floatingLabelText="Password"
                        hintText="Your password"
                        type="password" /><br/>
                    <FlatButton
                        label="Login"
                        onClick={this.login}
                        type="submit"
                        /><br/>
                </form>
            </div>
        );
    }
}
export default connect(mapStateToProps)(Login);
