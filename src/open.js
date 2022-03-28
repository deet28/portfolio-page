export function openSite(e) {
  if (e.target.id == "Git") {
    window.open("https://github.com/deet28");
  } else if (e.target.id == "Linked") {
    window.open("https://www.linkedin.com/in/davidturchetta/");
  } else if (e.target.id == "Resume"){
    window.open("https://my.indeed.com/resume/preview/file");
  }else if (e.target.classList.contains("Waldo1") == true) {
    window.open("https://find-waldo-2e955.web.app/Home");
  } else if (e.target.classList.contains("Waldo2") == true) {
    window.open("https://github.com/deet28/Wheres-Waldo");
  } else if (e.target.classList.contains("Readit1") == true) {
    window.open("https://readit-10a97.web.app");
  } else if (e.target.classList.contains("Readit2") == true) {
  } else if (e.target.classList.contains("Shop1") == true) {
    window.open("https://deet28.github.io/Shopping-Cart/");
  } else if (e.target.classList.contains("Shop2") == true) {
    window.open("https://github.com/deet28/Shopping-Cart");
  } else if (e.target.classList.contains('Linkedin')){
    window.open("https://www.linkedin.com/in/davidturchetta/");
  } 
}