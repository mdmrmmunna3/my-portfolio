import React, { createContext, useState } from 'react';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [loading, setLoading] =useState(true);
    const myInfo = {loading, setLoading}
    return (
        <div>
            <AuthContext.Provider value={myInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;