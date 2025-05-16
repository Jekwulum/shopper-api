import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const PORT: number = 5002;
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'Order Service is running ✅' });
});

app.listen(PORT, () => {
  console.log(`Order Service is running on port ${PORT} ✅`);
});