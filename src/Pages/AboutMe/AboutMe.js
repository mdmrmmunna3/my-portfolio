import React from 'react';
import myimg from '../../assets/IMG_20220122_182634.jpg'
import resume from '../../assets/MD MUSTAFIJUR RAHMAN MUNNA-Resume (1) (1).pdf'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <section className='pt-5 homepart'>
            <h2 className='text-xl lg:text-5xl text-center nameTitle my-12 text-orange-600' data-aos="fade-up"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="1000"><progress className="progress lg:w-60 w-20 bg-orange-600"></progress><span className='hover:text-violet-600'>About</span><span className='text-violet-600 hover:text-orange-600'>Me</span><progress className="progress lg:w-60 w-20 bg-violet-600"></progress></h2>

            <div className=" flex justify-between items-center mx-5 lg:mx-24 flex-col lg:flex-row-reverse">

                <div data-aos="flip-right"
                    data-aos-easing="ease-in-cubic"
                    data-aos-duration="1000" className='w-full'>
                    <h3 className='lg:text-5xl text-2xl mb-4 text-white font-bold'>About Me</h3>
                    <p className='text-white text-sm lg:text-xl break-all'>My name is Md Mustafijur Rahman Munna. I am 19 years old. I am a student of Dhaka  polytechnic institute's  computer science and technology department.I am a Front-end  Developer, React Js  Developer. I am an expert in HTML, CSS, Bootstrap, Tailwind CSS, ReactBootstrap, Tailwind Component, and basic to Firebase, Vercel, and MongoDB. I know the basic backend. <br /> <br /> I am a quick learner, self-motivated, responsible, disciplined, and deadline-oriented Person. any situation I handle excellent thinking any solution and try to solve this problem as soon as</p>

                    <div className='mt-4'>
                        <a href={resume} className="btn btn-outline homepart mr-5 text-white mb-2" download='MD MUSTAFIJUR RAHMAN MUNNA-Resume '>Download Resume</a>
                        <a href='#contact' className="btn btn-outline homepart text-white">Contact Me</a>
                    </div>

                </div>

                <div data-aos="fade-right"
                    data-aos-easing="ease-in-cubic"
                    data-aos-duration="1000" className='w-full lg:mr-8 pt-4'>
                    <img src={myimg} className="myimge w-full rounded-3xl" alt='' />

                </div>

            </div>
        </section>

        // <section>
        //     <article className='grid md:grid-cols-2 sm:grid-cols-1 grid-row-1'>
        //         <div>
        //             <img src={myimg} className="" alt="" />
        //         </div>
        //         <div>
        //             <p className='text-white text-sm lg:text-xl break-all'>My name is Md Mustafijur Rahman Munna. I am 19 years old. I am a student of Dhaka  polytechnic institute's  computer science and technology department.I am a Front-end  Developer, React Js  Developer. I am an expert in HTML, CSS, Bootstrap, Tailwind CSS, ReactBootstrap, Tailwind Component, and basic to Firebase, Vercel, and MongoDB. I know the basic backend. <br /> <br /> I am a quick learner, self-motivated, responsible, disciplined, and deadline-oriented Person. any situation I handle excellent thinking any solution and try to solve this problem as soon as</p>

        //         </div>
        //     </article>
        // </section>
    );
};

export default AboutMe;