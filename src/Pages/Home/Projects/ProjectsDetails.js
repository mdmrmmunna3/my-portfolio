import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsDetails.css';

const ProjectsDetails = ({ project }) => {
    const { img, name, liveSite, clientCode, serverCode ,id} = project
    return (
        <div data-aos="zoom-in-down"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="1500">
            <div className="card border shadow-2xl">
                <figure><img className='imgStyle transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' src={img} alt="projectImg"  /></figure>
                <div className="card-body transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                    <h2 className="card-title text-white">{name}</h2>

                    <div className="card-actions lg:justify-start">
                        <a href={clientCode} target="_blank" className="btn btn-outline homepart text-white">Client Code</a>
                        <a href={liveSite} target="_blank" className="btn btn-outline homepart text-white">Live Site</a>
                        <a href={serverCode} target="_blank" className="btn btn-outline homepart text-white">Server Code</a>
                        <Link to={`/project/${id}`} className="btn btn-outline homepart text-white">Details</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;