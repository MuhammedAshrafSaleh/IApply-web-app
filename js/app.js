const navBar = document.querySelector('nav');
const navBTN = document.getElementById('nav__bars');
const navList =  document.getElementById('nav__list');
/*****************************************************
 * Sticky Nabar
 *****************************************************/
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 600) 
        navBar.classList.add("sticky");
     else 
        navBar.classList.remove("sticky");
});
/*****************************************************
 * Owel Carousel
 *****************************************************/
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
});

/*****************************************************
 * Responsive Nabar
 *****************************************************/
navBTN.addEventListener('click', function(){
    navList.classList.toggle('transform');
 });
 navList.addEventListener('click', function(){
    navList.classList.toggle('transform');
 });