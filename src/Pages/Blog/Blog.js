import React from 'react';
import { Vortex } from 'react-loader-spinner';
import { Typewriter } from 'react-simple-typewriter';


const Blog = () => {
    return (
        <div className='flex justify-center my-12'>
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
    );
};

export default Blog;