let navList = document.getElementById("navList");
let hamburger = document.getElementById("hamburger");

let click = false;

hamburger.addEventListener('click', () => {
    if (click === false) {
        navList.style.visibility = 'visible';
        click = true;
    } else {
        navList.style.visibility = 'hidden';
        click = false;
    }
})