import React from 'react';
import ".././stylesheets/companies.scss";

const Companies = (props) => {

    let info = props.companies;
    let spinner = props.loading;
    let number = props.amount;
    let name = props.currency;
    let companiesKeys = Object.keys(info);
    let companiesValues = Object.values(info);

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
                                        <p>{companyValue * number}<span>   ¡Ganador! </span></p>
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
                                        <p className="paint">{(number * number) / companyValue}<span> ¡Ganador!</span></p>
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