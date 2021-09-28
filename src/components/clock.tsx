import * as React from 'react';

interface ClockState {
    date: Date;
}

export class Clock extends React.Component<object, ClockState> {
    private _timerId: number;
    constructor(props: object) {
        super(props); // must call parent constructor
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() { // call once after first render
        this._timerId = window.setInterval(() => this.tick(), 1000);
    }

    shouldComponentUpdate(nextProps: object, nextState: Readonly<ClockState>): boolean { // call everytime when component receives new props
        return true;
    }

    componentDidUpdate() { // call everytime when component has been updated and rerendered
        console.log('componentDidUpdate');
    }

    componentWillUnmount() { // call before unmounting
        clearInterval(this._timerId);
    }

    render() { // call after constructor
        return (
            <div>
                <h1>Привет, мир!</h1>
                <h2>Сейчас {this.state.date.toTimeString()}.</h2>
            </div>
        )
    }

    tick() {
        this.setState({ date: new Date() });
    }
}
