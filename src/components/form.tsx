import * as React from 'react';

enum FormInputNames {
    Name = 'name',
    Surname = 'surname'
}

interface Istate {
    name: string;
    surname: string;
};

export class Form extends React.Component<{},Istate> {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: ''
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    render() {
        return (
            <form method='POST' onSubmit={this.onSubmitHandler}>
                <input
                    name='name'
                    value={this.state[FormInputNames.Name]}
                    onChange={this.onChangeHandler}
                />
                <input
                    name='surname'
                    value={this.state[FormInputNames.Surname]}
                    onChange={this.onChangeHandler}
                />
                <input type='submit' />
            </form>
        )
    }

    onChangeHandler(e: { target: HTMLInputElement; }) {
        const el = e.target;
        const name = el.name;
        this.setState({
            [name]: el.value
        } as any)
    }

    onSubmitHandler(e) {
        const form = e.target;
        console.group();
            console.log('The form has been sent!');
            console.log('The name is: ' + this.state.name);
            console.log('The surname is: ' + this.state.surname);
        console.groupEnd();
    }
}
