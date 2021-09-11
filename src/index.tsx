import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IAppProps { // описывает содержание
    title: string;
}

function App (props: IAppProps) {
    return <h1>{props.title}</h1>;
}

ReactDOM.render(
    <App title="We have just connected React to our app!" />,
    document.getElementById('root')
);