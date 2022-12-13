import React from 'react';
import myimg from '../../assets/IMG_20220122_182634.jpg'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <section className='pt-5 homepart'>
            <h2 className='text-xl lg:text-5xl text-center nameTitle my-12 text-orange-600' data-aos="fade-up"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="1500"><progress className="progress lg:w-60 w-20 bg-orange-600"></progress><span>About<span className='text-violet-600'>Me</span></span><progress className="progress lg:w-60 w-20 bg-violet-600"></progress></h2>

            <div className=" flex justify-between items-center  mx-5 lg:mx-24 flex-col lg:flex-row-reverse">

                <div data-aos="flip-right"
                    data-aos-easing="ease-in-cubic"
                    data-aos-duration="1000" className='w-full'>
                    <h3 className='lg:text-3xl text-2xl mb-4 text-white'>About Me</h3>
                    <p className='text-white text-sm lg:text-xl break-all'>My name is Md Mustafijur Rahman Munna. I am 19 years old. I am a student of Dhaka  polytechnic institute's  computer science and technology department.I am a Front-end  Developer, React Js  Developer. I am an expert in HTML, CSS, Bootstrap, Tailwind CSS, ReactBootstrap, Tailwind Component, and basic to Firebase, Vercel, and MongoDB. I know the basic backend.  I am a quick learner, self-motivated, responsible, disciplined, and deadline-oriented Person. any situation I handle excellent thinking any solution and try to solve this problem as soon as</p>

                </div>

                <div data-aos="fade-right"
                    data-aos-easing="ease-in-cubic"
                    data-aos-duration="1000" className='w-full lg:mr-8 pt-4'>
                    <img src={myimg} className="myimge w-full lg:w-3/4 lg:h-96 h-60 rounded-3xl" alt='' />

                </div>

            </div>
        </section>
    );
};

export default AboutMe;