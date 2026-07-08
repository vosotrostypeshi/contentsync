
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createPost, getPosts } = require('../controllers/postController');
const { validatePost } = require('../middleware/validation');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/', upload.array('media', 5), validatePost, createPost);
router.get('/', getPosts);

module.exports = router;
