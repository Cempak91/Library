console.log("50/50 all is done");
/*Меню бургера*/
const navMenu = document.querySelector(".burger");
const navSub = document.querySelector(".nav-sub");
const navLink = document.querySelectorAll(".navlink");
const menuExit = document.querySelector(".burgerExit");


if (navMenu) {
    navMenu.addEventListener("click", function (e) {
        navMenu.classList.toggle("_active");
        navSub.classList.toggle("_active");
        document.body.classList.toggle("lock");
        menuExit.classList.toggle("open");
    });
};


 //скрываем меню при клике
document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(navMenu || navSub);
    if ( !click ) {
        navMenu.classList.remove("_active");
        navSub.classList.remove("_active");
        document.body.classList.remove("lock");
        menuExit.classList.remove("open");
    }
  });

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


if (navMenu.classList.contains("_active")===true){
    document.addEventListener("click", function (e) {
        const target = e.target;
        if (!target.closest(".nav-sub") && !target.closest(".burgerExit")){
            navMenu.classList.remove("_active");
            navSub.classList.remove("_active");
            document.body.classList.remove("lock");
            menuExit.classList.remove("open");
            alert ("click");
        };
});
};

