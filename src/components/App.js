import React from 'react';
/* import '../stylesheets/App.css'; */
import Form from './Form';
import Companies from './Companies';



class App extends React.Component {
  state = {
    companies: []
  }

  getData = (ev) => {
    ev.preventDefault();
    fetch("https://compare.monedero.com/api/getPrice")
      .then(response => {
        return (response.json());
      })
      .then(response => {
        this.setState({ companies: response })
      })

  }



  render() {

    return (
      <div>
        <p>Conversor</p>
        <Form getData={this.getData} />
        <Companies companies={this.state.companies} />
      </div>
    )
  }
}

export default App;
