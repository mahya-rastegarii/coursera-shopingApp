import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {


  // const {dispatch } = useContext(AppContext);
    const {dispatch, spent, Location, budget} = useContext(AppContext);
    const changeBudget = (val)=>{

      // if(budget < spent){
      //   alert(" you cannot reduce the budget value lower than the spending")
    
      //   dispatch({
      //     type: 'CHG_BUDGET_LOWER',
      //     payload: spent,
      //   })
      // }
      // else{

        dispatch({
          type: 'CHG_BUDGET',
          payload: val,
      })

      // }
     

      

    }

    // const [BudgetValue, setBudgetValue] = useState('2000')
    

  return (
        <div className='alert alert-secondary d-flex'>Budget:{Location}

            <input type='number' value={budget <= 20000 ? budget : 20000} onChange={e => changeBudget(e.target.value)}  />
           
      {/* <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
       <option value="£">Uk(£)</option>
        <option value="₹">India(₹)</option>
        <option value="€">Europe(€)</option>
        <option value="CAD">Canada(CAD)</option>
      </select>	 */}
    
    </div>
    );
};

export default Budget;