import React from 'react';
import chefImage from '../../../assets/Home/Thomas-Keller.jpg';

const FeaturedChef = () => {
    return (
        <section className='bg-orange-500'>
            <h2 className='text-center text-3xl text-white font-bold mb-5 pt-10 pb-5 uppercase'>Featured Chef</h2>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2'>
                <img src={chefImage} alt="chef" className='mx-auto lg:-mb-10 rounded-md'/>
                <div className='text-white p-5'>
                    <h3 className='text-2xl font-semibold bg-white inline-block text-orange-500 px-3'>Meet - Thomas Keller</h3>
                    <p className='mt-3 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa perspiciatis eligendi quod quia temporibus numquam qui est vel, aliquam, eveniet nam aut ducimus reiciendis deserunt consequatur similique molestias? Libero amet minus odit consequatur nobis enim alias, veritatis eos et impedit necessitatibus ipsam modi non obcaecati iusto. Asperiores, soluta optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa perspiciatis eligendi quod quia temporibus numquam qui est vel, aliquam, eveniet nam aut ducimus reiciendis deserunt consequatur similique molestias? <br /> Libero amet minus odit consequatur nobis enim alias, veritatis eos et impedit necessitatibus ipsam modi non obcaecati iusto. Asperiores, soluta optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa perspiciatis eligendi quod quia temporibus numquam qui est vel, aliquam, eveniet nam aut ducimus reiciendis deserunt consequatur similique molestias? Libero amet minus odit consequatur nobis enim alias, veritatis eos et impedit necessitatibus ipsam modi non obcaecati iusto. Asperiores, soluta optio?</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedChef;