import express from 'express';
import cors from 'cors';
import expenseRoutes from './routes/expenseRoutes';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());

app.use('/api/expenses', expenseRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
