
/*Меню бургера*/
const navMenu = document.querySelector(".burger");
const navSub = document.querySelector(".nav-sub");
const navLink = document.querySelectorAll(".navlink");
const menuExit = document.querySelector(".burgerExit");

console.log (navMenu);
console.log(navSub);
if (navMenu) {
    navMenu.addEventListener("click", function (e) {
        navMenu.classList.toggle("_active");
        navSub.classList.toggle("_active");
        document.body.classList.toggle("lock");
        menuExit.classList.toggle("open");
    });
};

for (let i=0; i<navLink.length; i++) {
    navLink[i].addEventListener("click",function (e){
        navMenu.classList.remove("_active");
        navSub.classList.remove("_active");
        document.body.classList.remove("lock");
        menuExit.classList.remove("open");
});
};

if (menuExit) {
    menuExit.addEventListener("click",function (e){
        navMenu.classList.remove("_active");
        navSub.classList.remove("_active");
        document.body.classList.remove("lock");
        menuExit.classList.remove("open");
    });
};