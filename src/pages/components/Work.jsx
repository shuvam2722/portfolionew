import React from "react";
import "./Work.css";

function Works() {
  const works = [
    {
      id: 1,
      title: "Associate Software Engineer",
      description:
        "Campus Placement Oppurtunity through Superset.Hiring Consisted of 5 round in total.Online Quantitative Assessment,Coding Test,English Assessment,Technical Interview and followed by HR Interview.Click Below to get the detailed hiring workflow and interview questions asked.",
      image: "https://www.logo.wine/a/logo/Tech_Mahindra/Tech_Mahindra-Logo.wine.svg",
      demo1: "https://i.ibb.co/D1BXsWf/techmahindra.jpg",
      demo: "https://i.ibb.co/mBBXjYm/Picsart-23-05-08-18-33-35-148.jpg",
      company: "Tech Mahindra",
    },
    {
      id: 2,
      title: "Systems Engineer(Digital)",
      description:
        "TCS Free NQT(Off Campus) for 2023 batch was conducted in the month of august,2022.Total Hiring process was done virtually.Numerical Ability,Verbal Ability,Reasoning Ability for Ninja Role and Advanced Aptitude,2 Coding Questions and these all for Digital Roles.Click Below to get interview questions",
      image: "https://s7ap1.scene7.com/is/content/TCSCOMprod/Logo",
      demo1: "https://i.ibb.co/Vpw2Gk9/tcs.jpg",
      demo: "https://i.ibb.co/mBBXjYm/Picsart-23-05-08-18-33-35-148.jpg",
      company: "Tata Consultancy Services",
    },
    {
      id: 3,
      title: "Software Engineer",
      description:
        "Listed in career portal,the Hiring Consisted of 2 major round,First round consisted of 5 quite hard level coding questions and followed by an hour based Technical and HR Interview on Frontend Technologies like ReactJS.Got Offer Letter in the month of August.Click below to get the coding questions.",
      image: "https://i.ibb.co/dMS5xDZ/ground.jpg",
      demo1: "https://i.ibb.co/pJ3880T/groundtruth.jpg",
      demo: "https://i.ibb.co/mBBXjYm/Picsart-23-05-08-18-33-35-148.jpg",
      company: "GroundTruth",
    },
    {
      id: 4,
      title: "Graduate Engineer Trainee",
      description:
        "Campus Placement Oppurtunity,managed by CIEM and sponsored by Superset.Hiring Consisted of 2 Aptitude Rounds and TR and HR round.Though I could not make it to the company but it was one of the best experience.I am sharing my exlperience,click the link below to see.",
      image: "https://www.logo.wine/a/logo/Hexaware_Technologies/Hexaware_Technologies-Logo.wine.svg",
      demo1: "https://i.ibb.co/6ghkqkg/hexaware.jpg",
      demo: "https://i.ibb.co/mBBXjYm/Picsart-23-05-08-18-33-35-148.jpg",
      company: "Hexaware Technologies",
    },
  ];

  return (
    <div className='works-container'>
      <h2>My Interview Experiences<span>(As</span> a <span>Fresher)</span></h2>
      <div className='works-wrapper' >
        {works.map((work) => (
          <div key={work.id} 
          className='work-card slide-in' 
          
          work-card-aos="zoom-in-up"
          work-card-aos-duration="2000">
            
            <img src={work.image} alt={work.title} />
            <div className='company-name'>{work.company}</div>
            
            <div className='work-info'>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <div className='button-wrapper'>
                <a className='button' href={work.demo} target='_blank' rel='noreferrer'>
                  Exp.
                </a><a className='button1' href={work.demo1} target='_blank' rel='noreferrer'>
                  View Offer Letter
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
