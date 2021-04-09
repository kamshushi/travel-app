# Project Description
This is a Travel App that let's you enter a city you are visiting and the date of the trip in a form , which then creates a Trip Card for you showing you some info about the trip like the weather, temprature , days before the trip ,etc...

> You have to enter both city and future date inputs for the card to be created 

> You can remove a card by clicking on the remove button 


# How to get it running on your local device 

- open the command line and cd to the project directory 
- run `npm install` to install project dependencies 
- Make a `.env` file in the project directory and add your own API keys 
    > geonamesUsername=********************
    > pixabayApiKey=********************
    > weatherbitApiKey=********************
- Run `npm run prod` to build your app in production mode
- Run `npm run start` to start the express server and get your app running on port 8081


# How it was created 
- This project was created using webpack as a building tool, HTML, sass and javascript , It also makes 3 API calls to external APIs (geonames, weatherbit, pixabay) to get the cards info
- The app use service workers
- The project was tested using jest 