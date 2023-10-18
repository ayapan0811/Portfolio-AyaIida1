/*=======HamburgerMenu=====*/
const navMenu = document.getElementById('nav_menu'),
      navBar = document.getElementById('nav_bar'),
      navClose = document.getElementById('nav_close')

if(navBar){
    navBar.addEventListener('click',()=>{
        navMenu.classList.add('show_menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show_menu')
    })
}
/*================ REMOVE MENU MOBILE =================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('.nav_menu');
    navMenu.classList.remove('show_menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

