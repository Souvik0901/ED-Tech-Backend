const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
   domain:{
    type: String,
    required: true
  },
  
  banner:{
    type: String,
    required: true
  },

  cost:{
    type: Number,
    required: true
  },
  description:{
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Profile', courseSchema)