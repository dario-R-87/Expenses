import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enderedTitle,setEnderedTitle] = useState('');
    const [enderedAmount,setEnderedAmount] = useState('');
    const [enderedDate,setEnderedDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enderedTitle:"",
    //     enderedAmount:"",
    //     enderedDate:""
    // });

    const titleChangeHandler = (event) => {        
        setEnderedTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enderedTitle:event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, enderedTitle: event.target.value};
        // });
    };

    const amountChangeHandler = (event) => {        
        setEnderedAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enderedAmount:event.target.value
        // });
    };

    const dateChangeHandler = (event) => {        
        setEnderedDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enderedDate:event.target.value
        // });
    };

    // const inputChangeHandler = (identifier, value) => {
    //     if(identifier==="title"){
    //         setEnderedTitle(value);
    //     }else if (identifier==="date"){
    //         setEnderedDate(value);
    //     }else {setEnderedAmount(value);
    //     }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>TItle</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" maz="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
        </div>
    </form>;
}

export default ExpenseForm;