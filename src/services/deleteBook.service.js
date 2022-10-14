import database from '../database';

const deleteBookService = async (isbn) => {
  try {
    const res = await database.query(
      'DELETE FROM books WHERE isbn = $1 RETURNING *',
      [isbn]
    );

    if (res.rows.length === 0) {
      throw new Error('Book not found.');
    }

    return 'Book deleted.';
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteBookService;
