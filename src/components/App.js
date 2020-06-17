import React from 'react';
import '../stylesheets/App.css';
import Form from './Form';
import Companies from './Companies';


class App extends React.Component {
  state = {
    companies: [],
    amount: 1,
    currency: "BTC",
    loading: 1
  }

  getData = (ev) => {
    ev.preventDefault();
    const amount = ev.target.elements[0];
    const currency = ev.target.elements[1];
    console.log(currency);
    this.setState({
      loading: 2
    })
    fetch("https://compare.monedero.com/api/getPrice")
      .then(response => {
        return (response.json());
      })
      .then(response => {
        console.log(this.state.amount);
        this.setState({
          companies: response,
          amount: amount.value,
          currency: currency.value,
          loading: 3
        })
      })

  }



  render() {

    return (
      <div>
        <header className="header">
          <h1 className="header-h1">Conversor</h1>
        </header>
        <Form getData={this.getData} />
        <Companies companies={this.state.companies} loading={this.state.loading} amount={this.state.amount} currency={this.state.currency} />
      </div>
    )
  }
}

export default App;
