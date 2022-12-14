import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './Projects';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './ProjectDetails.css'
import "swiper/css/navigation";
import { Pagination, Autoplay, EffectCoverflow } from "swiper";
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ProjectDetails = () => {
    const { id } = useParams();

    console.log(id)

    const project = projects.find(project => id === project.id)
    const { name, liveSite, clientCode, serverCode, features, cpatureImg, technology_used } = project;
    console.log(project)
    return (
        <div className='homepart lg:p-12'>
            <h2 className='text-xl lg:text-5xl text-center nameTitle my-12 text-orange-600' data-aos="fade-up"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="1500"><progress className="progress lg:w-60 w-20 bg-orange-600"></progress><span>Projects<span className='text-violet-600'>Details</span></span><progress className="progress lg:w-60 w-20 bg-violet-600"></progress></h2>

            <div className="card lg:card-side shadow-xl homepart ">

                <div data-aos="fade-up-right"
                    data-aos-easing="ease-in-cubic"
                    data-aos-duration="1500" className='w-full '>

                    <div className=''>
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
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={cpatureImg?.img1} alt='' />

                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={cpatureImg?.img2} alt='' />

                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ' src={cpatureImg?.img3} alt='' />

                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className='mx-10'>
                        <p className='text-white'><span className='text-violet-600 font-semibold font-2xl'> Technology-used:</span> {technology_used}</p>
                    </div>
                </div>

                <div className="card-body text-white" data-aos="zoom-in-down"
                    data-aos-easing="ease-in-cubic"
                    data-aos-duration="1500">
                    <h2 className="card-title text-xl lg:text-3xl text-violet-600">{name}</h2>
                    <span className='lg:text-2xl text-orange-600'>Features : </span>

                    {
                        features?.features1 && features && <><li>{features?.features1}</li></>
                    }
                    {
                        features?.features2 && features && <><li>{features?.features2}</li></>
                    }
                    {
                        features?.features3 && features && <><li>{features?.features3}</li></>
                    }
                    {
                        features?.features4 && features && <><li>{features?.features4}</li></>
                    }
                    {
                        features?.features5 && features && <><li>{features?.features5}</li></>
                    }
                    {
                        features?.features6 && features && <><li>{features?.features6}</li></>
                    }
                    {
                        features?.features7 && features && <><li>{features?.features7}</li></>
                    }


                    <div className="card-actions justify-start mt-2">
                        <a href={clientCode} target="_blank" className="btn btn-outline homepart text-white">Client Code</a>
                        <a href={liveSite} target="_blank" className="btn btn-outline homepart text-white">Live Site</a>
                        <a href={serverCode} target="_blank" className="btn btn-outline homepart text-white">Server Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;

