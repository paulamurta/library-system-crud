import { Router } from 'express';
import createBookController from '../controllers/createBook.controller';
import listBooksController from '../controllers/listBooks.controller';
import listBookController from '../controllers/listBook.service';
import updateBookController from '../controllers/updateBook.controller';

const bookRoutes = Router();

bookRoutes.post('', createBookController);
bookRoutes.get('/:isbn', listBookController);
bookRoutes.get('', listBooksController);
bookRoutes.patch('/:isbn', updateBookController);

export default bookRoutes;
