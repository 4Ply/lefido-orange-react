import React, {Component} from 'react';
import './EventItem.css';

class EventItem extends Component {
    render() {
        return (
            <div className="EventItem">
                <h3>Event {this.props.name}</h3>
                {this.props.children}
            </div>
        );
    }
}

export default EventItem
