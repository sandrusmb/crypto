import React from 'react';

const Form = (props) => {

    return (<div>
        <form onSubmit={props.getData}>
            <input type="number" ></input>
            <select name="currency" id="currency">
                <option value="BTC">De BTC a LTC</option>
                <option value="LTC">De LTC a BTC</option>/option>
            </select>
            <button >Convertir</button>
        </form>
    </div>)
}

export default Form;