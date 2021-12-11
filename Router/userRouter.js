const express = require('express')

const router = express.Router();
const userController = require('../Controllers/UserController')

router.get('/', userController.index);
router.get('/create', userController.add);
router.get('/:id', userController.show);
module.exports = router;