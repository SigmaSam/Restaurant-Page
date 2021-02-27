import page from './modules/page.js';
import home from './modules/home.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';

function addNavEvents() {
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');
  
    homeBtn.addEventListener('click', home);
    menuBtn.addEventListener('click', menu);
    contactBtn.addEventListener('click', contact);
}

  function skeleton() {
    page();
    home();
    menu();
    contact();
    addNavEvents();
}

skeleton();
