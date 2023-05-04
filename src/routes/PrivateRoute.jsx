import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    console.log(user)
    if(loading) return <div className='flex justify-center p-5'><progress className="progress w-56"></progress></div>
    if(user) return children;
    else return <Navigate to="/login" state={{from : location}}/>
};

export default PrivateRoute;