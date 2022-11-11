const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers);
router.post('/signup', userController.createUser);
router.post('/login', userController.userLogin)


module.exports = router;