const
    mongoose = require('mongoose'),
    User = require('../models/User'),
    signToken = require('../serverAuth').signToken

module.exports = {
    index: (req, res) => {
         User.find({}, (err, users) => {
             res.json({success: true, users})
         })       
    },

    create: (req, res) => {
        User.create(req.body, (error, user) =>{
            if(error) return res.json({success: false, error: 'Sorry that email is already taken!'})
            const token = signToken(user)
            res.json({success: true, token })
        })
    },

    show: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            if(err) return console.log(err)
            res.json({user})
        })
    },

    update: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            if(err) return console.log(err)
            Object.assign(user, req.body)
            user.save((err, updatedUser) => {
                if(err) return console.log(err)
                res.json({updatedUser})
            })
        })
    },

    destroy: (req, res) => {
        User.findByIdAndRemove(req.params.id, (err, user) => {
            if(err) return console.log(err)
            res.json({success: true, msg: `deleted user ${user}`})
        })
    },

    authenticate: (req, res) => {
        console.log(req.body.email)
        User.findOne({email: req.body.email}, (err, user) => {
            if(!user || !user.validPassword(req.body.password)) {
                console.log('no')
                return res.json({success: false, error: 'Invalid credentials'})
            }
            console.log('ok')
            const token = signToken(user)
            res.json({success: true, token})
        })
    }
}