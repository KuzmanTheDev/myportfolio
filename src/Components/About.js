import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var city = data.address.city;
    var phone = data.phone;
    var email = data.email;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            loading="lazy"
            className="profile-pic"
            src={profilepic}
            alt="Emmanuel's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>{city}</span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            {/* <div className="columns download">
              <p>
                <a href="file.pdf" className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
