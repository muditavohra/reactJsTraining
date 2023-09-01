import React from 'react';
import { useSelector } from 'react-redux'
function AuthState(props) {
    const authState= useSelector(state => state.count.auth)
    console.log(authState);
    
    return (
        <div>
           <h2>For Autherized users only....!</h2>
           {authState ? (
               <div>
                   <p>Congratulations..... ! you got 50% discount.</p>
                   <hr/>
                   <p>Use Coupon Code  GHTY789PLK to get discount</p>
               </div>
           ) :(
               <p>Please Login to see the offer</p>
           )}
        </div>
    );
}

export default AuthState;