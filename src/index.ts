import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app'

console.log('App has been started');

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);