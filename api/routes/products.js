//Importing the express module and create new router instance from the express module
const router = require('express').Router();

//Handle incoming GET requests to /products
router.get('/', (req, res, next) => {
    //respond with 200 status code and a message
    res.status(200).json({
        message: 'Products were fetched',
    });
});

//Handle incoming GET requests to /products for specific id
router.get('/:id', (req, res, next) => {
    const name = req.params.id;
    if (name === 'special') {
        return res.status(200).json({ message: `Products with name: ${name}` });
    }
    res.json({ message: 'Not a special product' });
    next(); //move on to the next middleware
});

//Handle incoming POST requests to /orders
router.post('/', (req, res) => {
    //create new orders from a request body
    const product = {
        name: req.body.name,
        price: req.body.price,
    };
    //respond with 201 status code and a message
    res.status(201).json({
        message: 'Product was created',
        createdProduct: product,
    });
});

module.exports = router;
