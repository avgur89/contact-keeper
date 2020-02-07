import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import * as types from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/auth');

      dispatch({ type: types.USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: types.AUTH_ERROR });
    }
  };

  // Register User
  const register = async formData => {
    const config = {
      heaedrs: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/users', formData, config);

      dispatch({
        type: types.REGISTER_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: types.REGISTER_FAILURE,
        payload: err.response.data.msg
      });
    }
  };

  // Login User
  const login = async formData => {
    const config = {
      heaedrs: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/auth', formData, config);

      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: err.response.data.msg
      });
    }
  };

  // Logout User
  const logout = () => {
    dispatch({ type: types.LOGOUT });
  };

  // Clear Errors
  const clearErrors = () => dispatch({ type: types.CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        user: state.user,
        error: state.error,
        loadUser,
        register,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
