import React from 'react';
/* import '../stylesheets/App.css'; */
import Form from './Form';
import Companies from './Companies';



class App extends React.Component {
  state = {
    companies: [],
    amount: 1,
    currency: "BTC"
  }

  getData = (ev) => {

    ev.preventDefault();
    const amount = ev.target.elements[0];
    console.log(amount.value);
    const { currency } = ev.target.elements;


    console.log(currency.value);
    fetch("https://compare.monedero.com/api/getPrice")
      .then(response => {
        return (response.json());
      })
      .then(response => {
        this.setState({
          companies: response,
          amount: amount.value,
          currency: currency.value
        })
      })

  }

  render() {

    return (
      <div>
        <p>Conversor</p>
        <Form getData={this.getData} />
        <Companies companies={this.state.companies} amount={this.state.amount} currency={this.state.currency} />
      </div>
    )
  }
}

export default App;
