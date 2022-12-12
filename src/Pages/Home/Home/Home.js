import React from 'react';

import './Home.css';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import { ContactMe } from '../Contact/Contact';

const Home = () => {
    return (
        <div className='homepart' >
            <Header></Header>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;