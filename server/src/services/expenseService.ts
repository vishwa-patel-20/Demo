import { poolPromise } from '../config/db';

export const getAllExpenses = async () => {
  const pool = await poolPromise;
  const result = await pool.request().query('SELECT * FROM Expenses ORDER BY date DESC');
  return result.recordset;
};

export const createExpense = async (expense: {
  title: string;
  amount: number;
  category: string;
  date: string;
  notes?: string;
}) => {
  const pool = await poolPromise;
  const { title, amount, category, date, notes } = expense;
  await pool.request()
    .input('title', title)
    .input('amount', amount)
    .input('category', category)
    .input('date', date)
    .input('notes', notes || '')
    .query(`
      INSERT INTO Expenses (title, amount, category, date, notes)
      VALUES (@title, @amount, @category, @date, @notes)
    `);
};

export const deleteExpense = async (id: number) => {
  const pool = await poolPromise;
  await pool.request().input('id', id).query('DELETE FROM Expenses WHERE id = @id');
};
