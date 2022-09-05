const sidebarToggleButton = document.querySelector('.menu-icon-wrapper')
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

document.querySelector('.menu-icon-wrapper').onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
}

const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden')

btnShowMoreCards.addEventListener("click", function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
    })
})

const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (widget) {
    widget.addEventListener("click", function (e) {
        if (e.target.classList.contains('widget__title')) {
           e.target.classList.toggle('widget__title--active');

           e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    })
})