let menu_btn = document.querySelector('.menu-btn');
let menu_list = document.querySelector('.menu-list');

menu_btn.onclick = () => {
    menu_btn.classList.toggle('menu-btn-active');
    menu_list.classList.toggle('menu-list-active');
}
