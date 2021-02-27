function setSwap(id) {
    const actBtn = document.querySelector('.tab.active');
    if (actBtn) actBtn.classList.remove('active');

    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}

function addDish(src,text,price,alt){
    const dish = document.createElement('div');
    dish.className = 'food p-2 m2';
    
    const img = document.createElement('img');
    img.setAttribute('src',src);
    img.setAttribute('alt',alt);
    img.className = 'rounded ring ring-black';

    const filler = document.createElement('div');
    filler.className = 'description text-center';

    const name = document.createElement('h3');
    name.textContent = text;

    const cost = document.createElement('h2');
    cost.textContent = price;

    filler.appendChild(name);
    filler.appendChild(cost);

    dish.appendChild(img);
    dish.appendChild(filler);

    return dish;
}

function menu() {
    const content = document.getElementById('tab-content');

    content.textContent = '';
    setSwap('menu');

    const dishes = [
        addDish(
            'https://picsum.photos/200/300',
            'lorem Ipsum',
            '999',
            'Lorem Ipsum Coffee'
        ),
        addDish(
            'https://picsum.photos/200/300',
            'lorem Ipsum',
            '999',
            'Lorem Ipsum Coffee'
        ),
        addDish(
            'https://picsum.photos/200/300',
            'lorem Ipsum',
            '999',
            'Lorem Ipsum Coffee'
        ),
        addDish(
            'https://picsum.photos/200/300',
            'lorem Ipsum',
            '999',
            'Lorem Ipsum Coffee'
        ),
        addDish(
            'https://picsum.photos/200/300',
            'lorem Ipsum',
            '999',
            'Lorem Ipsum Coffee'
        ),
    ];

    dishes.forEach((dish) => {
        content.appendChild(dish);
    });
}

export default menu;