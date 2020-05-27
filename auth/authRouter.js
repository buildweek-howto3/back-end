const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const bcrypt = require("bcryptjs")

const Users = require("./helpers")
const validateToken = require('../auth/authenticate-middleware')
const decodedToken = require('../auth/authenticate-middleware')

router.post("/register", (req, res) => {
    const credentials = req.body;

    if (credentials) {
        const rounds = process.env.BCRYPT_ROUNDS || 4;
        const hash = bcryptjs.hashSync(credentials.password, rounds);

        credentials.password = hash;

        Users.insert(credentials)
            .then(user => {
                res.status(201).json({data: user});
            })
            .catch(err => {
                res.status(500).json({message: err.message})
            });
    } else {
        res.status(400).json({ 
            message: "provide username and password"
        })
    }
});

router.post('/login', (req,res) => {
    const { username, password } = req.body
    if(req.body) {
        Users.findByUsername(username)
            .then(user => {
                if(user && bcrypt.compareSync(password, user.password)) {
                req.session.loggedIn = true;
                req.session.user = user;
                const token = generateToken(user)
                res.status(200).json({token})
                } else {
                  res.status(400).json({message: "invalid user/password"})
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({message: "somethin' went wrong, bucko"})
            })
    } else {
      res.status(400).json({ message: "please provide user and pass" })
    }
  })

  router.get('/users', validateToken, (req, res) => {
    const username = res.req.username.username
    const user_id = res.req.username.sub

    Users.find()
      .then(users => {
          res.status(200).json({currentUser: {username, user_id}, users})
      })
      .catch(err => {
          res.status(400).json({message: err.message})
      })
})


  function generateToken(user) {
    const payload = {
        sub: user.id,
        username: user.username,
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, process.env.JWT_SECRET || 'keepitsecret,keepitsafe', options)
  }

  module.exports = router;