
import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm.jsx'

/*The goal is to return a form*/
const NewExpense = () => {
  return (
    <div className="new-expense">
      {/*Here I will put the form component to keep it lean*/}
      <ExpenseForm> </ExpenseForm>
    </div>
  )
};

export default NewExpense;
