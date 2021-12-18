# Exercises
  Exercises REACT app using MERN stack

The MERN stack stands for MongoDB, Express, React, and Node. 

The purpose of this project is to create a fully functional React app in which users can enter their various exercises and have a list of their reps and weight.

This react app is implemented using the **Model-View-Controller organization**.

## Model
The 'Model' is the code within our REST API that interacts with both our MongoDB (database) and our Javascript to connect collections/documents to Javascript objects. Note that MongoDB is a document database (sometimes referred to as noSQL database). The model defines methods that will be called in the Controller.

## View
The 'View' is the REACT app, which users will interact with to make changes to their exercises. 

The React app is a Single Page Application (SPA) that tracks exercises completed by the users. This means that the web application interacts with the browser by dynamically rewriting the current web page with new data from the server. When users navigate to different 'pages', the React app manipulates the DOM so users get the 'look and feel' of navigating to different pages. 

The react app has the following three pages:
* Home Page
* Edit Exercise Page
* Create Exercise Page

## Controller
The 'Controller' is the code within our REST API that interacts with our Model and our View. It does this by setting up end points for CRUD operations:
* Create using POST /exercises
* Read using GET /exercises
* Update using PUT /exercises/:id
* Delete using DELETE /exercises/:id

The controller establishes the Express server.

When a request is sent to the API, it calls certain methods created by the Model in order to complete CRUD operations in the database








