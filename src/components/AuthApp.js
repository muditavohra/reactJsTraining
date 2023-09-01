import React from 'react';
import AuthState from './AuthState';
import AuthAction from './AuthAction';

function AuthApp(props) {
    return (
        <div>
            <AuthState/>
            <AuthAction/>
        </div>
    );
}

export default AuthApp;