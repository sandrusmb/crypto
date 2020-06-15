import React from 'react';
import '../stylesheets/App.css';
import Form from './Form';
import List from './List';


class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <p>Conversor</p>
        <Form />
        <List />
      </div>)
  }
}

export default App;
