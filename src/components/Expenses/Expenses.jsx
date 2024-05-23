import React from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';

const Expenses = ({ items, onDeleteExpense }) => {
  return (
    <div>
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={onDeleteExpense}
        />
      ))}
    </div>
  );
};

Expenses.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
  onDeleteExpense: PropTypes.func.isRequired,
};
export default Expenses;
