import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';
import {MdAddCircle} from 'react-icons/md'

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.department,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };
    
    const handleAddItem= () => {
        const item = {
            name: props.department,
        };
    
        dispatch({
            type: 'ADD_ITEM',
            payload: item,
        });

    }


    return (
        <tr>
        <td>{props.department}</td>
        <td>{Location}{parseInt(props.AllocatedBudget)}</td>
        {/* <td>{Location}{parseInt(props.unitprice)}</td>
        <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td> */}
        <td><MdAddCircle size='2.2em' color="green" onClick={handleAddItem}></MdAddCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaMinusCircle></td>
        <td><FaTimesCircle size='2.2em' color="black" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;