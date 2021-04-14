import {useState} from 'react'

import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card';

import './Expenses.css'

const Expenses = (props) => {

    const [currentFilter, setCurrentFilter] = useState('2020');

    const changeFilterHandler = enteredFilter => setCurrentFilter(enteredFilter);

    const filteredExpenses = props.expenses.filter(expense => (expense.date.getFullYear().toString() === currentFilter))

    return (
        <Card className="expenses">
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesFilter selectedFilter={currentFilter} onChangeFilter={changeFilterHandler}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    )
}

export default Expenses
