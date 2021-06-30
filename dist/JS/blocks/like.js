let likekButtons = document.querySelectorAll('.gallery__button'),
    likeNumbers = document.querySelectorAll('.gallery__number');



likekButtons.forEach(function (btn, i, likekButton) {
    btn.addEventListener ('click', function (evt) {
        evt.preventDefault();
        btn.classList.toggle('gallery__button--like');
        if (btn.classList.contains('gallery__button--like')) {
            +likeNumbers[i].textContent++
        } else {
            +likeNumbers[i].textContent--
        }
    })

    
})
