import database from '../database';

const createBookService = async (isbn, name, author, pages, copies) => {
  try {
    const res = await database.query(
      'INSERT INTO books(isbn, name, author, pages, copies) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [isbn, name, author, pages, copies]
    );
    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default createBookService;
