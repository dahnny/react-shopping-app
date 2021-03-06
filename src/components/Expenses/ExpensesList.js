
import ExpenseItem from './ExpenseItem';

import './ExpensesList.css'

const ExpensesList = (props) => {

    if (props.expenses.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }

    return (
        <div className="expense-list">
            {props.expenses.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount} />)}
        </div>
    )

}

export default ExpensesList;

