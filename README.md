[https://sandrusmb.github.io/crypto/](https://sandrusmb.github.io/crypto/)

![Demo](https://github.com/sandrusmb/crypto/blob/master/src/images/demo%20crypto%2011-50-58-978.gif?raw=true)

## Install dependencies

This project is developed with React using npm to manage dependencies. To install them, execute

```
npm install
```

## Start the project

Once the dependencies are installed, you can start the project by executing

```
npm start
```

## Project in production

To run the code in production mode I have created the build folder by running npm build. This way the website will be available in `/ docs / public /` so you simply have to open the file index.html in the browser or [https://sandrusmb.github.io/crypto/](https://sandrusmb.github.io/crypto/)

## Structure

crypto

├── docs

│ └── ...

├── public

│ ├── favicon.ico

│ ├── index.html

│ └── manifest.json

├── src

│ ├── components

│ │ ├── App.js

│ │ │ └── Form.js

│ │ │ └── Companies.js

│ ├── img

│ │ │ └── ...

│ ├── stylesheets

│ │ │ └── App.css

│ │ │ └── form.scss

│ │ │ └── companies.scss

| └── index.js
| └── index.css

## Decisions

I have used the App.js component as the main class component that manages all the states of the application.

Its children, Form.js and Companies.js components, are functional type.

The Form.js component is made up of a number type input that collects the number of currencies to be converted. It has a pattern that prevents negative numbers, decimals or symbols from being indicated.

In addition, it has a select type input that allows the user to choose the currency exchange rate they want to perform: from BTC to LTC and vice versa.

Finally, it has a "Convert" button that sends the data collected in the form to the App.js component and activates the API call.

App.js starts from an initial state in which the array of companies and their change values ​​is empty. The default amount of currencies to change is 1, the default currency is BTC. Once the form is submitted, the API call occurs and the data in setState is edited.

Since the API call is asynchronous and it takes a few seconds to receive the response, I have created a spinner in the Companies.js component so that the user knows that the data is being processed.

The spinner has 3 states: 1 before the query, 2 while the data is not received and 3 when we have already received the API data.

When we receive the API data, the Companies.js component takes care of painting them.

For this I have converted the keys of the object that we receive from the API into one array and the values ​​into another to be able to paint the names of the companies and the exchange values ​​using the map method.

Using conditionals I have performed a series of mathematical operations to find the change from BTC to LTC and from LTC to BTC. I have also highlighted the higher result by highlighting it with green color.

From a style point of view, to improve the reading of the results to the user, I have included a series of separator lines with the </hr> tag.

I have created styles for the components using CSS, SCSS and Sass. All measurements are relative using rem as the unit and I have used green as the corporate color for the button, spinner and underline for the best result.

The chosen font is Quicksand from Google Fonts.

The web application is totally responsive because I have used media queries to modify the size of the form and some extra details.

## Observations

I have really enjoyed and learned doing this exercise. I know there are things to improve but I am proud of the code I have created and of being able to solve the problem using my logic.

I am a diamond in the rough and, although I have a lot to polish, I have talent, I am constant and hard-worker. I hope you consider it for the position.

Thank you!