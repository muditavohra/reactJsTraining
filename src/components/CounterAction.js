import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/counterSlice';
import { decrement } from '../redux/counterSlice';


function CounterAction(props) {
    const dispatch=useDispatch()
    return (
    <div>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>decrement</button>
    
    </div>   
    );
}

export default CounterAction;