import * as React from 'react';

interface ToggleState {
    isToggleOn: Boolean;
}

export class Toggle extends React.Component<{}, ToggleState> {
	constructor(props) {
	  super(props);
	  this.state = { isToggleOn: true };
	}
  
	handleClick() {
		this.setState(prevState => ({
		  isToggleOn: !prevState.isToggleOn
		}));
	  }
  
	render() {
	  return (
		<button onClick={this.handleClick.bind(this)}>
		  {this.state.isToggleOn ? 'Включено' : 'Выключено'}
		</button>
	  );
	}
  }