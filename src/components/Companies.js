import React from 'react';

const Companies = (props) => {
    let info = props.companies;
    let companiesKeys = Object.keys(info);
    let companiesValues = Object.values(info);
    let i;
    let j;
    for (let i = 0; i < companiesKeys.length; i++) {
        console.log(companiesKeys[i]);
    }
    for (let j = 0; j < companiesValues.length; j++) {
        console.log(companiesValues[j]);
    }
    return (
        <div>
            <div>
                {companiesKeys.map(companyKey => {
                    return (
                        <p key={i}>{companyKey}</p>
                    )
                })}
            </div>
            <div>
                {companiesValues.map(companyValue => {
                    return (
                        <p key={j}>{companyValue}</p>
                    )
                })}
            </div>
        </div>
    );
}

export default Companies;