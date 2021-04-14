import ExpenseItem from './ExpenseItem'

import './ExpensesList.css'

const ExpensesList = (props) => {
    
    if (props.filteredExpenses.length === 0) {
        return <p className="expenses-list__fallback">There are no expenses</p>
    }

    return (
        <ul className="expenses-list">
            {props.filteredExpenses.map(expenseItem => {
            return (
                <ExpenseItem 
                key={expenseItem.id}
                title={expenseItem.title}
                price={expenseItem.price}
                date={expenseItem.date}
                />
            )})}
        </ul>
    )
}

export default ExpensesList
