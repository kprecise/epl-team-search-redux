# EPL Team Search App (React, Webpack 4, The SportsDB API, Reactstrap, SASS and Autoprefixer)
This is a customised front end boilerplate using Webpack 4

## Webpack (Compiled CSS with autoprefixer)
This is already configured to compile SASS to CSS and to apply autoprefixing to the CSS

## Reactstrap
Implementation of reactstrap for a responsive layout

## The SportsDB API
Integration of the SportsDB Football API. Includes a search and selection of a current English Premier League team. The result then provides details such as club location, manager, basic history etc. Under the Match History section, a user can select a particular opponent team which produces a list of dates and results between the teams.

## Components

### Search Results
This is the master component that holds the main layout of the page and containes the Search Filter and Team Detail components

### Search Filter
A simple dropdown that is populated with EPL football team data from the API

### Team Detail
Based on the selected team's associated ID, detail about a particular team are produced and displayed. Under Match History anotehr dropdown can be selected that allows an opponent to be selected

### Match History
A sub component of Team Detail, Match History is generated from the Team Detail dropdown selection. It displays a history of matches between the two selected sides, including dates and scores.

### React FontAwesome
A component called FontAwesome where cool isons can be specified via an object through props from it's massive library 

## Quick Start

``` bash
# Install dependencies
npm install

# Serve on localhost:3000
npm run dev

# Build for production
npm run build
```
### Author

Kyri Kyriacou

### Version

1.0.0

### License

This project is licensed under the MIT License
