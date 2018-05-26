import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class AddCompetitionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            identificationNumber: '',
            dateOfBirth: new Date(),
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (source) => {
        return (event) => {
            let state = {};

            state[source] = event.target.value.toUpperCase();
            this.setState(state)
        }
    };


    handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.name);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <TextField
                    id="name"
                    label="First Name"
                    required={true}
                    value={this.state.name}
                    onChange={(e) => this.handleChange('name')(e)}
                    margin="normal"
                />

                <TextField
                    id="surname"
                    label="Surname"
                    required={true}
                    value={this.state.surname}
                    onChange={(e) => this.handleChange('surname')(e)}
                    margin="normal"
                />

                <TextField
                    id="identificationNumber"
                    label="ID Number"
                    value={this.state.identificationNumber}
                    onChange={(e) => this.handleChange('identificationNumber')(e)}
                    margin="normal"
                />

                <TextField
                    id="dateOfBirth"
                    label="Date of Birth"
                    required={true}
                    onChange={(e) => this.handleChange('dateOfBirth')(e)}
                    margin="normal"
                    type="date"
                />
                {/*<InputLabel>First Name</InputLabel>*/}
                {/*<Input name="firstName" placeholder="First Name" required autoComplete="false"/>*/}
                {/*<InputLabel>First Name</InputLabel>*/}
                {/*<Input name="surname" placeholder="Surname" required autoComplete="false"/>*/}
                {/*<InputLabel>First Name</InputLabel>*/}
                {/*<Input name="identificationNumber" placeholder="ID Number" autoComplete="false"/>*/}
                {/*<InputLabel>First Name</InputLabel>*/}
                {/*<Input name="dateOfBirth" placeholder="Date of Birth" autoComplete="false" type="date"/>*/}

                <br/>
                <br/>
                <br/>
                <Button variant="raised" color="primary">Hi there!</Button>
            </form>
        );
    }
}

export default AddCompetitionForm
