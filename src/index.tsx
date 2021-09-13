import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ClockState {
    date: Date;
}

interface Clock {
    timerId: number;
}

class Clock extends React.Component<object, ClockState> {
    constructor(props: object) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerId = window.setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>
                <h1>Привет, мир!</h1>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }

    tick() {
        this.setState({ date: new Date() });
    }
}


ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);