let dropdownButton = document.querySelector('.hamburger-icon');
console.log(dropdownButton)
let navMenu = document.querySelector('.header-nav');
console.log(navMenu)

dropdownButton.addEventListener('click', () => {
    if (navMenu.classList.contains('hidden')) {
        TweenLite.set(navMenu, {height: 'auto'})
        TweenLite.from(navMenu, .75, {height: 0});
        navMenu.classList.remove('hidden')
    } else {
        TweenLite.to(navMenu, .75, {height: 0});
        navMenu.classList.add('hidden')
    }
})
