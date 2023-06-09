import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'>  


          <div className=' bg-success p-2 ' >
          Currency  {
      <select className='bg-success border-0 outline-0 w-50' name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option className='bg-success border-0' value="$">$ Dollar</option>
        <option className='bg-success border-0' value="£">£ Pound</option>
        <option className='bg-success border-0' value="€">€ Euro</option>
        <option className='bg-success border-0' value="₹">₹ Ruppee</option>
      </select>	
        } 
        </div>
    </div>
    );
};

export default Location;