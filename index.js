const express = require("express");
const morgan = require("morgan");

require("./utils/mongoConnection.js");

const booksRouter = require("./routers/books.router.js");

const app = express();
const port = 3000;
app.use(express.json());

app.use(morgan("dev"));

app.use('/books', booksRouter);

app.get("/", (req, res) => {
  res.send("Bienvenidos");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
