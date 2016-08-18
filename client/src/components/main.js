import React from 'react';
import { connect } from 'react-redux';

import SearchDetail from './search-detail';
function mapStateToProps(state) {
    // TODO: Change this to take what you really need from the state
    return { auth: state.auth };
}

class Main extends React.Component {
    render() {
        // put your control in the return
        return (
            <SearchDetail />
        );
    }
}

export default connect(mapStateToProps)(Main);
