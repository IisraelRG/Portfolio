menu_show = document.querySelector('.menu-burguer')
menu = document.querySelector('.menu')
btn_cv = document.querySelector('.cv')

menu_show.addEventListener('click', ()=>{
    menu.classList.toggle('menu--show');
    btn_cv.classList.toggle('cv--show');
});