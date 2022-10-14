import listBooksService from '../services/listBooks.service';

const listBooksController = async (request, response) => {
  try {
    const books = await listBooksService();

    return response.status(200).json(books);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listBooksController;
