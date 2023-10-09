import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { TesteController } from './controllers/TesteController';

let server: Express = express();

server.use(cors());
server.use(express.json());

let testeController: TesteController = new TesteController();

server.get('/', (req: Request, res: Response): Response => {
  return res.status(200).json({ text: 'Hello world!' });
});

server.get('/teste', testeController.list);

server.listen(3000, () => {
  console.log('Server started on port 3000!');
});