import database from '../database';

const updateBookService = async (isbn, name, author, pages, copies) => {
  try {
    const res = await database.query(
      'UPDATE books SET name = $2, author = $3, pages = $4, copies=$5 WHERE isbn = $1 RETURNING *',
      [isbn, name, author, pages, copies]
    );
    if (res.rows.length === 0) {
      throw new Error('Book not found.');
    }
    return { message: 'Book updated.', book: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateBookService;
