let iconMenu = document.getElementById('icon-menu');
let mainMenu = document.getElementById('main-menu');

iconMenu.addEventListener('click',function(){
    mainMenu.classList.toggle('show');
})