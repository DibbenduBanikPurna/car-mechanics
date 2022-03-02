import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase.js';

export const AuthContext = createContext()
const AuthProvider = (props) => {
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {props.children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;