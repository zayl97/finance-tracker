import React, { useState } from "react";
import Card from "../UI/Card/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseItemsList from "./ExpenseItemsList/ExpenseItemsList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterItemsByYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onSelectFilter={filterItemsByYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseItemsList items={filteredExpenses} />
    </Card>
  );
};

export default ExpensesList;
