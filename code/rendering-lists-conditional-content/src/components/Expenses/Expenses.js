import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => { //
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let content = <p>Not found</p>;

    if(filteredExpenses.length > 0) {
        content = filteredExpenses.map(expense => {
            return <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}/>
        });
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {content}
            </Card>
        </div>
    );
}

export default Expenses;