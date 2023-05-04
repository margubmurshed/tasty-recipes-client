import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import SadIMG from '../../assets/404/sad.png';

const NotFound = () => {
    const navigation = useNavigation();
    return (
        <div className='min-h-screen flex justify-center items-center'>
            {navigation.state === 'loading' 
            ? <div className='flex justify-center p-5'><progress className="progress w-56"></progress></div>
            :<div className='flex flex-col items-center gap-5'>
                <img src={SadIMG} alt="sad image" className='w-72' />
                <p className='text-7xl font-bold'>404</p>
                <p className='text-2xl tracking-widest'>Not Found</p>
                <Link to="/" className='btn bg-orange-400 border-orange-400'>Go to home</Link>
            </div>}
        </div>
    );
};

export default NotFound;