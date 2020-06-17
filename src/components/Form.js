import React from 'react';
import ".././stylesheets/form.scss";

const Form = (props) => {

    return (

        <form onSubmit={props.getData} className="form">
            <input type="number" required className="form-input" placeholder="Introduce un número" min="1" pattern="^[0-9]+"></input>
            <select name="currency" id="currency" className="form-select">
                <option value="BTC" className="container_form-select-option">De BTC a LTC</option>
                <option value="LTC" className="form-select-option">De LTC a BTC</option>/option>
                </select>
            <button className="form-btn">Convertir</button>
        </form>

    )
}

export default Form;