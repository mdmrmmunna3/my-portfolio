import React from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

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
        <div className='mt-16'>
            <div className="lg:w-1/2 lg:mx-auto w-full">
                <div className='text-center'>
                    <h4 className='text-primary font-bold lg:text-3xl text-xl nameTitle'>Contact Me</h4>
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
    );
}