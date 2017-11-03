const
    jwt = require('jsonwebtoken'),
    User = require('./models/User')
//

// function for creating tokens
function signToken(user) {
    const userData = user.toObject()
    delete userData.password
    return jwt.sign(userData, process.env.JWT_SECRET)
}

// function for verifying tokens
function verifyToken(req, res, next) {
    // grab token
    const token = req.get('token') || req.body.token
    if(!token) return res.json({success: false, message: 'No token provided!'})

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedData) => {
        if(err) return res.json({success: false, message: 'Invalid Token!'})

        if(req.params.id !== decodedData._id) {
            return res.json({success: false, message: 'Out of bounds'})
        }

        User.findById(decodedData._id, (err, user) => {
            if(!user) return res.json({success: false, message: 'Invalid Token'})
            req.user = user
            next()
        })
    })
}

module.exports = {
    signToken,
    verifyToken
}