const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  userSchema = new mongoose.Schema({
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      orders: { type: Array }
  })
//


// added to the user model to hash passwords
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// added to user model to compare password syncs 
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

// middleware check if password was changed if so encrypt new password before
//saving
userSchema.pre('save', function(next) {
  if(this.isModified('password')) {
    this.password = this.generateHash(this.password)
  }
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User