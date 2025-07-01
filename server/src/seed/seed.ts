import { createExpense } from '../services/expenseService';

async function seed() {
  await createExpense({
    title: 'Laptop EMI',
    amount: 3000,
    category: 'Installment',
    date: '2025-07-01',
    notes: 'Monthly EMI'
  });

  await createExpense({
    title: 'Lunch',
    amount: 250,
    category: 'Food',
    date: '2025-07-01'
  });

  console.log('Seeding done!');
}

seed();
