const Book = require("../models/book.model");

exports.getBooks = (req, res) => {
  try {
    const books = Book.find();
    return res.status(200).json({
      code: 200,
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al consultar los libros",
      error: error.message,
    });
  }
};

exports.getBookById = (req, res) => {
  const { bookId } = req.params;
  try {
    return res.status(200).json({
      code: 200,
      message: `Consulta de libro con id`,
      data: bookId,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al consultar el libro",
      error: error.message,
    });
  }
};

exports.createBook = (req, res) => {
  const { title, author, year } = req.body;
  console.log(req.body);

  try {
    return res.status(201).json({
      code: 201,
      message: "Libro creado",
      data: {
        title,
        author,
        year,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear el libro",
      error: error.message,
    });
  }
};
exports.updateBook = (req, res) => {
  const { bookId } = req.params;
  try {
    return res.status(200).json({
      code: 200,
      message: "Libro actualizado",
      data: {
        bookId,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar el libro",
      error: error.message,
    });
  }
};
exports.deleteBook = (req, res) => {
  const { bookId } = req.params;
  try {
    return res.status(200).json({
      code: 200,
      message: "Libro eliminado",
      data: bookId,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar el libro",
      error: error.message,
    });
  }
};
