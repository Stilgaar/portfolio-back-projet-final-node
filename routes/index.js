const express = require('express');
const router = express.Router();
const post = require('../control/control')

router.post('/message', post.newMessage)

module.exports = router;
