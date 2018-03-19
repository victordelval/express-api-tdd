## Table of Contents

- [Short Description](#short-description)
- [Project Dependencies](#project-dependencies)
- [Project Structure](#folder-structure)
- [Testing](#testing)
- [Available Scripts](#available-scripts)


## Short Description
Exercise to create a simple backend based on a REST API with Node.js and Express.

It is about covering the following specifications expressed as user stories:

* As a USER I want to be able to call the API, that is, I want to be able to have a local server to make an HTTP call and to return something to me.

* As a USER I want to be able to call the API to create notes.

* As a USER I want to be able to call the API to consult the notes.

* As a USER I want to be able to call the API to see a single note.

* As a USER I want to be able to call the API to bookmark a note.

* As a USER I want to be able to call the API to check the notes marked as favorites.


## Project Dependencies
Development and production dependencies:

```
    "scripts": {
        "start": "node --require 'babel-register' src/index.js",
        "watch": "nodemon",
    },
    "devDependencies": {
        "babel-preset-env": "^1.6.1",
        "babel-register": "^6.26.0",
        "nodemon": "^1.17.2"
    },
    "dependencies": {
        "body-parser": "^1.18.2",
        "cors": "^2.8.4",
        "dotenv": "^5.0.1",
        "express": "^4.16.3",
        "morgan": "^1.9.0"
    }
```


## Project Structure
The project is organized presenting the following structure of folders and files:

```
nodejs-api-mcfly
    |- node_modules
        ...
    |- src
        index.js
    .babelrc
    .gitignore
    nodemon.json
    package-lock.json
    package.json
    README.md
```


## Testing
...


## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode. Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

### `npm run watch`

Runs the app with nodemon. Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.