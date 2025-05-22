const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("./utils/mongoConnection.js");

const booksRouter = require("./routers/books.router.js");
const usersRouter = require("./routers/users.router.js");

const app = express();
const port = 3000;
app.use(express.json());

app.use(morgan("dev"));
app.use(cors());

app.use('/books', booksRouter);
app.use('/users', usersRouter);

app.get("/", (req, res) => {
  res.send("Bienvenidos");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
