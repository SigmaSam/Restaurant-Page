function addHeader(id) {
    const header = document.createElement('header');
    header.setAttribute('id',id);
    const logo = document.createElement('h1');
    logo.textContent = 'Restaurant';
    logo.className = 'text-7xl my-2 font-serif italic font-extrabold'
    header.appendChild(logo);
    
    return header;
}

function addBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.innerHTML = text;
    btn.className = 'bg-yellow-400 px-4 py-2 mx-5 rounded border-2 border-black ring ring-white my-2 font-bold capitalize italic';
    
    return btn;
}

function addNav(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);
    nav.className = 'flex justify-between w-100'

    const homeBtn = addBtn('home', 'home');
    const menuBtn = addBtn('menu', 'menu');
    const contactBtn = addBtn('contact', 'contact');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
}

function addMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
}

function addFooter(id, text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const h3 = document.createElement('h3');
    h3.textContent = text;
    footer.appendChild(h3);
    return footer;
}

function render() {
    const content = document.getElementById('content');
    content.className = 'min-w-full bg-red-700 flex flex-col items-center'
    
    const header = addHeader('header');
    content.appendChild(header);

    const nav = addNav('nav');
    content.appendChild(nav);

    const tabContent = addMain('tab-content');
    content.appendChild(tabContent);
    const footer = addFooter('footer', 'Made with a lot of coofee and selfdoubt');
}

export default render;