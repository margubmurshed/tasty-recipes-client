import React from 'react';
import image from '../../assets/Error Element/exception.png';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div>
            <div className='p-5 border-b'>
                <Link to="/" className='block text-center text-2xl font-semibold'>Tasty Recipes</Link>
            </div>
            <div style={{height: 'calc(100vh - 73px)'}} className='flex flex-col lg:flex-row items-center justify-center'>
                <img src={image} alt='image'/>
                <h3 className='text-center text-3xl md:text-8xl font-bold text-violet-500'>Exception Mode!</h3>
            </div>
        </div>
    );
};

export default ErrorElement;