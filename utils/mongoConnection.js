const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://kevinjperezd2:qj0v2UMdDRpe7ZCs@books.za6keni.mongodb.net/?retryWrites=true&w=majority&appName=books")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

module.exports = mongoose;
