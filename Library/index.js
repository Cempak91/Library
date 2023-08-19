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

//Пробуем делать слайдер
const libraryImages = document.querySelector ('.slidersImages');
const sliderElements = document.querySelectorAll ('.slider-element');
const leftCarret = document.querySelector('.carret.left');
const rightCarret = document.querySelector('.carret.right');
let position =0,
    sliderElementsIndex=0;

sliderElements.forEach((key, index) => {
    key.addEventListener("click", function () {
        if(window.matchMedia("(max-width: 768px)").matches){
            position = 100* index;
            libraryImages.style.left = -position + '%';
        }else{
        position = 470 * index;
        libraryImages.style.left = -position + 'px';
        };
        thisSlide(sliderElementsIndex);
        sliderElementsIndex = index;
        sliderElements.forEach((key) => { //удаляем класс active у всех элементов слайдера
            key.classList.remove("active");
    });
    sliderElements[index].classList.add("active"); //добавляем класс к элементу с кликом
    if(sliderElements[sliderElements.length-1].classList.contains("active")) { //блокируем стрелки при активации крайних кружочков слайдера
        rightCarret.setAttribute("disabled", "");
    }else if (rightCarret.hasAttribute("disabled")){
        rightCarret.removeAttribute("disabled");  
    };
    if(sliderElements[0].classList.contains("active")) {
        leftCarret.setAttribute("disabled", "");
    } else if (leftCarret.hasAttribute("disabled")){
        leftCarret.removeAttribute("disabled");  
    };    
});
});

//движение галереи


const nextSlide = () => {
    if (position < ((sliderElements.length -2) * 100)) {
    position+=100;
    sliderElementsIndex++;
    libraryImages.style.left = -position + '%';
    if (rightCarret.hasAttribute("disabled")){
      rightCarret.removeAttribute("disabled");  
    }
    } else if (position < ((sliderElements.length -1) * 100)) {
        position+=100;
        sliderElementsIndex++;
        libraryImages.style.left = -position + '%';
        rightCarret.setAttribute("disabled", "");
    };
    thisSlide(sliderElementsIndex);
    console.log(sliderElements[sliderElements.length-1].classList.contains("active"))
};

const prevSlide = () => {
    if (position >0) {
    position-=100;
    sliderElementsIndex--;
    libraryImages.style.left = -position + '%';
    if (leftCarret.hasAttribute("disabled")){
        leftCarret.removeAttribute("disabled");  
      }
    } else leftCarret.setAttribute("disabled", "");
        thisSlide(sliderElementsIndex);
};

const thisSlide =(index) => {
    for (let elem of sliderElements) {
        elem.classList.remove('active');
    };
    sliderElements[index].classList.add('active');
};

rightCarret.addEventListener('click', nextSlide);
leftCarret.addEventListener('click', prevSlide);



