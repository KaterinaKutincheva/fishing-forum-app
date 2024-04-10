Fishing Forum Web App

This project is a web application for a fishing forum, developed using Angular for the front end and a Node.js/Express server for the back end. It allows users to view and interact with various fishing-related topics, including themes, posts, and user profiles.

Getting Started
Prerequisites
Node.js and npm installed on your local machine
MongoDB database running and accessible

Installation
Clone this repository to your local machine.
Navigate to the fishing-forum-app directory.

Install dependencies for the Angular front end:
cd fishing-forum-app
npm install

Install dependencies for the Node.js back end:
cd rest-api
npm install

Running the Application
Start the Node.js server:
cd rest-api
node server.js

Start the Angular development server:
cd fishing-forum-app
ng serve

Open your browser and navigate to http://localhost:4200/ to view the application.

Features

User Authentication: Allows users to register, log in, and log out.
Navigation: Dynamic navigation bar displays different links based on user authentication status.
Theme Listing: Displays a list of fishing themes fetched from the backend.
Profile Management: Users can view and edit their profiles.
Create New Theme: Logged-in users can create new fishing themes.

Directory Structure
fishing-forum-app: Contains the Angular front-end application files.
rest-api: Contains the Node.js/Express back-end server files.

Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request to suggest improvements or fix any bugs.
