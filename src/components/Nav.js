import React from 'react'
import burgerIcon from '../media/burger.png';
import personIcon from '../media/person.png';
import portfolioIcon from '../media/portfolio.png';
import contactIcon from '../media/contact.png';

export default function Nav() {

  function showModal(){
    const navModal = document.querySelector(".Nav-Burger-Modal");
    //const nav = document.querySelector(".Nav-Main");
    const about = document.querySelector(".About-Main")
    const header = document.querySelector(".Header-Main");
    navModal.classList.add('Show-Modal');
    //nav.classList.add('Modal-Open');
    header.classList.add('Modal-Open');
    about.classList.add('Modal-Open');
  }
  
  function hideModal(e){
    if (e.target.classList.contains('Nav-UL-Burger')==true){
      return showModal();
    } else {
    const navModal = document.querySelector(".Nav-Burger-Modal");
    const nav = document.querySelector(".Nav-Main");
    const header = document.querySelector(".Header-Main");
    const about = document.querySelector(".About-Main")
    e.preventDefault();
    if (e.target.classList.contains('Nav-Burger-Modal')==false &&
        e.target.classList.contains('Modal-Button-Form')==false
        &&e.target.classList.contains('Modal-Button-Image')==false
        &&e.target.classList.contains('Modal-Button')==false){
       
        navModal.classList.remove('Show-Modal');
        nav.classList.remove('Modal-Open');
        header.classList.remove('Modal-Open');
        about.classList.remove('Modal-Open');
      } else {
      return;
      }
    }
  }

  React.useEffect(()=>{
      window.addEventListener("click",hideModal)
      return () => {
      window.removeEventListener('click', hideModal);
    };
  },[]);
  
  return (
  <>
    <div className = "Nav-Main">
      <div className = "Nav-Name">
        <h2 className = "Nav-Name-Text">David Turchetta</h2>
      </div>
      <ul className = "Nav-UL">
        <img className = "Nav-UL-Burger" src = {burgerIcon} onClick = {showModal}></img>
        <li className = "Nav-UL-Button">About</li>
        <li className = "Nav-UL-Button">Portfolio</li>
        <li className = "Nav-UL-Button">Contact</li>
      </ul>
    </div>
      
      <div className = "Nav-Burger-Modal-Main">
        <div className = "Nav-Burger-Modal"> 
        <form className = "Modal-Button-Form">
          <img className = "Modal-Button-Image"src = {personIcon}></img>
          <button className = "Modal-Button">About</button>
        </form>
        <form className = "Modal-Button-Form">
          <img className = "Modal-Button-Image"src = {portfolioIcon}></img>
          <button className = "Modal-Button">Portfolio</button>
        </form>
        <form className = "Modal-Button-Form">
          <img className = "Modal-Button-Image"src = {contactIcon}></img>
          <button className = "Modal-Button">Contact</button>
        </form>
        </div>
      </div>
  </>
  )
}
