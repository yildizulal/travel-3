//SHOW MENU
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');

if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

//REMOVE MENU 
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//Add blur to header
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader);

//dicovery swiper
var Discoveryswiper = new Swiper(".discover-div_1", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      spaceBetween:32,
      coverflowEffect: {
        rotate: 0,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

//VIDEO 
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-btn');
const videoIocn = document.getElementById('video-icon');

function playPause() {
    if(videoFile.paused){
        videoFile.play();

        videoIocn.classList.add('ri-pause-mini-line');
        videoIocn.classList.remove('ri-play-fill');
    }else{
        videoFile.pause();

        videoIocn.classList.remove('ri-pause-mini-line');
        videoIocn.classList.add('ri-play-fill');
    };
};

videoButton.addEventListener('click', playPause);

function finalVideo() {
    videoIocn.classList.remove('ri-pause-mini-line');
    videoIocn.classList.add('ri-play-fill');
};

videoFile.addEventListener('ended', finalVideo);

//SCROLL UP
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//SCROLL REVEAL
const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
    reset:true,
})

sr.reveal(`.home-desc, .discover-div_1, .video-content, .place-choose, .subscribe-container`);
sr.reveal(`.about-desc, .ex-images, .footer-div_1` , {origin : 'left'});
sr.reveal(`.about-images, .footer-list_1` , {origin : 'right'});














