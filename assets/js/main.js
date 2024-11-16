let navList = document.getElementById("navList");
let hamburger = document.getElementById("hamburger");

let click = false;

hamburger.addEventListener('click', () => {
    if (click === false) {
        navList.style.display = 'block';
        click = true;
    } else {
        navList.style.display = 'none'
        click = false;
    }
})


let nav_home = document.getElementById("nav_home");
let nav_about = document.getElementById("nav_about");
let nav_services = document.getElementById("nav_services");
let nav_projects = document.getElementById("nav_projects");
let nav_contact = document.getElementById("nav_contact");


nav_home.addEventListener('click', () => {
    // window.scrollTo(0, 0);
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
})
nav_about.addEventListener('click', () => {
    window.scroll({
        top: 800,
        left: 0,
        behavior: "smooth",
      });
})
nav_services.addEventListener('click', () => {
    window.scroll({
        top: 1500,
        left: 0,
        behavior: "smooth",
      });
})
nav_projects.addEventListener('click', () => {
    window.scroll({
        top: 2300,
        left: 0,
        behavior: "smooth",
      });
})
nav_contact.addEventListener('click', () => {
    window.scroll({
        top: 3000,
        left: 0,
        behavior: "smooth",
      });
})


const tour = document.getElementById("tour");
const ecommerce = document.getElementById("ecommerce");

tour.addEventListener('click', () => {
    // location = "https://tourfinder.vercel.app/"
    window.open('https://tourfinder.vercel.app/', "_blank")
})
ecommerce.addEventListener('click', () => {
    window.open('https://ecommerce-self-gamma-14.vercel.app/', "_blank")
})
