const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {
    console.log(req.body)
    let product = new Product(
        {
            Name: req.body.Name,
            Length: req.body.Length
        }
    );

    product.save(function (err) {
        if (err) {
            return res.send(err) 
        }
        res.send('Product Created successfully')
    })
};
//get one
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return res.send(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
        if (err) return res.send(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.send(err);
        res.send('Deleted successfully!');
    })
};