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

const checkboxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-parametr]')
checkboxAny.addEventListener("change", function () {
    if (checkboxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        })
        checkboxAny.checked = true;
    }
})

topLocationCheckboxes.forEach(function (item) {
    item.addEventListener("change", function () {
        if (checkboxAny.checked) {
            checkboxAny.checked = false;
        }
    })
})

const showMoreOptions = document.querySelector('.widget__show--hidden');
const hiddenCheckboxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function (e) {
    e.preventDefault()
    if (showMoreOptions.dataset.options === 'hidden') {
        hiddenCheckboxes.forEach(function (item) {
            item.style.display = 'block';
        })
        showMoreOptions.innerText("Скрыть опции");
        showMoreOptions.dataset.options = 'visible'
    }
    else if (showMoreOptions.dataset.options === 'visible') {
        hiddenCheckboxes.forEach(function (item) {
            item.style.display = 'none';
        })
        showMoreOptions.innerText("Показать ещё");
        showMoreOptions.dataset.options = 'hidden'
    }
}