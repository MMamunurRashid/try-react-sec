import React from 'react';
import PropTypes from 'prop-types';
import './FilterExpenses.css';

const ExpensesFilter = ({ selectedYear, onChangeFilter }) => {
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={dropdownChangeHandler}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

ExpensesFilter.propTypes = {
  selectedYear: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default ExpensesFilter;
