import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterItemsByYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onSelectFilter={filterItemsByYear}
      />
      {expensesContent}
    </Card>
  );
};

export default ExpensesList;
