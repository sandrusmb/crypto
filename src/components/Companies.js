import React from 'react';
import ".././stylesheets/companies.scss";

const Companies = (props) => {

    const info = props.companies;
    const spinner = props.loading;
    const number = props.amount;
    const name = props.currency;
    const companiesKeys = Object.keys(info);
    const companiesValues = Object.values(info);

    if (spinner === 2) {
        return (<div className="loader"></div>)
    }
    else {
        return (

            <div className="ciaContainer">

                <div className="ciaContainer_keys">
                    {companiesKeys.map(companyKey => {
                        return (
                            <div>
                                <p>{companyKey}</p>
                                <hr />
                            </div>
                        )
                    })}
                </div>

                <div className="ciaContainer_values">
                    {companiesValues.map(companyValue => {

                        if (name === "BTC") {
                            if (companyValue == Math.max(...companiesValues)) {
                                return (

                                    <div className="paint">
                                        <p>{companyValue * number}</p>
                                        <hr />
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div>
                                        <p>{companyValue * number}</p>
                                        <hr />
                                    </div>
                                )
                            }
                        } else {

                            if (companyValue == Math.min(...companiesValues)) {
                                return (
                                    <div>
                                        <p className="paint">{(number * number) / companyValue}</p>
                                        <hr />
                                    </div>
                                )
                            } else {
                                return (
                                    <div>
                                        <p>{(number * number) / companyValue}</p>
                                        <hr />
                                    </div>
                                )
                            }
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default Companies;