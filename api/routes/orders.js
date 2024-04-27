const router = require('express').Router();

//Handle incoming GET requests to /orders
router.get('/', (req, res, next) => {
    //respond with 200 status code and a message
    res.status(200).json({
        message: 'Orders were fetched',
    });
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