const mongoose = require('mongoose')

// CHANGE PLACEHOLDER (DB_NAME) WHEN THE DATABASE IS NAMED
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/db_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose.connection