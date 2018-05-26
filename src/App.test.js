import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TestApp from './TestApp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<TestApp/>, div);
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
