import * as React from 'react';

export class WarningPannel extends React.Component<{}, {showWarning: Boolean}> {
    constructor(props) {
      super(props);
      this.state = { showWarning: true }
    }
  
    handleToggleClick() {
      this.setState(prevState => ({
        showWarning: !prevState.showWarning
      }));
    }
    
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick.bind(this)}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }
  
class WarningBanner extends React.Component<{warn: Boolean}, {}> {
    render() {
        if (!this.props.warn) {
            return null;
        }
    
        return (
            <div className="warning">
                Warning!
            </div>
        );
    }
}