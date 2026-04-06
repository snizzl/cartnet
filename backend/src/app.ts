import express from 'express';
import cors from 'cors';
import itemRoutes from './routes/item.routes.ts';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/items', itemRoutes);

export default app;
