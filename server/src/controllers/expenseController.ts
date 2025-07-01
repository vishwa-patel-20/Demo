import { Request, Response } from 'express';
import * as expenseService from '../services/expenseService';

export const getAll = async (_req: Request, res: Response) => {
  const data = await expenseService.getAllExpenses();
  res.json(data);
};

export const create = async (req: Request, res: Response) => {
  await expenseService.createExpense(req.body);
  res.status(201).json({ message: 'Expense added' });
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  await expenseService.deleteExpense(Number(id));
  res.sendStatus(204);
};
