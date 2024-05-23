import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExpenseItem.css';
import Card from '../UI/Card.jsx';
import ExpenseDate from './ExpenseDate.jsx';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </Card>
  );
};

ExpenseItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ExpenseItem;
