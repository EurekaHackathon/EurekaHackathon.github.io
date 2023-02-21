var r = document.querySelector(':root');

//parallax scroll effect
const parallax = document.getElementById("main");
let offset = window.pageYOffset;   
parallax.style.backgroundPositionY = offset * 0.7 + "px";
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});


//change color of header when scrolled far enough
const header = document.getElementById("header");
var height;
var scrollTop;

function changeHeader() {
    height = window.innerHeight;
    scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (scrollTop > height) {
        var rs = getComputedStyle(r);
        header.style.backgroundColor = rs.getPropertyValue('--main-bg-color');
    }
    else {
        header.style.backgroundColor = 'transparent';
    }
}
window.addEventListener('load', changeHeader);
window.addEventListener("resize", changeHeader);
window.addEventListener("scroll", changeHeader);

//disappear header when scroll down

let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        header.classList.add("header-hidden");
    } else {
        header.classList.remove("header-hidden");
    }
    lastScrollY = window.scrollY;
})

//buttons

const openText = (e) => {
    var btnName = e.target.id;
    var question = document.getElementById(btnName);
    var answer = question.querySelector(".answer");
    if (answer.classList.contains("hidden")){
        answer.classList.remove("hidden");
    }
    else{
        answer.classList.add("hidden");
    }
}

document.querySelectorAll(".question-box").forEach((el) => {
    el.addEventListener('click', openText)
})

//header animation
const underline = document.querySelector(".underline");
const links = document.querySelectorAll(".header-middle > a");
const ul = document.querySelector(".header-middle");
// const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", mouseenterFunc);
}

function mouseenterFunc() {
    for (let i = 0; i < links.length; i++) {
      links[i].style.opacity = "0.25";
    }
    
    this.style.opacity = "1";
    
    const width = this.getBoundingClientRect().width;
    const height = this.getBoundingClientRect().height;
    const left = this.getBoundingClientRect().left;
    const top = this.getBoundingClientRect().top;
    underline.style.width = `${width}px`;
    underline.style.height = `${height}px`;
    underline.style.left = `${left}px`;
    underline.style.top = `${top}px`;
    underline.style.transform = "none";
  }

function noActive() {
    underline.style.width = '0px';
    for (let i = 0; i < links.length; i++) {
        links[i].style.opacity = "1";
    }
}
window.addEventListener("resize", noActive);
ul.addEventListener("mouseleave", noActive);