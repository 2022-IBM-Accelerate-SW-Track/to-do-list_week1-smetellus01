import React, { Component } from 'react';
import "./About.css";
import seb_profile from "../assets/profile.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={seb_profile}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Sebastian Metellus</div>
        <div className="brief_description">
          I'm a sophomore studying Computer Science at Florida State University and I aspire to become a software engineer!
          In my freetime, I enjoy playing ultimate frisbee with friends and drawing. I'm involced in multiple clubs on campus including
          Blacks in Computing, NSBE, and Black Student Union.
        </div>
      </div>
    </div>
      </div>
    )
  }
}
