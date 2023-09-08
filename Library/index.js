console.log("50/50 all is done");
/*Меню бургера*/
const navMenu = document.querySelector(".burger");
const navSub = document.querySelector(".nav-sub");
const navLink = document.querySelectorAll(".navlink");
const menuExit = document.querySelector(".burgerExit");
const unAuthSub = document.querySelector('.Subtract.notAuth');
const unAuthProfile = document.querySelector('.profileForm.notAuth');
const authProfile = document.querySelector('.profileForm.Auth');
const authsub =  document.querySelector('.Subtract.Auth');
const myProfile = document.querySelector('.myProfile');
const userInfo_popup = document.querySelector('.popup-my-profile');
const copyButton = document.querySelector('.copyButton');
const close_btn_userInfo = document.querySelector('.close_btn2');
const logOut = document.querySelector('.logOut');
const profileInLibrary = document.querySelector(".profileInLibrary");

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
    const clickNav = e.composedPath().includes(navMenu);
    const clickSub = e.composedPath().includes(navSub);
    const clickUnAuthProfile = e.composedPath().includes(unAuthProfile);
    const clickUnAuthSub = e.composedPath().includes(unAuthSub);
    const clickunLogin = e.composedPath().includes(modulLogin);
    const clickunRegiter = e.composedPath().includes(modulRegister);
    const clickunLogin2 = e.composedPath().includes(toLogin);
    const clickunsignButton = e.composedPath().includes(signButton);
    const clickloginButton = e.composedPath().includes(loginButton);
    const clickbuyButton = Array.prototype.slice.call(buyButton);
    const clickpopupBuyACard = e.composedPath().includes(popupBuyACard);
    const clickpopup = e.composedPath().includes(popup);
    const clickAuthProfile = e.composedPath().includes(authProfile);
    const clickauthsub = e.composedPath().includes(authsub);
    const clickuserInfo_popup = e.composedPath().includes(userInfo_popup);
    const clickmyProfile = e.composedPath().includes(myProfile);
    const clickprofileInLibrary = e.composedPath().includes(profileInLibrary);


    if ( !clickNav && !clickSub ) {
        navMenu.classList.remove("_active");
        navSub.classList.remove("_active");
        document.body.classList.remove("lock");
        menuExit.classList.remove("open");
    };
    if ( !clickUnAuthProfile && !clickUnAuthSub) {
        unAuthProfile.classList.remove('activity');
    };
    if (!clickunLogin && !clickunRegiter && !clickUnAuthProfile && !clickUnAuthSub && !clickunRegiter &&!clickunLogin2 &&!clickunsignButton &&!clickloginButton && clickpopup &&!clickAuthProfile &&!userInfo_popup &&!clickmyProfile && !clickpopupBuyACard &&!clickprofileInLibrary) {
       popup.classList.remove ("activity");
    };
    if (!clickunLogin && !clickUnAuthProfile && !clickUnAuthSub &&!clickunRegiter &&!clickunLogin2 &&!clickloginButton && clickpopup) {
        if (modulLogin.classList.contains("activity")){
            modulLogin.classList.remove("activity");
            popup.classList.remove ("activity");
        };
    };
    if (!clickunRegiter && !clickUnAuthProfile && !clickUnAuthSub &&!clickunLogin && !clickunsignButton) {
        if (modulRegister.classList.contains("activity")){
            modulRegister.classList.remove("activity");
            popup.classList.remove ("activity");
        };
    };

    if (popupBuyACard.classList.contains("activity") && !clickpopupBuyACard) {
        if (!clickbuyButton.some(buy => e.composedPath().includes(buy))) {
            popupBuyACard.classList.remove ("activity");
            popup.classList.remove ("activity");
        };
    };

    if (authProfile.classList.contains("activity") && !clickAuthProfile &&!clickauthsub){
        authProfile.classList.remove('activity');
    };

    if (userInfo_popup.classList.contains("activity") &&!clickuserInfo_popup &&clickpopup){
    userInfo_popup.classList.remove("activity");
    popup.classList.remove('activity');
    };
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


//меню профиля без авторизации

unAuthSub.addEventListener('click',() => {
    unAuthProfile.classList.toggle('activity');
});

//модульные окна

const toLogin = document.querySelector('.logInLi');
const toRegister = document.getElementById('registered');
const modulLogin = document.getElementById('popup-login');
const modulRegister = document.getElementById('popup-register');
const popup = document.getElementById('popup');
const aLogin = document.querySelector(".toLogin");
const aRegister = document.querySelector(".toRegister");
const signButton =document.querySelector(".sign.up");
const loginButton = document.querySelector (".sign.login");

toLogin.addEventListener('click', () => {
    popup.classList.add ("activity");
    modulLogin.classList.add ("activity");

    if (toRegister.classList.contains ("activity")) {
        modulRegister.classList.remove ("activity");
    };
});

loginButton.addEventListener('click', () => {
    popup.classList.add ("activity");
    modulLogin.classList.add ("activity");
    if (toRegister.classList.contains ("activity")) {
        modulRegister.classList.remove ("activity");
    };
});

signButton.addEventListener('click', () => {
    popup.classList.add ("activity");
    modulRegister.classList.add ("activity");
    if (toLogin.classList.contains ("activity")) {
        modulLogin.classList.remove ("activity");
    }

});

toRegister.addEventListener('click', () => {
    popup.classList.add ("activity");
    modulRegister.classList.add ("activity");

    if (toLogin.classList.contains ("activity")) {
        modulLogin.classList.remove ("activity");
    }
});

aLogin.addEventListener('click', () => {
    modulRegister.classList.remove ("activity");
    modulLogin.classList.add ("activity");
});

aRegister.addEventListener('click', () => {
    modulRegister.classList.add ("activity");
    modulLogin.classList.remove ("activity");
});

const closeModal= document.querySelectorAll('.close_btn');

closeModal.forEach ((element) => {
    element.addEventListener('click', () => {
        modulRegister.classList.remove ("activity");
        modulLogin.classList.remove ("activity");
        popup.classList.remove ("activity");
    });
});

//меняем кнопки Buy на Own при нажатии и вызываем модульное окно для введения данных карты
const buyButton = document.querySelectorAll('.buy');
const popupBuyACard = document.querySelector('.popup-buyACard');
const closeBuyACard = document.querySelector('.close_btn_buy');
const buyBookButton = document.querySelector('.checkBuy');

closeBuyACard.addEventListener('click', () => {
    popupBuyACard.classList.remove ("activity");
    popup.classList.remove ("activity");
});


buyButton.forEach ((element) => {
    element.addEventListener('click', () =>{
        if (authsub.classList.contains("activity")){
            closeBuyACard.addEventListener('click', () => {
                popupBuyACard.classList.remove ("activity");
                popup.classList.remove ("activity");
            });
            const userInfo = JSON.parse(localStorage.getItem('users'));
            
            for (let user of userInfo) {
                if (user.firstName === userName_popup.textContent && user.libraryCard === false) {
                    popupBuyACard.classList.add ("activity");
                    popup.classList.add ("activity");
                buyBookButton.addEventListener ('click', () => {
                    popupBuyACard.classList.remove ("activity");
                    popup.classList.remove ("activity");
                    user.libraryCard = true;
                    localStorage.setItem('users', JSON.stringify(userInfo));
            });
            } else if (user.firstName === userName_popup.textContent && user.libraryCard === true) {
                user.booksNumber +=1;
                localStorage.setItem('users', JSON.stringify(userInfo));
                element.disabled = true;
                element.value = "Own";
                element.classList.add('own');
            };
        };
    } else  {
        popup.classList.add ("activity");
        modulLogin.classList.add ("activity");
    };
});
});

//Для того, чтобы кнопка Buy была активна, все поля должны быть не пустыми
const bankCardNumber = document.querySelector('.bankCardNumber');
const expirationCode1 = document.querySelector('.expirationCode1');
const expirationCode2 = document.querySelector('.expirationCode2');
const cvcNumber = document.querySelector('.cvcNumber');
const cardholderName = document.querySelector('.cardholderName');
const postalCode = document.querySelector('.postalCode');
const userCity = document.querySelector('.userCity');

function chekInputForBuy(){
if (bankCardNumber.value !=="" && expirationCode1.value !=="" && expirationCode2.value !=="" && cvcNumber.value !=="" && cardholderName.value !=="" && postalCode.value !=="" && userCity.value !=="") {
    buyBookButton.disabled = false;
    buyBookButton.style.cursor = "pointer";
} else {
    buyBookButton.disabled = true;
    buyBookButton.style.cursor = "not-allowed";
};
};

bankCardNumber.addEventListener('input',chekInputForBuy);
expirationCode1.addEventListener('input',chekInputForBuy);
expirationCode2.addEventListener('input',chekInputForBuy);
cvcNumber.addEventListener('input',chekInputForBuy);
cardholderName.addEventListener('input',chekInputForBuy);
postalCode.addEventListener('input',chekInputForBuy);
userCity.addEventListener('input',chekInputForBuy);


//Регистрация пользователя. Внесение данных в Local storadge.
const logIN_button = document.querySelector('.logIN_button');
const signUP_button = document.querySelector('.sign_button');
const firstName_input = document.querySelector('.name_input');
const lastName_input = document.querySelector('.surname_input');
const email_register = document.querySelector('.email_register');
const password_register = document.querySelector('.password_register');
var userName_popup = document.querySelector(".userName");
var userSurnam_popup = document.querySelector(".userSurname");
var user_Icon_name_popup = document.querySelector(".user-Icon-name");
var visitsNumber_popup = document.querySelector(".visitsNumber.inLibrary");
var booksNumber_popup = document.querySelector(".visitsNumber.books.inLibrary");
var cardNumber_popup = document.querySelector(".numberOfCard");
var visitsNumber_inProfile = document.querySelector(".visitsNumber.inProfile");
var visitsNumber_books_inProfile = document.querySelector(".visitsNumber.books.inProfile");

function validateEmail(email) {
    // Регулярное выражение для проверки формата почтового адреса 
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  function addUser(username, password, firstName, lastName, visitsNumber, booksNumber, cardNumber ) {
    // Получение существующих пользователей из локального хранилища или создание пустого массива, если таковых нет 
    var users = JSON.parse(localStorage.getItem('users')) || [];
     // Добавляем нового пользователя в массив
     users.push({ username: username, password: password, firstName:firstName, lastName: lastName, visitsNumber: visitsNumber, booksNumber:booksNumber, cardNumber: cardNumber, libraryCard: false  });

  // Сохраняем обновленный массив обратно в локальное хранилище 
  localStorage.setItem('users', JSON.stringify(users));
}

// Генерация рандомной буквы
function generateLetter() {
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letters.charAt(Math.floor(Math.random() * letters.length));
};

// Генерация 8 случайных чисел
function generateNumbers() {
  var numbers = '';
  for (var i = 0; i < 8; i++) {
    numbers += Math.floor(Math.random() * 10);
  };
  return numbers;
};

signUP_button.addEventListener('click', () => {
    var login = email_register.value;
    var password = password_register.value;
    var firstName = firstName_input.value;
    var lastName = lastName_input.value;
    var visitsNumber = 0;
    var booksNumber =0;

    if (login === null) {
        alert ('E-mail is empty');
    } else if (!validateEmail(login)) {
        alert ('E-mail is incorrect')
    } else if (password.length<8) {
        alert ('The password must be at least 8 characters long')
    } else {
        // Сгенерировать 1 случайную букву и 8 случайных чисел
        var randomLetter = generateLetter();
        var randomNumbers = generateNumbers();
        var cardNumber = randomLetter + randomNumbers;
        visitsNumber++;
        addUser(login, password, firstName, lastName, visitsNumber, booksNumber, cardNumber);
        modulRegister.classList.remove ("activity");
        popup.classList.remove ("activity");
        alert('Registration was successful');
    };
});


logIN_button.addEventListener('click', () => {
    const userInfo = JSON.parse(localStorage.getItem('users'));
    const email_input = document.querySelector('.email_input').value;
    const password_input = document.querySelector('.password_input').value;


    for (let user of userInfo) {
        const username_LocalStorage = user.username;
        const password_LocalStorage = user.password; 
        const cardNumber_LocalStorage = user.cardNumber; 
        const iconSpan = document.querySelector('.user-Icon-name-sub')
        const cardProfile = document.querySelector('.profileCard');
        var visitsNumber = parseInt(user.visitsNumber);


        if (username_LocalStorage === email_input && password_input === password_LocalStorage || email_input === cardNumber_LocalStorage && password_input === password_LocalStorage ){
            unAuthSub.style.display = "none";
            authsub.classList.add("activity");
            iconSpan.innerHTML = user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase();
            visitsNumber +=1;
            user.visitsNumber = visitsNumber;
            localStorage.setItem('users', JSON.stringify(userInfo));
            cardProfile.innerHTML = cardNumber_LocalStorage;
            modulLogin.classList.remove ("activity");
            popup.classList.remove ("activity");
            visitsNumber_popup.innerHTML = visitsNumber;
            visitsNumber_inProfile.innerHTML = visitsNumber;
            booksNumber_popup.innerHTML = user.booksNumber;
            visitsNumber_books_inProfile.innerHTML = user.booksNumber;
            cardNumber_popup.innerHTML = user.cardNumber;
            userName_popup.innerHTML = user.firstName;
            userSurnam_popup.innerHTML = user.lastName;
            user_Icon_name_popup.innerHTML = user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase();
            document.getElementById("name").value = user.firstName + ' ' + user.lastName;
            document.getElementById("card-number").value = cardNumber_LocalStorage;
            document.getElementById("name").setAttribute("disabled", "");
            document.getElementById("card-number").setAttribute("disabled", "");
            document.querySelector('.librarycard-button').classList.add("hidden");
            document.querySelector('.visits_in_libraryCard').classList.add("activity");
            document.querySelector('.about-autorisation.nonAuth').style.display="none";
            document.querySelector(".about-autorisation.Auth").style.display = "block";

            return; //выйти после успешного логина, а не выдавать 100500 ошибок идентификации пользователя
        } authError = true;
    };
    modulLogin.classList.remove ("activity");
    popup.classList.remove ("activity");

    if (authError = true) {
        alert ('login or password is wrong');
    };
});

authsub.addEventListener('click', ()=> {
    authProfile.classList.add("activity");
});

myProfile.addEventListener('click', myProfileLook);

function myProfileLook () {
    userInfo_popup.classList.add('activity');
    popup.classList.add('activity');
    const userInfo = JSON.parse(localStorage.getItem('users'));
    for (let user of userInfo) {
        if (user.firstName === userName_popup.textContent) {
           visitsNumber_popup.innerHTML = user.visitsNumber;
            booksNumber_popup.innerHTML = user.booksNumber;
        };
    };
};

profileInLibrary.addEventListener ('click', myProfileLook);

copyButton.addEventListener('click', copyToCache);

function copyToCache() {
    const data = cardNumber_popup.innerText;
    navigator.clipboard.writeText(data);
};

close_btn_userInfo.addEventListener('click', () => {
        console.log('clock clack');
    userInfo_popup.classList.remove('activity');
    popup.classList.remove('activity');
});

logOut.addEventListener('click', () => {
        authsub.classList.remove("activity");
        unAuthSub.style.display = "flex";
        document.getElementById("name").value = "";
        document.getElementById("card-number").value = "";
        document.querySelector('.librarycard-button').classList.remove("hidden");
        document.querySelector('.visits_in_libraryCard').classList.remove("activity");
        document.querySelector('.about-autorisation.nonAuth').style.display="block";
        document.querySelector(".about-autorisation.Auth").style.display = "none";
        document.getElementById("name").removeAttribute("disabled", "");
        document.getElementById("card-number").removeAttribute("disabled", "");
    });

if (authsub.classList.contains("activity")) {
    console.log('tutka');
    const userInfo = JSON.parse(localStorage.getItem('users'));
    for (let user of userInfo) {
        if (user.firstName === userName_popup.textContent && user.libraryCard === true) {
        document.getElementById("name").value = user.firstName + ' ' + user.lastName;
        document.getElementById("card-number").value =user.cardNumber;
    };
};
};

document.querySelector(".librarycard-button").addEventListener("click", () => {
    const userInfo = JSON.parse(localStorage.getItem('users'));
    for (let user of userInfo) {
    if (document.getElementById("name").value === (user.firstName + ' ' + user.lastName) && document.getElementById("card-number").value === user.cardNumber) {
        document.querySelector('.librarycard-button').classList.add("hidden");
        document.querySelector('.visits_in_libraryCard').classList.add("activity");
        visitsNumber_popup.innerHTML = user.visitsNumber;
        booksNumber_popup.innerHTML = user.booksNumber;
        setTimeout(function() {
            document.querySelector('.librarycard-button').classList.remove("hidden");
            document.querySelector('.visits_in_libraryCard').classList.remove("activity");
          }, 10000);
          return;
    };
    };
});