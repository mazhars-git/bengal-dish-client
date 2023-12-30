import React, { createContext } from 'react';

const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const user = { displayName: 'user.name'};
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;