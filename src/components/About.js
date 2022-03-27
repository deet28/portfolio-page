import React from 'react'

export default function About() {
  return (
    <>
    <div className = "Anchor-Tag-Section"id = "About-Anchor"></div>
    <div className = "About-Main">
      <h1 className = "About-Header">About</h1>
      
      <div className = "About-Info-Main">
        
        <div className = "About-Personal-Main">
          <h2 className = "About-Header-Sub">Personal Info</h2>
            <p className = "About-Text">
              I am a passionate front-end web developer focused on using
              technology to create immersive web experiences. I love creating, and I love facilitating creativity in others. I have spent the last several months honing my skills by working on personal projects, feel free to check them out below!
            </p>
        </div>
        
        <div className = "About-Skills-Main">
          <h2 className = "About-Skills-Header">Skills</h2>
          <div className = "About-Skills-Main-List">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Redux</span>
            <span>Firebase</span>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}
