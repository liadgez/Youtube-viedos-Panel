const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');


//communication test
router.put('/:id/update', product_controller.product_update);
router.post('/create', product_controller.product_create);
router.delete('/:id/delete', product_controller.product_delete);
router.get('/:id', product_controller.product_details);
// home route
router.get("/", (req, res) => {
    res.json({
      message: "Welcome to to video manager api"
    });
  });
  // deafualt route
  router.all("*", (req, res) => {
    res.json({
      message: "oh no, no route for you!"
    });
  });

module.exports = router;