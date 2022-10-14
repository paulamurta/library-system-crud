import createBookService from '../services/createBook.service';

const createBookController = async (request, response) => {
  const { isbn, name, author, pages, copies } = request.body;
  try {
    const book = await createBookService(isbn, name, author, pages, copies);
    return response.status(201).json(book);
  } catch (error) {
    return response.status(400).json(err.message);
  }
};

export default createBookController;
