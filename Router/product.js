const express = require('express');
const { getAllProducts, getAllparticularProducts, getdata } = require('../controllers/productController');
const router = express.Router();

router.get('/prodList', getAllProducts);
router.get('/prodList/:id/category', getAllProducts);
router.get('/getdata', getdata);

module.exports = router;