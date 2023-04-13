const observer = new IntersectionObserver((enties) => {
    enties.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




const observer2 = new IntersectionObserver((enties) => {
    enties.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer2.observe(el));





const observer3 = new IntersectionObserver((enties) => {
    enties.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('showbilety');
        } else {
            entry.target.classList.remove('showbilety');
        }
    });
});

const hiddenElements3 = document.querySelectorAll(['.bilety2', '.bilety3', '.bilety4']);
hiddenElements3.forEach((el) => observer3.observe(el));


const liMenu = document.querySelectorAll('.link');
const sec = document.querySelectorAll('section');


const mainMenu = document.querySelector('.menu-bar-icon');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');


openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%'
};



const aMenu = document.querySelector('.menu-bar-icon');


aMenu.addEventListener('click', hide);

function hide() {
    mainMenu.style.top = '-100%'
};







const nav = document.querySelector('.menu');

let previousScrollTop;
let isScrolling;

const hasScrolled = () => {

    const scrollTop = window.scrollY;

    if (scrollTop > previousScrollTop) {
        nav.classList.add('nav--up');
    } else {
        nav.classList.remove('nav--up');
    }

    previousScrollTop = scrollTop;

}

document.addEventListener('scroll', () => isScrolling = true);

setInterval(() => {
    if (isScrolling) {
        hasScrolled();
        isScrolling = false;
    }
}, 100);








