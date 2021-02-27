function setSwap(id) {
    const actBtn = document.querySelector('.tab.active');
    if (actBtn) actBtn.classList.remove('active');

    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function addSection(name,data) {
    const section = document.createElement('section');
    section.className = 'section';

    const title = document.createElement('h2');
    title.className = '';
    title.textContent = name;
    section.appendChild(title);

    data.forEach((d)=> {
        const info = document.createElement('p');
        info.className = ''
        info.textContent = d;
        section.appendChild(info);
    });

    return section;
}

function contact() {
    const content = document.getElementById('tab-content');
    content.textContent = '';
    setSwap('contact');
    
    const phone = addSection('Phones', [ '1234-567-8910',
    '1234-567-8910']);
    
    const address = addSection('address', ['somewhere arround']);

    content.appendChild(phone);
    content.appendChild(address);
}

export default contact;