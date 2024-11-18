const express = require('express');
const { getAllProducts, getAllProductsTesting } = require('../controllers');
const router = express.Router();

router.get('/',getAllProducts);
router.get('/testing',getAllProductsTesting);

module.exports = router;