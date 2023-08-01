
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expense(props) {
  const [yearSelected, setYearSelected] = useState("2020");

  const yearFilteredHandler = (year) => {
    setYearSelected(year);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === yearSelected
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearSelected}
          onYearSelected={yearFilteredHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expense;
