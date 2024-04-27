//Import 'express' module
const express = require("express");

//Create new express application
const app = express();

//Import 'morgan' middleware to manage/log different HTTP request in/out
const morgan = require("morgan");

//Import 'body-parser' middleware for parsing request bodies
const bodyParser = require("body-parser");

//Middleware setup
app.use(morgan("dev")); //Logging HTTP request in dev mode
app.use(bodyParser.urlencoded({ extended: false })); //Parsing the diff url-encoded bodies
app.use(bodyParser.json()); //Parsing the JSON request bodies

//CORS(cross origin resource sharing) handling middleware to allow requests from any origin
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); //Allow requests from any origin
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    ); //Allow specified headers in requests
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET'); //Allow specified HTTP methods
        return res.status(200).json({}); //respond with an empty json object for options request
    }
    next(); //move on to the next middleware
});

//Import the routes for products and orders
const productRoutes = require("./api/routes/products");
const ordersRoutes = require("./api/routes/orders");

//Routes setup
app.use("/products", productRoutes); //Assigning routes for products
app.use("/orders", ordersRoutes); //Assigning routes for orders

app.get('/', (req, res) => {
    res.json({ message: 'Hello, welcome to API 2nd session' });
});

//Middleware to handle 404 errors
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);//to pass to other middleware
})

//Middleware to handle 500 errors
app.use((req, res, next) => {
    req.status(error.status || 500); //Set response status based on error status received or default to 500 (Internal server error)
    req.json({
        error: {
            message: error.message
        }
    }); //Send JSON response with error message
});

//Exporting the Express app for use in other modules
module.exports = app;