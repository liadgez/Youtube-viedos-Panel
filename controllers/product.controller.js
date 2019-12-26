const Product = require('../models/product.model');

exports.productsController = {

async product_create (req, res) {
    if(!(isEmpty(req.body))) {
    let product = new Product(
        {
            Name: req.body.Name,
            Length: req.body.Length
        }
    );

    product.save(function (err) {
        if (err) {
            return res.status(500).send(err) 
        }
        res.send('Product Created successfully')
    })
    }
    else {
        res.status(400).send(`Non valid input`);
    }
},
 async product_details (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return res.status(500).send(err);
        res.send(product);
    })
},

async product_update (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
        if (err) return res.send(err);
        res.send('Product udpated.');
    });
},

async product_delete (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.send(err);
        res.send('Deleted successfully!');
    })
},
}