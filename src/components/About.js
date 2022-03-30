import React from "react";
import h5 from "../media/h5.png";
import c3 from "../media/c3.png";
import jscriptIcon from "../media/javascript.png";
import reactIcon from "../media/react.png";
import reduxIcon from "../media/redux.png";
import firebaseIcon from "../media/firebase.png";
import ghIcon from "../media/github.png"; 
import gitIcon from "../media/git.png";
import npmIcon from "../media/npm.png";

export default function About() {
  return (
    <>
      <div className="Anchor-Tag-Section" id="About-Anchor"></div>
      <div className="About-Main">
        <h1 className="About-Header">About</h1>

        <div className="About-Info-Main">
          <div className="About-Personal-Main">
            <h2 className="About-Header-Sub">Personal Info</h2>
            <p className="About-Text">
              I am a passionate web developer focused on using
              technology to build immersive web experiences. I love creating,
              and I love facilitating creativity in others. I am a psychology
              major who turned to web development in order to  connect with people in new and inspiring ways. I have spent the last several months honing my
              skills by building my own personal projects from scratch, feel free to check some of
              them out below!
            </p>
          </div>

          <div className="About-Skills-Main">
            <h2 className="About-Skills-Header">Skills</h2>
            <div className="About-Skills-Main-List">
              <div className="Project-Skils-Div">
                <img className="Project-Skills-Image" src={h5}></img>
                <p className="Project-Skills-Text">HTML5</p>
              </div>
              <div className="Project-Skils-Div">
                <img className="Project-Skills-Image" src={c3}></img>
                <p className="Project-Skills-Text">CSS3</p>
              </div>
              <div className="Project-Skils-Div">
                <img className="Project-Skills-Image" src={jscriptIcon}></img>
                <p className="Project-Skills-Text">JavaScript</p>
              </div>
              <div className="Project-Skils-Div">
                <img className="Project-Skills-Image" src={reactIcon}></img>
                <p className="Project-Skills-Text">React</p>
              </div>
              <div className="Project-Skils-Div">
                <img className="Project-Skills-Image" src={reduxIcon}></img>
                <p className="Project-Skills-Text">Redux</p>
              </div>
              <div className="Project-Skils-Div">
                <img className="Project-Skills-Image" src={firebaseIcon}></img>
                <p className="Project-Skills-Text">Firebase</p>
              </div>
              <div className="Project-Skils-Div">
                <img className="Project-Skills-Image" src={ghIcon}></img>
                <p className="Project-Skills-Text">Github</p>
              </div>
              <div className="Project-Skils-Div">
                <img className="Project-Skills-Image" src={gitIcon}></img>
                <p className="Project-Skills-Text">Git</p>
              </div>
              <div className="Project-Skils-Div">
                <img className="Project-Skills-Image" src={npmIcon}></img>
                <p className="Project-Skills-Text">npm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
