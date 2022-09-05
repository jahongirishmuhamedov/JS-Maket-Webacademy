const sidebarToggleButton = document.querySelector('.menu-icon-wrapper')
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');


document.querySelector('.menu-icon-wrapper').onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');


}

