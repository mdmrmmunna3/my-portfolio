import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../../assets/MD MUSTAFIJUR RAHMAN MUNNA-Resume (1) (1).pdf'
import img from '../../../assets/output-onlinegiftools (2).gif'


import 'aos';

const Header = () => {
    return (
        <section  className='pt-5'>
            <div className=" ">

                <div className=" flex justify-between  mx-12 flex-col lg:flex-row-reverse">
                    <div data-aos="fade-left"
                        data-aos-easing="ease-in-cubic"
                        data-aos-duration="1000" >
                        <img src={img} className="rounded-lg " alt='' />
                        
                    </div>

                    <div data-aos="fade-right"
                        data-aos-easing="ease-in-cubic"
                        data-aos-duration="1000" >
                        <h1 className='lg:text-3xl text-sm' style={{ paddingTop: '3rem', margin: 'auto 0', fontWeight: 'normal' }}>
                            <span className='mr-2 text-white'>I'M</span>
                            <span style={{ color: 'blueviolet', fontWeight: 'bold' }}>

                                <Typewriter
                                    words={["MD MUSTAFIJUR RAHMAN MUNNA",]}
                                    loop
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                        </h1>

                        <h1 className='lg:text-4xl text-xl' style={{ paddingTop: '3rem', margin: 'auto 0', fontWeight: 'normal' }}>
                            <span className='text-white'>I'M A</span> {' '}
                            <span style={{ color: 'blueviolet', fontWeight: 'bold' }}>

                                <Typewriter
                                    words={['Front-End Developer', 'MEAN STACK', 'React Developer',]}
                                    loop
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                        </h1>
                        <div className='mt-4'>
                            <a href={resume} className="btn btn-outline homepart mr-5 text-white mb-2" download='MD MUSTAFIJUR RAHMAN MUNNA-Resume '>Download Resume</a>
                            <a href='#contact' className="btn btn-outline homepart text-white">Contact Me</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Header;