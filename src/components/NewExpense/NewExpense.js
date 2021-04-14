import {useState} from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css';

function NewExpense(props) {
    const [formVisibility, setFormVisibility] = useState(false);

    const toggleFormHandler = () => setFormVisibility(formVisibility  => !formVisibility);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        toggleFormHandler();
    }

    let newExpenseContent = <button onClick={toggleFormHandler}>Add new expense</button>;

    if (formVisibility) {
        newExpenseContent = <ExpenseForm onCancel={toggleFormHandler} onSaveExpenseData={saveExpenseDataHandler}/>
    }

    return (
        <div className="new-expense">
            {newExpenseContent}
        </div>
    )
}

export default NewExpense
