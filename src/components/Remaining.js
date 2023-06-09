import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const {remaining, Location } = useContext(AppContext);


    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.AllocatedBudget));
    // }, 0);

    return (
        <div className='alert alert-success'>
            <span>Remaining: {Location}{ remaining}</span>
        </div>
    );
};

export default Remaining;
