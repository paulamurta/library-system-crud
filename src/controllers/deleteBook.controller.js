import deleteBookService from '../services/deleteBook.service';

const deleteBookController = async (request, response) => {
  const { isbn } = request.params;

  try {
    const deletedBook = await deleteBookService(isbn);

    return response.json(deletedBook);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default deleteBookController;
