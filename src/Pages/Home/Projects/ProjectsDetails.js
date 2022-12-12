import React from 'react';
import './ProjectsDetails.css';

const ProjectsDetails = ({ project }) => {
    const { img, name, liveSite, clienCode, serverCode } = project
    return (
        <div data-aos="zoom-in-down"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="1500">
            <div className="card border shadow-2xl">
                <figure><img className='imgStyle' src={img} alt="projectImg" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{name}</h2>

                    <div className="card-actions justify-start">
                        <a href={clienCode} target="_blank" className="btn btn-outline homepart text-white">Client Code</a>
                        <a href={liveSite} target="_blank" className="btn btn-outline homepart text-white">Live Site</a>
                        <a href={serverCode} target="_blank" className="btn btn-outline homepart text-white">Server Code</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;