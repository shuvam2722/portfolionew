import React from "react";
import "./Work.css";

function Works() {
  const works = [
    {
      id: 1,
      title: "Associate System Engineer",
      description:
        "Campus PlacementsOppurtunity through Superset.Hiring Consisted of 5 round in total.Online Quantitative Assessment,Coding Test,English Assessment,Technical Interview and followed by HR Interview.Click Below to get the detailed hiring workflow and interview questions asked.",
      image: "https://www.logo.wine/a/logo/Tech_Mahindra/Tech_Mahindra-Logo.wine.svg",
      github: "https://github.com",
      demo: "https://demo.com",
      company: "Tech Mahindra",
    },
    {
      id: 2,
      title: "Systems Engineer(Digital)",
      description:
        "TCS Free NQT(Off Campus) for 2023 batch was conducted in the month of august,2022.Total Hiring process was done virtually.Numerical Ability,Verbal Ability,Reasoning Ability for Ninja Role and Advanced Aptitude,2 Coding Questions and these all for Digital Roles.Click Below to get interview questions",
      image: "https://s7ap1.scene7.com/is/content/TCSCOMprod/Logo",
      github: "https://github.com",
      demo: "https://demo.com",
      company: "Tata Consultancy Services",
    },
    {
      id: 3,
      title: "Software Engineer",
      description:
        "Hiring Consisted of 2 major round,First round consisted of 5 quite hard level coding questions and followed by an hour based Technical and HR Interview on Frontend Technologies like ReactJS.Got Offer Letter in the month of August.Click below to get the coding questions.",
      image: "https://o.remove.bg/downloads/270e122f-8ba9-4d84-8b40-b5379bd5438b/ground-removebg-preview.png",
      github: "https://github.com",
      demo: "https://demo.com",
      company: "GroundTruth",
    },
    {
      id: 4,
      title: "Graduate Engineer Trainee",
      description:
        "Campus Placement Oppurtunity,managed by CIEM.Hiring Consisted of 2 Apti Rounds and TR and HR round.Though I could not make it to the company but it was one of the best experience.I am sharing my exlperience,click the link below to see.",
      image: "https://www.logo.wine/a/logo/Hexaware_Technologies/Hexaware_Technologies-Logo.wine.svg",
      github: "https://github.com",
      demo: "https://demo.com",
      company: "Hexaware Technologies",
    },
  ];

  return (
    <div className='works-container'>
      <h2>My Interview Experiences<span>(As</span> a <span>Fresher)</span></h2>
      <div className='works-wrapper'>
        {works.map((work) => (
          <div key={work.id} className='work-card slide-in'>
            <img src={work.image} alt={work.title} />
            <div className='company-name'>{work.company}</div>
            <div className='work-info'>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <div className='button-wrapper'>
                <a className='button' href={work.github} target='_blank' rel='noreferrer'>
                  Exp.
                </a><a className='button' href={work.demo} target='_blank' rel='noreferrer'>
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
