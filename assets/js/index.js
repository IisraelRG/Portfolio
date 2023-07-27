menu_show = document.querySelector('.btn_menu')
menu = document.querySelector('.menu')

menu_show.addEventListener('click', ()=>{
    menu.classList.toggle('menu--show')
});