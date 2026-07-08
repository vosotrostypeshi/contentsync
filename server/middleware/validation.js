
const validatePost = (req, res, next) => {
  const { content, platforms } = req.body;

  if (!content || content.trim() === '') {
    return res.status(400).json({ message: 'Content is required' });
  }

  let parsedPlatforms;
  try {
    parsedPlatforms = JSON.parse(platforms);
  } catch (error) {
    parsedPlatforms = null;
  }

  if (!parsedPlatforms || !Array.isArray(parsedPlatforms) || parsedPlatforms.length === 0) {
    return res.status(400).json({ message: 'At least one platform must be selected' });
  }

  req.body.platforms = parsedPlatforms;
  next();
};

module.exports = { validatePost };
