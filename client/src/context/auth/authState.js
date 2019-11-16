import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import * as types from '../types';

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        isLoading: true,
        user: null,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User
    // Register User
    // Login User
    // Logout
    // Clear Errors

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                isLoading: state.isLoading,
                user: state.user,
                error: state.error
            }}
        >
            { props.children }
        </AuthContext.Provider>
    );
};

export default AuthState;
