const Book = require("../models/book.model");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
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

exports.getBookById = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Book.findById(bookId);
    return res.status(200).json({
      code: 200,
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al consultar el libro",
      error: error.message,
    });
  }
};

exports.createBook = async (req, res) => {
  const { title, author, isbn, price, stokc } = req.body;

  try {
    const book = new Book({
      title,
      author,
      isbn,
      price,
      stokc,
    });
    return res.status(201).json({
      code: 201,
      message: "Libro creado",
      data: book,
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
