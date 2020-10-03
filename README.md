This project repo was created using create-react-app cli tool

# Folder Structure
 - public
    - Holds only the index.html file & manifest.json file

 - server
    - Contins the index.js file responsible for starting an express server for server side rendering of react app

 - src
    - index.js - Main entry point or the main js file for the app
    - index.css - Contains all the css of the app
    - components - Contains the generic reusable components i.e like cards
    - screens - Contains the different pages of the app
    - utils - Contains the helper utilities & functions

 - .babelrc.json
    - Contains the babel compiler configurations

 - package.json
    - Contains the added dependencies & scripts for running the applcation

 - webpack.server.js
    - Contains config related to bundling of the app

# Running application on local
    - run npm install to install all the dependencies
    - run command -> npm run dev for starting the dev server & will start the app on local

# Functionalites running
    - Initially page gets loaded using ssr
    - All the filters are working according to either year, launch success, land success
    
    Bonus
    - Added clear filter functionality for clearing all the filters

    -* Images are not loaded since, the image url given in response to api is blocked

