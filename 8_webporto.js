const circle = document.querySelector('.circle');

  document.addEventListener('mousemove', (e) => {
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
  });

  let header = document.getElementById('header');
  let title = document.querySelector('.title');
  let menu = document.querySelectorAll('.menu ul li a');

  function scroolheader(){
    if (window.scrollY > 0 ) {
      header.style.backgroundColor ="#202020ff";
      header.style.borderBottom ="none";
      title.style.color = "white"
      menu.forEach((element) => {
        element.style.color = "white";
      });
      tombol.style.display = "flex";
    } else {
      header.style.backgroundColor = "transparent"
      header.style.borderBottom = '1px solid #e0e0e0'
       title.style.color = "black"
      menu.forEach((element) => {
        element.style.color = "black";
      });
      tombol.style.display = "none";
    }
  }
  window.onscroll = scroolheader;

let home = document.querySelector('.menu ul li a[href="#home"]');
let about = document.querySelector('.menu ul li a[href="#about"]');
let skill = document.querySelector('.menu ul li a[href="#skill"]');
let works = document.querySelector('.menu ul li a[href="#works"]');
let contact = document.querySelector('.menu ul li a[href="#contact"]');

let homeSection = document.getElementById('home');
let aboutSection = document.getElementById('about');
let skillSection = document.getElementById('skill');
let worksSection = document.getElementById('works');
let contactSection = document.getElementById('contact');

function scrollToHome(event){
  event.preventDefault();
  homeSection.scrollIntoView({
    behavior:"smooth"
  })
}
function scrollToAbout(event){
  event.preventDefault();
  aboutSection.scrollIntoView({
    behavior:"smooth"
  })
}
function scrollToSkill(event){
  event.preventDefault();
  skillSection.scrollIntoView({
    behavior:"smooth"
  })
}
function scrollToWorks(event){
  event.preventDefault();
  worksSection.scrollIntoView({
    behavior:"smooth"
  })
}
function scrollToContact(event){
  event.preventDefault();
  contactSection.scrollIntoView({
    behavior:"smooth"
  })
}
home.addEventListener('click',scrollToHome);
about.addEventListener('click',scrollToAbout);
skill.addEventListener('click',scrollToSkill);
works.addEventListener('click',scrollToWorks);
contact.addEventListener('click',scrollToContact);

let tombol = document.querySelector('.tombol');

let tombolSection = document.getElementById('home')

function upToHome(event){
  event.preventDefault();
  tombolSection.scrollIntoView({
    behavior:"smooth"
  })
}
tombol.addEventListener('click',upToHome);

let menuBars = document.getElementById('menu-bars')
let sidebarResponsive = document.getElementById('sidebar-responsive')
let closeSidebar = document.getElementById('close-sidebar')

// menuBars.addEventListener("click", function (){
//   sidebarResponsive.style.display = "block";
//   menuBars.style.display = "none";
// })

// closeSidebar.addEventListener("click", function(){
//   sidebarResponsive.style.display = "none";
//   menuBars.style.display = "block";
// })

let mediaScreen = window.matchMedia("(max-width: 768px)");

function handleScreenChange(e){
  if (e.matches) {
    menuBars.style.display = "block";
    menuBars.addEventListener("click", function(){
      sidebarResponsive.style.display = 'block';
      menuBars.style.display = 'none';
    });
    closeSidebar.addEventListener("click", function(){
      sidebarResponsive.style.display = 'none';
      menuBars.style.display = 'block';
    });
  } else {
    sidebarResponsive.style.display = 'none';
    menuBars.style.display = 'none';
  }
}

mediaScreen.addEventListener("change", handleScreenChange);
handleScreenChange(mediaScreen);