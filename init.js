var r = document.querySelector(':root');
const header = document.getElementById("header");

//parallax scroll effect
const parallax = document.getElementById("main");
let offset = window.pageYOffset;   
parallax.style.backgroundPositionY = offset * 0.7 + "px";
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});


//change color of header when scrolled far enough
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

