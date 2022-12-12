import React from 'react';
import { ContactUs } from '../Contact/Contact';

import Header from '../Header/Header';

const Home = () => {
    return (
        <div 
        // style={{
        //     backgroundColor: '#654c85'
        // }}
        >
            <Header></Header>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;