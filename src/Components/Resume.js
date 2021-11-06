import React from "react";

var Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            {/* <em className="date">{education.graduated}</em> */}
          </p>
        </div>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <h3>{skillmessage}</h3>

          <div className="skills">
            <div style={{}}>
              <h4>Front End</h4>
              <p className="info">
                HTML, CSS, Javascript, Typescript, Reactjs, Nextjs,
                Bootstrap/ChakraUI/MaterialUI
              </p>
              <h4>Back End</h4>
              <p className="info">
                Firebase, Nodejs, MongoDB, PostgreSQL, Sanity,
              </p>
              <h4>API Design</h4>
              <p className="info">REST, GraphQL, GROQ</p>
              <h4>Tools</h4>
              <p className="info">Git, Github, Redux(state management)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
