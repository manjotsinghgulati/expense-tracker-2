import React from 'react'
import './ExpenseFilter.css'
const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year:</label>
                <select value = {props.selected} onChange = {dropdownChangeHandler}>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter