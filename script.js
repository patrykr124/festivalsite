const observer = new IntersectionObserver((enties) => {
    enties.forEach((entry) =>{
        console.log(entry)
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
    enties.forEach((entry) =>{
        console.log(entry)
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
    enties.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showbilety');
        } else {
            entry.target.classList.remove('showbilety');
        }
    });
});

const hiddenElements3 = document.querySelectorAll(['.bilety2','.bilety3','.bilety4']);
hiddenElements3.forEach((el) => observer3.observe(el));


const liMenu = document.querySelectorAll('.link');
const sec = document.querySelectorAll('section');

