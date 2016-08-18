import React from 'react';
import './business-card.css';

export default class BusinessCard extends React.Component {
    static propTypes = {
        onSelect: React.PropTypes.func.isRequired,
    }
    onClick = () => {
        this.props.onSelect(this.props.id);
    };
    render() {
        const className = `business-card ${this.props.selected ? 'business-card-selected' : ''}`;
        return (
            <div className={className} onClick={this.onClick}>
                <div className="business-card__title">{this.props.businessName || 'NO NAME'}</div>
                <br/>
                Number: {this.props.businessNumber}<br/>
                Market:{this.props.marketName}
            </div>
        )
    }
}
