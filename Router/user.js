const express = require('express');
const router = express.Router();
const { userLogin } = require('../controllers/userControllers');

router.get('/', userLogin);
router.get('/login', userLogin);


module.exports = router;