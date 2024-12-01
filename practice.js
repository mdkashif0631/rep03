document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menuButton');
    var menu = document.getElementById('menu');
    var closeButton = document.getElementById('closeButton');
    var signinButton = document.getElementById('signinButton');
    var loginInterface = document.getElementById('loginInterface');
    var backButton = document.getElementById('backButton');

    menuButton.addEventListener('click', function () {
        menu.style.top = '0';
    });

    closeButton.addEventListener('click', function () {
        menu.style.top = '-100%';
    });

    signinButton.addEventListener('click', function () {
        loginInterface.style.left = '0';
    });

    backButton.addEventListener('click', function () {
        loginInterface.style.left = '-100%';
    });
});