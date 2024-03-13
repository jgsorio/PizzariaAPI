import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import router from './routes';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/files',express.static(path.resolve(__dirname, '..', 'uploads'))
);
app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(3333, () => console.log('Servidor Online'));