import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Spent = () => {
    const {budget, spent, Location } = useContext(AppContext);
    // const totalExpenses = expenses.reduce((total, item) => {
    //     return (total += (item.AllocatedBudget));
    // }, 0);


    return (
        <div className='alert alert-primary'>
            {/* {
                budget < spent && alert(" you cannot reduce the budget value lower than the spending") 
            } */}
            <span>Spent so of: {Location}{spent}</span>
        </div>
    );
};

export default Spent;
