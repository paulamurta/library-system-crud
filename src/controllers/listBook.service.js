import listBookService from '../services/listBook.service';

const listBookController = async (request, response) => {
  const { isbn } = request.params;
  try {
    const searchedBook = await listBookService(isbn);

    return response.status(200).json(searchedBook);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listBookController;
