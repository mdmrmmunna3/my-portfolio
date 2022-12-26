import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Pagination } from "swiper";
import './Skills.css'

import skill1 from "../../assets/skills/html.png";
import skill2 from "../../assets/skills/css.png";
import skill3 from "../../assets/skills/js.png";
import skill4 from "../../assets/skills/bootstrap.png";
import skill5 from "../../assets/skills/tailwind.png";
import skill6 from "../../assets/skills/react.png";
import skill7 from "../../assets/skills/nodejs.png";
import skill8 from "../../assets/skills/firebase.png";
import skill9 from "../../assets/skills/mongodb.png";
import skill10 from "../../assets/skills/vercel.png";

const Skills = () => {
    return (
        <div id='skills' className='py-16 text-center homepart'>
            <div data-aos="zoom-in-down"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="1000" >
                <h1 className='text-2xl md:text-3xl lg:text-5xl mb-4 '><progress className="progress lg:w-60 w-20 bg-orange-600"></progress><span className='text-orange-600'>My</span> <span className='text-violet-600'>Skills</span><progress className="progress lg:w-60 w-20 bg-violet-600"></progress></h1>

            </div>

            <div data-aos="zoom-in-down"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="1500">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="mySwiper "
                >
                    <div className=' '>
                        <SwiperSlide >
                            <figure><img className='border transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ' src={skill1} alt="projectImg" /></figure>

                        </SwiperSlide>
                    </div>

                    <SwiperSlide>
                        <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={skill2} alt='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={skill3} alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={skill4} alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={skill5} alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={skill6} alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={skill7} alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={skill8} alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={skill9} alt='' />

                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={skill10} alt='' />

                    </SwiperSlide>

                </Swiper>
            </div>
            <div id='container'></div>
        </div>
    );
};


export default Skills;