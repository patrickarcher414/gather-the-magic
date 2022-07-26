const { Schema, model } = require('mongoose') 
const bcrypt = require('bcrypt')

// ADD REFS TO USER FOR MODELS THAT BELONG TO THEM
const userSchema = new Schema({
  username: {
    type: String,
    required: 'A username is required.',
    unique: true,
    trim: true
  },
  email: {
  type: String,
  required: 'An email is required',
  trim: true,
  unique: true,
  match: [/.+@.+\..+/, 'Must be a valid email address']
  }, 
  pasword: {
    type: String,
    required: true,
    minlength: 6
  }
}, {
  timestamps: true
})

const User = model('User', userSchema)

module.exports = User