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
// let nav_projects = document.getElementById("nav_projects");
// let nav_contact = document.getElementById("nav_contact");


nav_home.addEventListener('click', () => {
    window.scrollTo(0, 0);
})
nav_about.addEventListener('click', () => {
    window.scrollTo(0, 800);
})
nav_services.addEventListener('click', () => {
    window.scrollTo(0, 1600);
})
// nav_projects.addEventListener('click', () => {
//     window.scrollTo(0, 2400);
// })
// nav_contact.addEventListener('click', () => {
//     window.scrollTo(0, 3200);
// })
