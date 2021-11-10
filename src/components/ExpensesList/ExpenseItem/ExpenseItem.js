import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item__description">{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
