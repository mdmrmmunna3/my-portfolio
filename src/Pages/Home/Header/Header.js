import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../../assets/MD MUSTAFIJUR RAHMAN MUNNA-Resume (1) (1).pdf'
// import img from '../../../assets/IMG_4503.jpg'
const Header = () => {
    return (
        <section>
            <div className=" ">
                <div className="hero-content flex justify-between flex-col lg:flex-row-reverse">
                    {/* <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='' /> */}
                    <div>
                        <h1 className='lg:text-4xl text-xl' style={{ paddingTop: '3rem', margin: 'auto 0', fontWeight: 'normal' }}>
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
                            <span >I'M A</span> {' '}
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
                            <a href={resume} className="btn btn-primary mr-5" download='MD MUSTAFIJUR RAHMAN MUNNA-Resume '>Download Resume</a>
                            <button className="btn btn-primary">Contact </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;