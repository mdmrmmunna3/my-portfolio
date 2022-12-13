import React from 'react';
import { Vortex } from 'react-loader-spinner';
import { Typewriter } from 'react-simple-typewriter';


const Blog = () => {
    return (
        <section className='homepart py-12'>
            <h2 className='text-xl lg:text-5xl text-center nameTitle my-12 text-orange-600' data-aos="fade-up"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="1500"><progress className="progress lg:w-60 w-20 bg-orange-600"></progress><span>Blo<span className='text-violet-600'>Gs</span></span><progress className="progress lg:w-60 w-20 bg-violet-600"></progress></h2>

            <div className='flex justify-center'>
                <h1 className='lg:text-3xl text-xl nameTitle flex items-center' style={{ paddingTop: '3rem', margin: 'auto 0', fontWeight: 'normal' }}>
                    <span style={{ color: 'blueviolet', fontWeight: 'bold' }}>
                        <span className='mr-2 text-orange-600'>Blogs</span>
                        <Typewriter
                            words={["Are Coming",]}
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </span>
                    <span className='mr-2 text-white flex items-center'>S<Vortex
                        visible={true}
                        height="40"
                        width="40"
                        ariaLabel="vortex-loading"
                        wrapperStyle={{}}
                        wrapperClass="vortex-wrapper"
                        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                    /> <Vortex
                            visible={true}
                            height="40"
                            width="40"
                            ariaLabel="vortex-loading"
                            wrapperStyle={{}}
                            wrapperClass="vortex-wrapper"
                            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                        />
                        n</span>
                </h1>
            </div>
        </section>
    );
};

export default Blog;

