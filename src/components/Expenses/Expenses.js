import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const filterSelect = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onFilterSelect={filterSelect} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
