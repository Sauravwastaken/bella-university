let hamburger = document.getElementById('hamburger');
let nav = document.getElementsByTagName('nav')[0];
let nav_links = document.getElementsByClassName('nav_links')[0];

hamburger.addEventListener('click',()=>{
    nav.classList.toggle('nav_responsive_hamburger');
    nav_links.classList.toggle('nav_links_responsive_hamburger');
    hamburger.classList.toggle('hamburger_res');
})