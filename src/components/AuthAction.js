import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/counterSlice';

function AuthAction(props) {
    const dispatch=useDispatch()
    
    return (
        <div>
            <button onClick={()=> dispatch(login())}>Login</button>
            <button onClick={()=>dispatch(logout())}>Logout</button>
            
        </div>
    );
}

export default AuthAction;