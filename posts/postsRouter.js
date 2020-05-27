

const router = require('express').Router();

const Posts = require("../auth/helpers")

const validateToken = require('../auth/authenticate-middleware')

router.get('/', validateToken, (req, res) => {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  Posts.getPosts(requestOptions)
  .then(data => {
    res.status(200).json({data});
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get posts' });
  });
});

module.exports = router;