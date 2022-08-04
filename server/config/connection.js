const mongoose = require("mongoose");

// CHANGE PLACEHOLDER (DB_NAME) WHEN THE DATABASE IS NAMED
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/gather-the-magic",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
