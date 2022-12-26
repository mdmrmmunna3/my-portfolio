import React from 'react';
import emailjs from '@emailjs/browser';
import { FaUser, FaPhoneAlt, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';

export const ContactMe = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'email-template', e.target, 'jk6aMNxjZ489L2tth')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };


    return (
        <div id='contact' className='pt-16 homepart'>
            <div className='text-xl lg:text-5xl text-center nameTitle my-12 text-orange-600' data-aos="fade-up"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="1000"
            ><progress className="progress lg:w-60 w-20 bg-orange-600" ></progress><span>Contact<span className='text-violet-600'>Me</span></span><progress className="progress lg:w-60 w-20 bg-violet-600"></progress>
            </div>

            <div className='flex justify-center lg:flex-row-reverse flex-col'>

                <div className='lg:ml-16 ml-6' data-aos="zoom-in-down"
                    data-aos-easing="ease-in-cubic"
                    data-aos-duration="1000">

                    <h1 className='text-2xl lg:text-4xl font-bold nameTitle text-orange-600'>Contact Info: </h1>
                    <div className='my-8'>
                        <h2 className='font-bold lg:text-2xl text-sm flex items-center'> <span className='mr-2 hover:text-violet-500'><FaUser></FaUser></span> <span className='text-violet-500'>Md Mustafijur Rahman Munna</span></h2>
                        <br />
                        <h2 className='font-bold lg:text-2xl text-sm flex items-center'> <span className='mr-2 hover:text-violet-500'><FaPhoneAlt></FaPhoneAlt></span> <span className='text-violet-500'>+880 1403626034</span></h2>
                        <br />
                        <h2 className='font-bold lg:text-2xl text-sm flex items-center'> <span className='mr-2 hover:text-violet-500'><MdEmail></MdEmail></span> <span className='text-violet-500'>mdmustafijurrahmanmunna@gmail.com</span></h2>
                        <br />
                        <h2 className='font-bold lg:text-2xl text-sm flex items-center'> <span className='mr-2 hover:text-violet-500'><MdLocationOn></MdLocationOn></span> <span className='text-violet-500'>Mirpur, Dhaka, Bangladesh</span></h2>
                        <br />

                        <div className='flex ml-4'>
                            <p className='lg:text-3xl text-xl nameTitle text-violet-500'>Socal-Media:------</p>
                            <div className='flex '>
                                <a href="https://github.com/mdmrmmunna3/" target="blank"><FaGithub className='text-2xl lg:text-4xl ml-3'></FaGithub></a>
                                <a href="https://www.linkedin.com/in/md-mustafijur-rahman-munna/" target="blank"><FaLinkedin className='text-2xl lg:text-4xl text-blue-600 ml-3'></FaLinkedin></a>
                                <a href="https://www.facebook.com/mdmrm.munna.3/" target="blank"><FaFacebook className='text-2xl lg:text-4xl text-blue-700 ml-3'></FaFacebook></a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-2/4" data-aos="fade-right"
                    data-aos-easing="ease-in-cubic"
                    data-aos-duration="1000">
                    <div className='text-center'>
                        <h4 className='text-orange-600 font-bold lg:text-3xl text-xl nameTitle'>Contact Me</h4>
                    </div>
                    <div className=" w-full  shadow-2xl lg:p-6">
                        <form onSubmit={sendEmail} className="card-body">
                            <div className="form-control mb-4">
                                <input name='name' type="text" placeholder="Enter Your Name" className="input input-bordered  " required />
                            </div>
                            <div className="form-control mb-4">
                                <input name='email' type="text" placeholder="Email Address" className="input input-bordered " required />
                            </div>
                            <div className="form-control mb-4">
                                <input name='subject' type="text" placeholder="Subject" className="input input-bordered" required />
                            </div>
                            <textarea name='message' className="textarea textarea-primary " placeholder="Your Message" required />
                            <div className="form-control mt-6">
                                <input className='btn btn-outline btn-success font-bold' type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
}
