import React from 'react';
import { connect } from 'react-redux';
import { Toolbar, ToolbarGroup } from 'material-ui';
import CloseIcon from 'react-material-icons/icons/navigation/close';
import OpenIcon from 'react-material-icons/icons/navigation/chevron-right';
import './search-detail.css';

import BusinessList from './business-list';

function mapStateToProps(state) {
    // TODO: Change this to take what you really need from the state
    return { auth: state.auth };
}

class SearchDetails extends React.Component {
    state = { search: true };
    toggleSearch = () => {
        this.setState({ search: !this.state.search })
    };

    render() {
        let search;
        if (this.state.search) {
            search = (
                <div className="search">
                    <Toolbar className="search__toolbar">
                        <ToolbarGroup>
                            <div className="title">SEARCH</div>
                        </ToolbarGroup>
                        <ToolbarGroup lastChild={true}>
                            <a onClick={this.toggleSearch}>
                                <CloseIcon />
                            </a>
                        </ToolbarGroup>
                    </Toolbar>

                    <BusinessList />
                </div>
            );
        } else {
            search = (
                <div className="search__collapsed" >
                    <Toolbar className="search__toolbar">
                        <ToolbarGroup lastChild={true}>
                            <a onClick={this.toggleSearch}>
                                <OpenIcon />
                            </a>
                        </ToolbarGroup>
                    </Toolbar>
                    <p className="vertical">
                        SEARCH
                    </p>
                </div>
            );
        }
        return (
            <div>
                <div className="search-detail">
                    {search}
                    <div className="detail">
                        <Toolbar className="search__toolbar">
                            <ToolbarGroup>
                                <div className="title">DETAILS</div>
                            </ToolbarGroup>
                        </Toolbar>
                        <h4>Second Vertical component</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(SearchDetails);
