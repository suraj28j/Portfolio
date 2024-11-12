let navList = document.getElementById("navList");
let hamburger = document.getElementById("hamburger");
let header = document.getElementsByTagName("header");

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
