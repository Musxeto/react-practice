import React from 'react';
import { useAuth } from './AuthContext';

const Login = () => {
    const { login } = useAuth();
    
    const handleLogin = () => {
        login();
    }
    return (
        <div>
            <button onClick={login}>Login</button>
        </div>
    );
}