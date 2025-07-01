import React, { useState } from 'react';
import api from '../../Services/api';

interface Props {
  onAdd: () => void;
}

const ExpenseForm: React.FC<Props> = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    date: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.post('/', {
      ...formData,
      amount: parseFloat(formData.amount),
    });
    setFormData({ title: '', amount: '', category: '', date: '', notes: '' });
    onAdd();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input className="input" name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
        <input className="input" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <input className="input" name="date" type="date" value={formData.date} onChange={handleChange} required />
        <input className="input col-span-1 md:col-span-2" name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} />
        <button className="col-span-1 md:col-span-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
