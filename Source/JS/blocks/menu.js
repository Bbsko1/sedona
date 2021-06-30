let mainNavBtn= document.querySelector('.main-nav__button'),
    navList= document.querySelector('.site-list');

mainNavBtn.classList.remove("main-nav__button--no-js");

mainNavBtn.addEventListener('click', function (evt) {
    evt.preventDefault()
    mainNavBtn.classList.toggle("main-nav__button--closed")
    mainNavBtn.classList.toggle("main-nav__button--opened")
    navList.classList.toggle('site-list--closed')
})


