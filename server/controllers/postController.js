
const Post = require('../models/Post');

const createPost = async (req, res) => {
  try {
    const { content, platforms, characterCount, status } = req.body;
    const media = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

    const post = new Post({
      content,
      platforms,
      media,
      characterCount: Number(characterCount),
      status
    });

    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPost, getPosts };
