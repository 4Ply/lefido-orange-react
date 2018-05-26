import React, {Component} from 'react';
import './CompetitionItem.css';

class CompetitionItem extends Component {
    render() {
        return (
            <div className="CompetitionItem">
                <h2>Competition: {this.props.name}</h2>
                {this.props.children}
            </div>
        );
    }
}

export default CompetitionItem
