import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';
import InputForm from './InputForm.js';
import FlavorForm from './FlavorForm';
import {Fetch} from 'react-request';


const API = 'https://glc.slq.co.za/glc_api';
const DEFAULT_QUERY = '/gymnasts';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flavor: 'UNKNOWN',
            data: {},
            isLoading: false,
            error: null,
        };
    }

    handleFlavorSelection = (flavor) => {
        this.setState({
            flavor: flavor
        });
    };

    render() {
        if (this.state.error) {
            return <p>{this.state.error.message}</p>;
        }

        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <Welcome name="Pawel"/>
                <InputForm value={this.state.flavor}/>

                <FlavorForm stateChangeCallback={this.handleFlavorSelection}/>

                <Fetch url={API + DEFAULT_QUERY} method="get" responseType="json" headers={{
                    'Authorization': 'Basic Z2xjX2FwaTpOb01vcmVSaW1z'
                }}>
                    {({fetching, failed, data}) => {
                        if (fetching) {
                            return <div>Loading data...</div>;
                        }

                        if (failed) {
                            return <div>The request did not succeed.</div>;
                        }

                        if (data) {
                            return (
                                <ol>
                                    {data.map(row =>
                                        <li key={row.id}>Post ID: {row.firstName}</li>
                                    )}
                                </ol>
                            );
                        }

                        return null;
                    }}
                </Fetch>
            </div>
        );
    }

    componentDidMount() {
        // this.setState({isLoading: true});

        // reqwest({
        //     url: 'path/to/html'
        //     , method: 'get'
        //     , data: [{name: 'foo', value: 'bar'}, {name: 'baz', value: 100}]
        //     , success: function (resp) {
        //         console.log(resp);
        //         // qwery('#content').html(resp)
        //     }
        // });

        // $.ajax({
        //     url: API + DEFAULT_QUERY,
        //     dataType: 'json',
        //     cache: false,
        //     headers: {
        //         'Authorization': 'Basic Z2xjX2FwaTpOb01vcmVSaW1z',
        //     },
        //     success: function (data) {
        //         this.setState({data: data, isLoading: false});
        //     }.bind(this),
        //     error: function (xhr, status, err) {
        //         console.error(this.props.url, status, err.toString());
        //         this.setState({error: err, isLoading: false});
        //     }.bind(this)
        // });
    }
}

export default App;
