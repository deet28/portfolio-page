import React, { useState} from 'react'
import { openSite } from '../open'

export default function Contact() {
  const email = useState('davidturchetta@outlook.com');

  return (
    <>
      <div className="Anchor-Tag-Section" id="Contact-Anchor"></div>

      <div className="Contact-Main">
        <div className="Contact-Main-Text">
          <h1 className="Contact-Main-Header">Get in touch</h1>
          <h4 className="Contact-Info">Email:davidturchetta@outlook.com 
          </h4>
          <h4 className="Contact-Info">Discord:deet28#4176</h4>
          <h4 className="Contact-Info Linkedin" onClick={openSite}>
            Linkedin:www.linkedin.com/in/davidturchetta
          </h4>
        </div>
        <div className="Contact-Bottom">
          <h3 className="Contact-Bottom-Text">© David Turchetta 2022</h3>
          <h3 className="Source-Code-Link">Website Code</h3>
        </div>
      </div>
    </>
  );
}


//<h4 className="Contact-Info" mailto="davidturchetta@outlook.com">
//  Email:davidturchetta@outlook.com
//</h4>;