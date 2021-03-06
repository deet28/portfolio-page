import React from "react";
import { useState, useEffect } from "react";
import waldo from "../media/waldo.png";
import reddit from "../media/reddit.png";
import shop from "../media/shop.png";
import { openSite } from "../open";

export default function Portfolio() {
  const [fun, setFun] = useState([]);

  function forFun() {
    const header = document.querySelector(".Readit-Header");
    setTimeout(() => {
      header.classList.add("Test");
    }, 200);
    setFun("Hello");
  }

  useEffect(() => {
    return fun;
  }, [fun]);

  return (
    <>
      <div className="Anchor-Tag-Section" id="Portfolio-Anchor"></div>
      <div className="Portfolio-Main">
        <h1 className="Portfolio-Header">Portfolio</h1>

        <div className="Portfolio-Project-Main">
          <div className="Portfolio-Project Readit-Card">
            <div className="Project-Card Readit">
              <img
                className="Project-Image Readit-Image"
                onMouseOver={forFun}
                src={reddit}
              ></img>
              <h2 className="Project-Header Readit-Header">Readit</h2>
              <p className="Project-Description">
                A full stack "Reddit" clone that allows users to sign up, log
                in, post, comment, and like or dislike content. Authentication
                is implemented using firebase auth. Data is stored and accessed
                via firestore.
              </p>
              <p className="Project-Skills-Used">
                <span className="Project-Skills">HTML/CSS</span>
                <span className="Project-Skills">Javascript</span>
                <span className="Project-Skills">React/Redux</span>
                <span className="Project-Skills">Firebase/Firestore</span>
              </p>
              <p className="Project-Link-Section">
                <button
                  className="Project-Link Readit-Button Readit1"
                  onClick={openSite}
                >
                  Live Preview
                </button>
                <button
                  className="Project-Link Readit-Button Readit2"
                  onClick={openSite}
                >
                  View Code
                </button>
              </p>
            </div>
          </div>

          <div className="Portfolio-Project Waldo-Card">
            <div className="Project-Card Waldo">
              <img className="Project-Image Waldo-Image" src={waldo}></img>
              <h2 className="Project-Header">Where's Waldo?</h2>
              <p className="Project-Description">
                An image search project that has the user locate and click on
                Waldo. Each attempt is timed, and users can post their times to
                a leaderboard. The data for this leaderboard is stored and
                accessed through Firebase.
              </p>
              <p className="Project-Skills-Used">
                <span className="Project-Skills">HTML/CSS</span>
                <span className="Project-Skills">Javascript</span>
                <span className="Project-Skills">React/Redux</span>
                <span className="Project-Skills">Firebase/Firestore</span>
              </p>
              <p className="Project-Link-Section">
                <button
                  className="Project-Link Waldo-Button Waldo1"
                  onClick={openSite}
                >
                  Live Preview
                </button>
                <button
                  className="Project-Link Waldo-Button Waldo2"
                  onClick={openSite}
                >
                  View Code
                </button>
              </p>
            </div>
          </div>

          <div className="Portfolio-Project">
            <div className="Project-Card Shopping-Cart Shop-Card">
              <img className="Project-Image Shop-Image" src={shop}></img>
              <h2 className="Project-Header">Shopping Cart</h2>
              <p className="Project-Description">
                An example app of a shopping cart. Users can select goods, and
                these goods are added to their cart. The cart displays the total
                price of all goods in the cart dynamically. This app is
                implemented using React/Redux.
              </p>
              <p className="Project-Skills-Used">
                <span className="Project-Skills">HTML/CSS</span>
                <span className="Project-Skills">Javascript</span>
                <span className="Project-Skills">React/Redux</span>
              </p>
              <p className="Project-Link-Section">
                <button
                  className="Project-Link Shop-Button Shop1"
                  onClick={openSite}
                >
                  Live Preview
                </button>
                <button
                  className="Project-Link Shop-Button Shop2"
                  onClick={openSite}
                >
                  View Code
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
