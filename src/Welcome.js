import React, {Component} from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // this.setState((prevState, props) => ({
        //     counter: prevState.counter + props.increment
        // }));
        this.setState({
            date: new Date()
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            date: new Date(0)
        });
    };

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}. It's now {this.state.date.toLocaleTimeString()}</h1>
                <a href="#" onClick={this.handleClick}>Click me!</a>
            </div>
        );
    }
}

export default Welcome
