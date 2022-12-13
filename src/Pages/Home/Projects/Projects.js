import React from 'react';
import ProjectsDetails from './ProjectsDetails';

const Projects = () => {

    const projects = [
        {
            "id": "01",
            "img": "https://i.ibb.co/khwqxWg/fly-to-grapher-28eea-web-app-Nest-Hub.png",
            "name": "fly-to-grapher",
            "liveSite": "https://fly-to-grapher-28eea.web.app/",
            "clienCode": "https://github.com/mdmrmmunna3/fly-to-grapher-client-assignment11",
            "serverCode": "https://github.com/mdmrmmunna3/fly-to-grapher-server-assignment11",
            "desciption": "The freestyle stroke, also known as front crawl, is the fastest and most efficient of the swimming strokes used in competition.",
        },
        {
            "id": "02",
            "img": "https://i.ibb.co/sPf926h/decency-fur-resale-web-app-Nest-Hub.png",
            "name": "decency-fur-resale",
            "liveSite": "https://decency-fur-resale.web.app/",
            "clienCode": "https://github.com/mdmrmmunna3/decency-fur-resale-client",
            "serverCode": "https://github.com/mdmrmmunna3/decency-fur-resale-server",
            "desciption": " Backstroke or back crawl is one of the four swimming styles used in competitive events regulated by FINA, and the only one of these styles swum on the back.",
        },

        {
            "id": "03",
            "img": "https://i.ibb.co/z6hd9y7/wd-development-course-web-app-Nexus-5.png",
            "name": "wd-development-course",
            "liveSite": "https://wd-development-course.web.app/",
            "clienCode": "https://github.com/mdmrmmunna3/web-devolopment-courses-client",
            "serverCode": "https://github.com/mdmrmmunna3/web-devolopment-courses-server",
            "desciption": "Breaststroke is a swimming style in which the swimmer is on their chest and the torso does not rotate. It is the most popular recreational style due to the ..",
        },
        {
            "id": "04",
            "img": "https://i.ibb.co/cCVqDRy/quadra-quiz-contest-netlify-app-i-Pad-Mini.png",
            "name": "quadra-quiz-contest",
            "liveSite": "https://quadra-quiz-contest.netlify.app/",
            "clienCode": "https://github.com/mdmrmmunna3/quadra-quiz-assignment9",
            "serverCode": "",
            "desciption": "The butterfly (colloquially shortened to fly) is a swimming stroke swum on the chest, with both arms moving symmetrically, accompanied by the butterfly ..",
        },
        {
            "id": "05",
            "img": "https://i.ibb.co/mcQV2D1/dasing-shark-club-netlify-app-i-Phone-12-Pro-1.png",
            "name": "dasing-shark-club",
            "liveSite": "https://dasing-shark-club.netlify.app/",
            "clienCode": "https://github.com/mdmrmmunna3/reactjs-assignment8",
            "serverCode": "",
            "desciption": "The butterfly (colloquially shortened to fly) is a swimming stroke swum on the chest, with both arms moving symmetrically, accompanied by the butterfly ..",
        },

    ]
    return (
        <div>
            <h2 className='text-xl lg:text-5xl text-center nameTitle my-12 text-orange-600' data-aos="fade-up"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="1500"><progress className="progress lg:w-60 w-20 bg-orange-600"></progress><span>Proj<span className='text-violet-600'>ects</span></span><progress className="progress lg:w-60 w-20 bg-violet-600"></progress></h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6 mx-6'>
                {
                    projects.map(project => <ProjectsDetails key={project._id} project={project}></ProjectsDetails>)
                }
            </div>
        </div>
    );
};

export default Projects;