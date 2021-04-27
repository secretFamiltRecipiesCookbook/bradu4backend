const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Auth = require ('./auth-model');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../secrets/index');
const {checkUsernameAvailable, checkUsernameExists} = require('../middleware/middlwares');

router.post('/register', checkUsernameAvailable, (req, res) => {
    const {username, password} = req.body
    const hash = bcrypt.hashSync(password, 8)
    if (!username || !password){
      res.status(400).json({ message: 'username and password required'})
    } else {
      Auth.add({username, password: hash})
      .then((user) => {
        res.status(201).json({message: `Thank you for registering ${username}`});
      })
      .catch((err) => {
        res.status(500).json({message: err.message});
      });
    }
});

router.post('/login', checkUsernameExists, (req, res) => {
    if(!req.body.username || !req.body.password) {
      res.status(400).json({message: 'username and password required'})
    }  else {  
    const { username, password } = req.body;
    Auth.findBy({username})
        .then(([user]) => {
          if (user && bcrypt.compareSync(password, user.password)){
            const token = buildToken(user)
            res.status(200).json({
              message: `welcome, ${user.username}`,
              token
            })
          } else {
            res.status(401).json({message: 'invalid credentials'})
          }
        })
        .catch((err) => {
          res.status(500).json(err);
        });
      }
  });

  function buildToken(user){
    const payload = {
      subject: user.user_id,
      username: user.username
    }
    const options = {
      expiresIn: '1d',
    }
    return jwt.sign(payload, JWT_SECRET, options)
  }
  
  module.exports = router;