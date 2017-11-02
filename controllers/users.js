const
    mongoose = require('mongoose'),
    User = require('../models/User')

module.exports = {
    index: (req, res) => {
         User.find({}, (err, users) => {
             res.json({success: true, users})
         })       
    },

    create: (req, res) => {
        User.create(req.body, (err, user) =>{
            if(err) return res.json({success: false, error})
            res.json({success: true, user})
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
        User.findOne({email: req.body.email}, (err, user) => {
            if(!user || !user.validPassword(req.body.password)) {
                return res.json({success: false, message: 'Invalid credentials'})
            }

            const token = signToken(user)
            res.json({success: true, token})
        })
    }
}