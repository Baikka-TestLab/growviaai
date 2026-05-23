import React from 'react';
import Navbar from './Navbar';

import Footer from './Footer';
import { Outlet } from 'react-router';



const Final = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Final;