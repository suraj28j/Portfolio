let navList = document.getElementById("navList");
let hamburger = document.getElementById("hamburger");
let introduction = document.getElementById("introduction");
// let main = document.getElementsByTagName("main");

let click = false;

hamburger.addEventListener('click', () => {
    if (click === false) {
        navList.style.display = 'block';
        click = true;
        introduction.style.marginTop = '250px';
    } else {
        navList.style.display = 'none'
        click = false;
        introduction.style.marginTop = '100px';
        window.scrollTo(0,0);
    }
})


// let nav_about = document.getElementById("nav_about");
// nav_about.addEventListener('click',()=>{
//     window.scrollTo(0,100);
// })
