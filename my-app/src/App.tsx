import React, { useEffect, useState } from 'react';
import api from './Services/api';
import ExpenseTable from './Components/ExpenseList/ExpenseTable';
import ExpenseForm from './Components/ExpenseForm/ExpenseForm';
import '../src/index.css'; 
import { Expense } from './Types/types';

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const fetchExpenses = async () => {
    const res = await api.get('/');
    setExpenses(res.data);
  };

  const handleDelete = async (id: number) => {
    await api.delete(`/${id}`);
    fetchExpenses();
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-4xl mx-auto">          
        <h1 className="text-3xl font-bold mb-6 text-center">Expense Tracker</h1>
        <ExpenseForm onAdd={fetchExpenses} />
        <ExpenseTable expenses={expenses} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
