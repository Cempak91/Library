
/*Меню бургера*/
const navMenu = document.querySelector('.burger');
const navSub = document.querySelector('.nav-sub');
const navLink = document.querySelector('.navlink');
if (navMenu) {
    navMenu.addEventListener("click", function (e) {
        navMenu.classList.toggle('_active');
        navSub.classList.toggle('_active');
        document.body.classList.toggle('lock');
    });
};

if (navLink) {
    navLink.addEventListener("click",function (e){
        navMenu.classList.remove('_active');
        navSub.classList.remove('_active');
        document.body.classList.remove('lock');
    });
};