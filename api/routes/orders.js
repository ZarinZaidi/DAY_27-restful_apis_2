//Importing the express module and create new router instance from the express module
const router = require('express').Router();

//Handle incoming GET requests to /orders
router.get('/', (req, res, next) => {
    //respond with 200 status code and a message
    res.status(200).json({
        message: 'Orders were fetched',
    });
});

//Handle incoming GET requests to /orders for specific id
router.get('/:id', (req, res, next) => {
    const productId = req.params.id;
    if (productId === 'special') {
        return res.status(200).json({ message: `Orders with id: ${productId}` });
    }
    res.json({ message: 'Not a special order' });
    next(); //move on to the next middleware
});

//Handle incoming POST requests to /orders
router.post('/', (req, res) => {
    //create new orders from a request body
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity,
    };
    //respond with 201 status code and a message
    res.status(201).json({
        message: 'Order was created',
        order: order,
    });
});

module.exports = router;