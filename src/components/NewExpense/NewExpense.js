import {useState} from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import ExpenseConditional from './ExpenseConditional';


const NewExpense = (props) => {
    const [isActive, setisActive] = useState(true); 
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    }

    const changeActive = ()=>{
        setisActive((prev)=>{
            return !prev;
        })
    }   

    return <div className="new-expense">
        {isActive ? <ExpenseConditional changeActive = {changeActive}/> : <ExpenseForm changeActive = {changeActive} onSaveExpenseData={saveExpenseDataHandler} />}


    </div>
}

export default NewExpense;