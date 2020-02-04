# Currency Exchange App

## App overview

This is a simple currency exchange app.

Features:
* setting your exchange rate (EUR/PLN)
    * it affects all prieviously added transactions
    * it is rounded to 2 decimal places
    * it is 4.50 by default
* adding your transaction to the list
    * input is validated against duplicates, empty names and negative numbers
    * amount in PLN is live calculated while changing exchange rate
* removing transaction from the list
* showing sum of all transactions
* showing the biggest transaction

## Tech overview
* the app is based on React and Redux,
    * state is divided into two reducers - transactions and configuration
* I added some simple styles using styled components
* main Redux elements are tested with Jest
* there is the Airbnb ESLint config

### Scripts
- start:dev - it starts the app in development mode
- start:prod - it starts the express production server
- build - it builds the production version
- test - it starts Jest
