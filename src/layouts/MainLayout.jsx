import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar />
            {navigation.state === 'loading' ? <div className='flex justify-center p-5'><progress className="progress w-56"></progress></div> :<Outlet />}
        </div>
    );
};

export default MainLayout;