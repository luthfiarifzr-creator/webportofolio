let header = document.getElementById("header");
let title = document.querySelector(".title");
let menu = document.querySelectorAll(".menu ul li a");



function ubahWarnaHeader(){
    if (window.scrollY > 0){
         header.style.backgroundColor = "black";
          header.style.borderBottom = "none";
          title.style.color = "white";
          menu.forEach(function(item){
            item.style.color = "white";
          });
}else{
       header.style.backgroundColor = "transparent";
        header.style.borderBottom = "1px solid rgb(237,236,236)";
          title.style.color = "black";
          menu.forEach(function(item){
            item.style.color = "black";
          });
}
    }
window.addEventListener("scroll", ubahWarnaHeader);

let floatButton = document.getElementById("floating-button");

function showOrHideFloatingButton(){
    if(window.scrollY > 2400){
        floatButton.style.display = "flex";

    }else{
        floatButton.style.display = "none";
    }
}
window.addEventListener("scroll",showOrHideFloatingButton);

function scrollOnTop(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
}

floatButton.onclick = scrollOnTop;


let aboutLink = document.querySelector('.menu ul li a[href="#About"]');
let heroLink = document.querySelector('.menu ul li a[href="#hero"]');


let aboutSection = document.getElementById("about");
let heroSection = document.getElementById("hero");

function scrollToAbout(event){
    event.preventDefault();
    aboutSection.scrollIntoView({
        behavior: "smooth"});
}
function scrollToHero(event){
    event.preventDefault();
    heroSection.scrollIntoView({
        behavior: "smooth"});
}


aboutLink.onclick = scrollToAbout;
heroLink.onclick = scrollToHero;




let studyLink = document.querySelector('.menu ul li a[href="#Study"]');
let skillLink = document.querySelector('.menu ul li a[href="#Skill"]');


let studySection = document.getElementById("study");
let skillSection = document.getElementById("skill");

function scrollToStudy(event){
    event.preventDefault();
   studySection.scrollIntoView({
        behavior: "smooth"});
}
function scrollToSkill(event){
    event.preventDefault();
    skillSection.scrollIntoView({
        behavior: "smooth"});
}


 studyLink.onclick = document.scrollToStudy;
 skillLink.onclick = document.scrollToSkill;



