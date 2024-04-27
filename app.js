//Import 'express' module
const express = require("express");

//Create new express application
const app = express();

//Import 'morgan' middleware to manage/log different HTTP request in/out
const morgan = require("morgan");

//Import 'body-parser' middleware for parsing request bodies
const bodyParser = require("body-parser");

//Import the routes for products and orders
const productRoutes = require("./api/routes/products");
const ordersRoutes = require("./api/routes/orders");


//Middleware setup
app.use(morgan("dev")); //Logging HTTP request in dev mode
app.use(bodyParser.urlencoded({ extended: false })); //Parsing the diff url-encoded bodies
app.use(bodyParser.json()); //Parsing the JSON request bodies

//Routes setup
app.use("/products", productRoutes); //Assigning routes for products
app.use("/orders", ordersRoutes); //Assigning routes for orders


//Middleware to handle 404 errors
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
})

//Middleware to handle 500 errors
app.use((req, res, next) => {
    req.status(error.status || 500); //Set response status based on error status received or default to 500 (Internal server error)
    req.json({
        error: {
            message: erro.message
        }
    }); //Send JSON response with error message
});

//Exporting the Express app for use in other modules
module.exports = app;