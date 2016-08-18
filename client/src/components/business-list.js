import React from 'react';
import { connect } from 'react-redux';

import { getBusinesses } from '../actions/business-list-actions';
import BusinessCard from './business-card';
import './business-list.css';

function mapStateToProps(state) {
    return { businessList: state.businessList };
}

class BusinessList extends React.Component {
    state = {};
    onSelect = (id) => {
        this.setState({ selected: id });
    };

    componentWillMount() {
        this.props.dispatch(getBusinesses(this.props.businessList.page || 1));
    }
    render() {
        if ( !this.props.businessList.fetched ) {
            if ( this.props.businessList.fetching ) {
                return <div>Loading...</div>;
            }
            return <div>Error: this.props.error</div>;
        }
        return (
            <div className="business-list">
                {this.props.businessList.data.map(b =>
                    <BusinessCard key={b.businessNumber} onSelect={this.onSelect} selected={b.id === this.state.selected} {...b}/>)}
            </div>
        );
    }
}
export default connect(mapStateToProps)(BusinessList);
