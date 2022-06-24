import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [filteredYear,setFileredYear] = useState('2020');   

  const filterChangeHandler = (selectedYear) =>{
    setFileredYear(selectedYear);
  }
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/>
      {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        ))}
    </Card>
  );
};

export default Expenses;
