import database from '../database';
const listBookService = async (isbn) => {
  try {
    const res = await database.query('SELECT * FROM books WHERE isbn=$1', [
      isbn,
    ]);
    if (res.rows.length === 0) {
      throw new Error('Book not found.');
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default listBookService;
