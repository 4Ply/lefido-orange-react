import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';


class GymnastsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <TextField/>
        )
    }
}
