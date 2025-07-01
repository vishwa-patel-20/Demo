import React from 'react';
import { Expense } from '../../Types/types';

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseTable: React.FC<Props> = ({ expenses, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Expense List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Category</th>
              <th className="p-3">Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">No expenses found</td>
              </tr>
            ) : (
              expenses.map((exp) => (
                <tr key={exp.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{exp.title}</td>
                  <td className="p-3">₹{exp.amount}</td>
                  <td className="p-3">{exp.category}</td>
                  <td className="p-3">{new Date(exp.date).toLocaleDateString()}</td>
                  <td className="p-3">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => onDelete(exp.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;
