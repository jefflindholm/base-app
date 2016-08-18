import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Main from './main';

function mapStateToProps(state) {
    return { auth: state.auth };
}

class Role extends React.Component {
    componentWillReceiveProps(newProps) {
        if ( !newProps.auth.loggedIn ) {
            browserHistory.push('/login');
        }
    }
    componentWillMount() {
        if ( !this.props.auth.loggedIn ) {
            browserHistory.push('/login');
        }
    }
    render() {
        return (
            <Main />
        );
    }
}
export default connect(mapStateToProps)(Role);
