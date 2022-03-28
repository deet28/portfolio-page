import React, { useEffect, useState } from "react";
import gitIcon from "../media/github.png";
import linkedIcon from "../media/linked.png";
import resumeIcon from "../media/resume.png";
import profilePic from "../media/profilePic.jpg";
import { openSite } from "../open";

export default function Header() {
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(true);
  const [title, setTitle] = useState("Developer");

  const profilePicture = document.querySelector(".Header-Profile-Picture");

  function changeTitle() {
    if (title == "Developer") {
      return setTitle("Creator");
    } else if (title == "Creator") {
      return setTitle("Problem-Solver");
    } else if (title == "Problem-Solver") {
      return setTitle("Explorer");
    } else {
      return setTitle("Developer");
    }
  }
  //dancing picture
  useEffect(() => {
    const profilePicture = document.querySelector(".Header-Profile-Picture");
    setTimeout(() => {
      if (left == false) {
        setLeft(true);
        changeTitle();
        profilePicture.classList.add("Picture-Movement");
      } else {
        setLeft(false);
      }
    }, 1000);
  }, [right]);

  useEffect(() => {
    setTimeout(() => {
      if (right == false) {
        setRight(true);
      } else {
        setRight(false);
        profilePicture.classList.remove("Picture-Movement");
      }
    }, 1000);
  }, [left]);

  return (
    <div>
      <header className="Header-Main">
        <div className="Header-Title-Div">
          <img className="Header-Profile-Picture" src={profilePic}></img>
          <div className="Header-Titles">
            <h1 className="App-Page-Title">Hi, I'm David!</h1>
            <h3 className="Header-Role-Text">{title}</h3>
          </div>
        </div>

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
            <img
              id="Resume"
              className="Main-Link-Icon"
              src={resumeIcon}
              onClick={openSite}
            ></img>
          </div>
        </div>
      </header>
    </div>
  );
}
