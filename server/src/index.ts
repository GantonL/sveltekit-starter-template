import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Warehouse } from './StorageSystem/classes/warehouse';

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ message: 'API is healthy' });
});

interface DataItem {
  id: number;
  name: string;
}


app.get('/api/allocate-cell', (_req: Request, res: Response<DataItem[]>) => {
  const warehouse = new Warehouse();
  const test1 = warehouse.allocateCell('bread', 2)
  console.log(test1);
  const test2 =warehouse.allocateCell('bamba', 6) 
  console.log(test2);
  const test3 = warehouse.allocateCell('yogurt', 6); 
  console.log(test3);
  const test4=warehouse.allocateCell('apple', 11) 
  console.log(test4);
  res.json({test1, test2, test3, test4});
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});