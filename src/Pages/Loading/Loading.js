import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './Loading.css';

const Loading = ({children}) => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div class="loader text-center"></div>
    }
    else {
        return children;
    }
};

export default Loading;