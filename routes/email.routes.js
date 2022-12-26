const express = require('express');
const { getAllEmails, addEmail } = require('../controllers/email.controllers');
const router = express.Router();


router.get('/', getAllEmails)

router.post('/', addEmail)

module.exports = router