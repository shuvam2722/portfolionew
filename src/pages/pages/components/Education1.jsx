import React from "react";
import "./Education1.css";
import college_logo from "../../Image/college_logo.png";


function Education() {
  const my_education_data = [    {      index: 1,      education_logo_link: college_logo,      education_image_link: "https://i.ibb.co/LggkYYw/college1.jpg",      college_name: "Calcutta Institute of Engineering and Management",      college_degree_name: "B.Tech in Information Technology",      education_spam: "2019-2023",      education_info: [        {          index: 1,          educ_info:            "⚡ I have studied basic software engineering subjects like Computer Networks, DBMS, Data Structure , OS etc.",        },        {          index: 2,          educ_info:            "⚡ Apart from this, I have done courses on Python, and Full Stack Development.",        },        {          index: 3,          educ_info:            "⚡  I have implemented several projects based on what I've learnt by my Self.",        },      ],
      btn_name: "Visit College Website",
      btn_link: "https://ciem.ac.in",
    },
    {
      index: 1,
      education_logo_link: "https://i.ibb.co/q1c04rb/122172-removebg-preview.png",
      education_image_link: "https://scontent.frdp4-2.fna.fbcdn.net/v/t39.30808-6/274080197_5589588144401142_3977219750072423487_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OX5-_lDDpSsAX8l6hsS&_nc_ht=scontent.frdp4-2.fna&oh=00_AfDc5CMUvX8M4zN-1zJujcwcy8C-4ixrjL0poIS8valugQ&oe=645FB5E4",
      college_name: "Rampurhat Jitendralal Vidyabhaban",
      college_degree_name: "Secondary-Higher Secondary(Till Class 12)",
      education_spam: "Pure Science(2011-2019)",
      education_info: [
        {
          index: 1,
          educ_info:
            "⚡ I have been here for allmost 8-9 years and developed myself from a kid to a responsible adult.",
        },
        {
          index: 2,
          educ_info:
            "⚡ My Sports Journey was started right from this place,where i won some inter school cricket,kabaddi competetion.",
        },
        {
          index: 3,
          educ_info:
            "⚡ This Place, the venue,the playground,the canteen,the classrooms will always be special for my entire life",
        },
      ],
      btn_name: "Visit School Website",
      btn_link: "https://www.facebook.com/rph.jlvb/",
    },
  ];

  return (
    <>
      <div className="educ_container">
        <div className="certificates_header_container">
          <h2>Education</h2>
          <div className="educ_div_section">
            {my_education_data.map((data, index) => {
              return (
                <div className="educ_upper_section" key={index}>
                  <div className="educ_container_one">
                    <img
                      src={data.education_image_link}
                      alt="educ_image"
                    />
                  </div>
                  <div className="educ_container_two">
                    <div className="upper_container_section">
                      <div className="upper_left">
                        <img
                          src={data.education_logo_link}
                          alt="college logo"
                        />
                      </div>
                      <div className="upper_middle">
                        <h3>{data.college_name}</h3>
                        <div className="upper_right">
                          <h4>{data.college_degree_name}</h4>
                          <h5 style={{ color: "green" }}>
                            {data.education_spam}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="educ_lower_section">
                      {data.education_info.map((indata, index) => {
                        return (
                          <div className="educ_data_info" key={index}>
                            <p>{indata.educ_info}</p>
                          </div>
                        );
                      })}
                      <div className="educ_btn">
                        <a href={data.btn_link}>
                          <button>{data.btn_name}</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              
            );
          })}
        </div>
        </div>
      </div>
    </>
  );
}

export default Education;
