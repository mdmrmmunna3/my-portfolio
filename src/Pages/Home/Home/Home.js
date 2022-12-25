import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import { ContactMe } from '../Contact/Contact';
import Skills from '../../Skills/Skills';
import AboutMe from '../../AboutMe/AboutMe';
import Loading from '../../Loading/Loading';

const Home = () => {
    return (
        <div id='home' className='homepart' >
            <>
                <Loading></Loading> && <Header></Header>
                <AboutMe></AboutMe>
                <Projects></Projects>
                <Skills></Skills>
                <ContactMe></ContactMe>
            </>
        </div>
    );
};

export default Home;