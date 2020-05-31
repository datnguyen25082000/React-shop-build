const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find().then(users => res.json(users))
    .catch(err => res.status(400).json('Error; ' + err));
});

router.route('/check').post((req,res) => {
    User.find(req.body)
    .then(user => { res.json(user[0].username)
    })
    .catch(error => res.json({isConnected: false}));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User({username, password});

    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.json({register: false}));
});

module.exports = router;