const express = require('express');
const { getHeaderDetails, updateHeaderTitle, updateHeaderImage } = require('../controllers/header.controllers');
const router = express.Router();


router.get('/header-details', getHeaderDetails)

router.post('/header-title', updateHeaderTitle)


router.post('/header-image', updateHeaderImage)

module.exports = router