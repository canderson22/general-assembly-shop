module.exports = {
    index: (req, res) => {
        res.json({success: true, message: 'All users'})        
    },

    create: (req, res) => {
        res.json({success: true, message: 'created new user'})
    }
}