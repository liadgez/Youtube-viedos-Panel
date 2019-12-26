const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');


//communication test
router.put('/:id/update',(req,res)=>{
   product_controller.product_update (req,res);
  });

router.post('/create',(req,res)=>{
   product_controller.product_create(req,res);
  });

router.delete('/:id/delete',(req,res)=>{
   product_controller.product_delete(req,res);
});

router.get('/:id',(req,res)=>{
  product_controller.product_details(req,res);
});
// home route
router.get("/", (req, res) => {
    res.json({
      message: "Welcome to to video manager api"
    });
  });
  // deafualt route
  router.all("*", (req, res) => {
    res.status(400).send(`not found any page`);
  });

module.exports = router;