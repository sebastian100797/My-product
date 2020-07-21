var wrapper = {
    click__menu: function() {
        var menu__mobile = document.querySelector('.header__top-listItem');
        var button__menuMb = document.querySelector('.header__hamburger');
        button__menuMb.addEventListener('click', function() {
            menu__mobile.classList.toggle('showMenumb');
        })
    }
}
wrapper.click__menu();