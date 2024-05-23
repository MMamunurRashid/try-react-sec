import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import ExpensesFilter from './components/FilterExpenses/FilterExpenses.jsx';
import './App.css'

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Toilet Paper",
      amount: 95.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 2,
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: 3,
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 4,
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const [filteredYear, setFilteredYear] = useState('2021');

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter(expense => expense.id !== expenseId);
    });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className='app'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
      <Expenses items={filteredExpenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
};



export default App;
