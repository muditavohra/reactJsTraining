import React from 'react';
import CounterAction from './CounterAction';
import CounterState from './CounterState';

function CounterApp(props) {
    return (
        <div>
            <CounterAction/>
            <CounterState/>
        </div>
    );
}

export default CounterApp;