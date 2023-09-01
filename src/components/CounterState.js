import React from 'react';
import {  useSelector} from 'react-redux';
function CounterState(props) {
    const mycount= useSelector(state => state.count.counter)
    return (
        <div>
            <p>the count is : {mycount}</p>
        </div>
    );
}

export default CounterState;