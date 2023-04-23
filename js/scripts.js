/*MOBILE MENU BEHAVIOUR*/
let burguerButton = document.querySelector('.header__hamburguer-icon');
let closeButton = document.querySelector('.header__x-icon');
let mobileMenu = burguerButton.nextElementSibling;
let body =  document.querySelector('body');

burguerButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu)

function showMenu() {
    mobileMenu.classList.add('show-menu');
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
}
function hideMenu() {
    mobileMenu.classList.remove('show-menu');
    body.style.height = 'unset';
    body.style.overflowY = 'hidden';
}

/*HERO BANNER BACKGROUND ANIMATION*/
let barsContainer = document.querySelector('.hero__bars');

for (let i=0 ; i <=170 ; i++) {
    let bar = document.createElement('div');
    bar.classList.add('hero__bar');
    barsContainer.appendChild(bar);
    bar.style.height = `${i*(i/20)}px`;
    let barHeight = bar.style.height;
    bar.style.marginBottom = `-${barHeight}`;
    bar.style.transitionDelay = `${i / 100}s`;
    let halfHeight = parseFloat(barHeight)/2;
    
   requestAnimationFrame(() => {
    // second state
    bar.style.transform = `translateY(-${halfHeight}px)  rotate(-${i-10}deg)`;

    })

   
}


