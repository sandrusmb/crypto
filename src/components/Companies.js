import React from 'react';
import ".././stylesheets/companies.scss";

const Companies = (props) => {
    let info = props.companies;
    let number = props.amount;
    let name = props.currency;
    console.log(number);
    let companiesKeys = Object.keys(info);
    let companiesValues = Object.values(info);

    return (
        <div className="container">
            <div className="container_keys">
                {companiesKeys.map(companyKey => {
                    return (
                        <p>{companyKey}</p>
                    )
                })}
            </div>
            <div className="container_values">
                {companiesValues.map(companyValue => {

                    if (name === "BTC") {
                        return <p>{companyValue * number}</p>
                    } else {
                        return <p>{number / companyValue}</p>
                    }


                })}
            </div>
        </div>
    );
}

export default Companies;