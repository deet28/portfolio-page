import React from 'react'
import { useRef } from 'react'
import waldo from '../media/waldo.png';
import reddit from '../media/reddit.png'

export default function Portfolio() {

  const portfolioSection = useRef(null)
  function openSite(){
    const waldoSite = "https://find-waldo-2e955.web.app/Home";
    window.open(waldoSite);
  }

  return (
  <>
  <div className = "Anchor-Tag-Section"id = "Portfolio-Anchor">
  </div>
    <div className = "Portfolio-Main">
      <h1 className = "Portfolio-Header">Portfolio</h1>
      <div className = "Portfolio-Project-Main">
        
        <div className = "Portfolio-Project">
          <div className = "Project-Card Waldo">
          <img className = "Project-Image" src = {waldo}></img>
          <h2 className = "Project-Header">Where's Waldo?</h2> 
          <p className = "Project-Description">
            An image search project that has the user
            locate and click on Waldo. Each attempt is
            timed, and user's can post their times to a 
            leaderboard. The data for this leaderboard is 
            stored and accessed through Firebase. 
          </p>
          <p className = "Project-Skills-Used">
            <span className = "Project-Skills">HTML/CSS</span>
            <span className = "Project-Skills">Javascript</span>
            <span className = "Project-Skills">React/Redux</span>
            <span className = "Project-Skills">Firebase/Firestore</span>
          </p>
          <p className = "Project-Link-Section">
            <button className = "Project-Link Waldo-Button" onClick = {openSite}>Live Preview</button>
            <button className = "Project-Link Waldo-Button">View Code</button>
          </p>
          </div>
        </div>

        <div className = "Portfolio-Project">
          <div className = "Project-Card Readit">
          <img className = "Project-Image" src = {reddit}></img>
          <h2 className = "Project-Header">Readit</h2> 
          <p className = "Project-Description">
            A "Reddit" clone that allows users to sign up,
            log in, post, add comments, and like or dislike content.
            User authentication is implemented using firebase auth. 
            Posts and comments are stored and accessed via firestore.   
          </p>
          <p className = "Project-Skills-Used">
            <span className = "Project-Skills">HTML/CSS</span>
            <span className = "Project-Skills">Javascript</span>
            <span className = "Project-Skills">React/Redux</span>
            <span className = "Project-Skills">Firebase/Firestore</span>
          </p>
          <p className = "Project-Link-Section">
            <button className = "Project-Link Readit-Button" onClick = {openSite}>Live Preview</button>
            <button className = "Project-Link Readit-Button">View Code</button>
          </p>
          </div>
        </div>

      </div>
    </div>
  </>
  )
}
