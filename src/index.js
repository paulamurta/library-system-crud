import express from 'express';
import 'dotenv/config';
import { startDatabase } from './database';
import bookRoutes from './routes/book.routes';

const app = express();

app.use(express.json());

app.use('/books', bookRoutes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  startDatabase();
  console.log('Rodando na porta ' + PORT);
});

export default app;
