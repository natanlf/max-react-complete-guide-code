import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2024, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 11, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 12, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 1, 12),
  },
  {
    id: 'e5',
    title: 'Clothes',
    amount: 150,
    date: new Date(2023, 1, 12),
  },
  {
    id: 'e6',
    title: 'Meal',
    amount: 30,
    date: new Date(2023, 5, 17),
  }
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses( (prevExpenses) => { 
      return [expense, ...prevExpenses]; //add a expense and join with previous expenses
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
