// Import the Mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Define a function to configure and establish the database connection
const configureDB = () => {
    // Connect to the MongoDB database named "restaurant"
    mongoose.connect('mongodb://localhost:27017/restaurant', {
        useNewUrlParser: true,   // Ensures use of the new MongoDB connection string parser
        useUnifiedTopology: true // Enables the new server discovery and monitoring engine
    })
    .then(() => {
        // Executes when the connection is successful
        console.log("Connected to DB");  
    })
    .catch((err) => {
        // Executes if there is an error in the connection
        console.log("Error connecting to DB:", err);
    });
};

// Export the configureDB function so it can be used in other files
module.exports = configureDB;