import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from 'dayjs'

import {useState} from 'react'

import './ExpenseForm.css'

dayjs.extend(customParseFormat);



function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [enteredValues, setEnteredValues] = useState({
    //     title: '',
    //     price: '',
    //     date:''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setEnteredValues(prevState => {...enteredValues, title: event.target.value})
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
        // setEnteredValues(prevState => {...enteredValues, price: event.target.value})
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setEnteredValues(prevState => {...enteredValues, date: event.target.value})
    };


    const submitHandler = (event) => {
        event.preventDefault();
        const date = dayjs(enteredDate, 'YYYY-MM-DD', true);

        const expenseData = {
            title: enteredTitle,
            date: date.$d,
            price: parseFloat(enteredPrice)
        }

        props.onSaveExpenseData(expenseData);
        
        setEnteredDate('');
        setEnteredPrice('');
        setEnteredTitle('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleChangeHandler} type="text"/>
                </div>
                <div className="new-expense__control">
                    <label>price</label>
                    <input value={enteredPrice} onChange={priceChangeHandler} type="number" min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={enteredDate} onChange={dateChangeHandler} type="date" min="2019-01-01" max="2021-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
