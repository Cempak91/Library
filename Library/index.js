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

//Книги и сезоны
const radioButton = document.querySelectorAll('input[type="radio"]');
const books = document.querySelectorAll('.favorites-book');
const winterBooks = [books[0], books[1], books[2], books[3]];
const springBooks = [books[4], books[5], books[6], books[7]];
const summerBooks = [books[8], books[9], books[10], books[11]];
const autumnBooks = [books[12], books[13], books[14], books[15]];

radioButton.forEach(button => {
    button.addEventListener('change', () => {
        for (let elem of books) {
        elem.classList.add ('fade-out');
        elem.classList.add ('hidden');
            
        };
        if(radioButton[0].checked === true) {       
            for (let winter of winterBooks) {
                winter.classList.remove('fade-out');
                winter.classList.add('fade-in');
                winter.classList.remove ('hidden');
            };
        } else if (radioButton[1].checked) {
            for (let spring of springBooks) {
                spring.classList.remove('fade-out');
                spring.classList.add('fade-in');
                spring.classList.remove ('hidden');
            }
        }else if (radioButton[2].checked) {
            for (let summer of summerBooks) {
                summer.classList.remove('fade-out');
                summer.classList.add('fade-in');
                summer.classList.remove ('hidden');
            }
        }else 
            for (let autumn of autumnBooks) {
                autumn.classList.remove('fade-out');
                autumn.classList.add('fade-in');
                autumn.classList.remove ('hidden');
            };
    });
});



