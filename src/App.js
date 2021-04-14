import {useState} from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Car insurance',
    price: 330.50,
    date: new Date(2020, 9, 14)
  },
  {
    id: 'e2',
    title: 'Car gear',
    price: 530.50,
    date: new Date(2020, 7, 13)
  },
  {
    id: 'e3',
    title: 'life insurance',
    price: 5000.50,
    date: new Date(2020, 7, 15)
  },
  {
    id: 'e4',
    title: 'Toilet paper',
    price: 3.50,
    date: new Date(2021, 8, 14)
  },
  {
    id: 'e5',
    title: 'life insurance',
    price: 5000.50,
    date: new Date(2020, 9, 15)
  },
  {
    id: 'e6',
    title: 'life insurance',
    price: 5000.50,
    date: new Date(2020, 12, 15)
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  

  const addExpenseHandler = expense => {
    setExpenses((oldExpenses) => [expense, ...oldExpenses]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
