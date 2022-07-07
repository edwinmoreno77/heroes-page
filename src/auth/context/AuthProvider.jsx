import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

import { types } from '../types/types';

const initialState = {
    logged: false,
}

export const AuthProvider = ({ children }) => {

    const [AuthState, dispatch] = useReducer(authReducer, initialState);

    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name,
                logged: true
            }
        }

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...AuthState,
            login: login
        }}>
            {children}
        </AuthContext.Provider>
    )
}
