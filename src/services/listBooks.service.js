import database from '../database';
const listBooksService = async () => {
  try {
    const res = await database.query('SELECT * FROM books');
    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listBooksService;
