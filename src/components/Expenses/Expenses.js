import { useState } from 'react';

import ExpensesList from './ExpensesList.js';
import Card from '../UI/Card.js';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

import './Expenses.css';
import ExpensesChart from './ExpensesChart.js';

const Expenses = (props) => {
    const [year, setyear] = useState('2020');
    const handleYearState = (data) => {
        setyear(data);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear() === parseInt(year)
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter handleYear={handleYearState} filteredYear={year} />
                <ExpensesChart expenses = {filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    )

}

export default Expenses;