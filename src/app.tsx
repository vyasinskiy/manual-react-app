import * as React from 'react';

import { Clock } from './components/clock';
import { Form } from './components/form';
import { Toggle } from './components/toggle';
import { WarningPannel } from './components/warningPannel';

export class App extends React.Component<{},{}>{
  render() {
    return (
      <>
        <WarningPannel />
        <Clock />
        <Toggle />
        <Form />
      </>
    )
  }
}

