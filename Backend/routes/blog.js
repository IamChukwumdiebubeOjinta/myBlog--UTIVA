const router = require('express').Router();
const blogController = require('../controllers/blogController')
const authMiddleWare = require('../middleWares/authorization')
const ifUserExist = require('../middleWares/ifUserExist')
const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    console.log(file);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, "asset" + '-' + uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.get('/', blogController.getAllBlogs)
router.get('/:id', blogController.getBlogById)
router.get('/user/:id', authMiddleWare, ifUserExist, blogController.getByUserId)
router.post('/add', authMiddleWare, ifUserExist, upload.single("imageURL"), blogController.addBlog)
router.put('/:id', authMiddleWare, ifUserExist, upload.single("imageURL"), blogController.updateBlog)
router.delete('/:id', authMiddleWare, ifUserExist, blogController.deleteBlog)

module.exports = router;