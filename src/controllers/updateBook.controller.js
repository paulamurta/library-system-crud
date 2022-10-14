import updateBookService from '../services/updateBook.service';

const updateBookController = async (request, response) => {
  const { isbn } = request.params;
  const { name, author, pages, copies } = request.body;

  try {
    const updatedBook = await updateBookService(
      isbn,
      name,
      author,
      pages,
      copies
    );

    return response.json(updatedBook);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default updateBookController;
