

const router = require('express').Router();

const Posts = require("../auth/helpers")

const validateToken = require('../auth/authenticate-middleware')

router.get('/', (req, res) => {
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

router.post('/', validateToken, (req, res) => {
  const postData = req.body;
  postData.user_id = res.req.username.sub



  Posts.add(postData)
  .then(post => { 
    if (post){
      Posts.getUserPosts(postData.user_id)
        .then(post => {
          res.status(201).json(post)
        })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new post' });
  });
});

router.get('/user/:id', validateToken, (req, res) => {
  const {id} = req.params;
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  Posts.getUserPosts(id, requestOptions)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
})

router.post('/:id/steps', validateToken, (req, res) => {
  const stepData = req.body
  const {id} = req.params;
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  Posts.getPostById(id, requestOptions)
  .then(post => {
    if(post) {
      stepData.posts_id = id
      Posts.addStep(stepData)
      .then(step => {
        res.status(201).json(step)
      })
    } else {
      res.status(404).json({message: "no post with that ID"})
    }
  })
  .catch(err => {
    res.status(500).json({message: err.message})
  })
})

router.get('/:id/steps', validateToken, (req, res) => {
  const {id} = req.params;
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  Posts.getStepsById(id, requestOptions)
    .then(steps => {
      res.status(200).json(steps);
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })

})

router.get('/:id', (req,res) => {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };
  const {id} = req.params;

  Posts.getPostById(id, requestOptions)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Posts.remove(id)
  .then(deleted => {
    if (deleted) {
      res.status(200).json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find post with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete post' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Posts.getPostById(id)
  .then(post => {
    if (post) {
      Posts.update(changes, id)
      .then(updatedPost => {
        res.json(updatedPost);
      });
    } else {
      res.status(404).json({ message: 'Could not find post with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update post' });
  });
});



module.exports = router;