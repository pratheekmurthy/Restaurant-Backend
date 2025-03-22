const express = require('express'); // Import Express framework
const configureDB = require('./database/db'); // Import database connection function
const router = require('./routes/restaurantRoutes'); // Import route handlers for restaurant operations

const app = express(); // Create an Express application instance

configureDB(); // Connect to MongoDB database

app.use(express.json()); // Middleware to parse JSON requests

app.use(router); // Load restaurant API routes

app.listen(4001, () => { // Start the Express server and listen on the defined port
    console.log(`Server is running on port ${4001}`); // Log server start message
});
