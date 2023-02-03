const express = require('express');
const router = express.Router();

const adminController = require('../../controllers/APIs/adminController');


router.get('/administrar', adminController.list)
router.get('/administrar/productDetail/:id', adminController.detail);


module.exports = router;