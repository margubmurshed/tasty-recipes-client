import React, { useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const MainLayout = () => {
    const navigation = useNavigation();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
      
    return (
        <div>
            <Navbar />
            {navigation.state === 'loading' ? <div className='flex justify-center p-5'><progress className="progress w-56"></progress></div> :<Outlet />}
            <Footer />
        </div>
    );
};

export default MainLayout;