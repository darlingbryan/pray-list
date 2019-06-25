const mongoose = require('mongoose')

const PrayerSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  answered: {
    type: Boolean,
    default: false
  },
  archived: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('prayer', PrayerSchema)
