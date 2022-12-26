import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Pages/Home/Shared/Footer/Footer';
import Navbar from '../Pages/Home/Shared/Navbar/Navbar';

const Main = () => {

    return (
        <div
            style={{
                backgroundColor: "#212121"
            }}>
            {
                <><Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer></>
            }
        </div>
    );
};

export default Main;