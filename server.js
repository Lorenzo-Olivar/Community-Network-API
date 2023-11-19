// imports
const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3001;

// Connection string to local instance of MongoDB
const connectionStringURI = `mongodb://127.0.0.1:27017`;

// Initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

// Declare a variable to hold the connection
let db;

// Create variable to hold our database name
const dbName = "socialDB";

// Use connect method to connect to the mongo server
client
    .connect()
    .then(() => {
        console.log("Connected to MongoDB");
        // Use client.db() constructor to add new db instance
        db = client.db(dbName);
        // start up express server
        app.listen(port, () => {
            console.log(`App listening at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.log(`Mongo Connection Error ${error.message}`);
    });

app.use(express.json());