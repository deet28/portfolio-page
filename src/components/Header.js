import React from "react";
import gitIcon from "../media/github.png";
import linkedIcon from "../media/linked.png";
import resumeIcon from "../media/resume.png";
import { openSite } from '../open'

export default function Header() {

  return (
    <div>
      <header className="Header-Main">
        <h1 className="App-Page-Title">Hi, I'm David!</h1>
        <div className="App-Sub-Title">
          <h5>I am a web developer, and a passionate learner.</h5>
        </div>
        <div className="Header-Main-Links">
          <div className="Main-Link-Section">
            <img
              id="Git"
              className="Main-Link-Icon"
              src={gitIcon}
              onClick={openSite}
            ></img>
          </div>
          <div className="Main-Link-Section">
            <img
              id="Linked"
              className="Main-Link-Icon"
              src={linkedIcon}
              onClick={openSite}
            ></img>
          </div>
          <div className="Main-Link-Section">
            <img id="Resume" className="Main-Link-Icon" src={resumeIcon}></img>
          </div>
        </div>
      </header>
    </div>
  );
}
