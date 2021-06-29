// const navSlide = () => {
//     const burger = document.querySelector('.ham');
//     const nav=document.querySelector('.nav-links');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//     })
// }

// navSlide();
const navbarTop = document.querySelector('.header');
// const navlinks = document.getElementById('nav-links');
var element = document.getElementById("nav-links");

function myFunction() {
   element.classList.toggle("nav-actives");
}
window.addEventListener('scroll', function () {
    if (window.scrollY >= 150) {
      navbarTop.classList.add('onScroll');
    } else {
      navbarTop.classList.remove('onScroll');
    }
});
element.addEventListener('click', ()=>{
      element.classList.remove("nav-actives");
});