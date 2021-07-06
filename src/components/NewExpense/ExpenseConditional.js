import './ExpenseConditional.css'

const ExpenseConditional = (props) => {

    return <div>
        <button onClick = {props.changeActive}>Add New Expense</button>
    </div>
}

export default ExpenseConditional;