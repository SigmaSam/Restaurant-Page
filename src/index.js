import page from './modules/page';
import home from './modules/home';
import menu from './modules/menu';
import contact from './modules/contact';

const addNavEvents = () => {
  const homeBtn = document.getElementById('home');
  const menuBtn = document.getElementById('menu');
  const contactBtn = document.getElementById('contact');

  homeBtn.addEventListener('click', home);
  menuBtn.addEventListener('click', menu);
  contactBtn.addEventListener('click', contact);
};

const skeleton = () => {
  page();
  menu();
  contact();
  home();
  addNavEvents();
};

skeleton();
