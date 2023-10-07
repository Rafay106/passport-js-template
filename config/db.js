const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => console.log(`MongoDB connected: ${conn.connection.host}`))
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
}

module.exports = connectDB;
