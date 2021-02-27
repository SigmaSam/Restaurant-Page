const setSwap = (id) => {
  const actBtn = document.querySelector('.tab.active');
  if (actBtn) actBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
}

const addDish = (src, text, price, alt) => {
  const dish = document.createElement('div');
  dish.className = 'food p-2 m2';

  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);
  img.className = 'rounded ring ring-black max-h-40 min-w-60';

  const filler = document.createElement('div');
  filler.className = 'description text-center font-mono';

  const name = document.createElement('h3');
  name.textContent = text;
  name.className = 'font-bold capitalize';

  const cost = document.createElement('h2');
  cost.textContent = price;

  filler.appendChild(name);
  filler.appendChild(cost);

  dish.appendChild(img);
  dish.appendChild(filler);

  return dish;
}

const menu = () => {
  const content = document.getElementById('tab-content');
  content.textContent = '';

  const gridBox = document.createElement('div');
  gridBox.className = ' mt-2 w-screen grid grid-cols-3 justify-items-center';

  content.appendChild(gridBox);

  setSwap('menu');

  const dishes = [
    addDish(
      'https://picsum.photos/200/200',
      'lorem Ipsum',
      '999',
      'Lorem Ipsum Coffee',
    ),
    addDish(
      'https://picsum.photos/200/200',
      'lorem Ipsum',
      '999',
      'Lorem Ipsum Coffee',
    ),
    addDish(
      'https://picsum.photos/200/200',
      'lorem Ipsum',
      '999',
      'Lorem Ipsum Coffee',
    ),
    addDish(
      'https://picsum.photos/200/200',
      'lorem Ipsum',
      '999',
      'Lorem Ipsum Coffee',
    ),
    addDish(
      'https://picsum.photos/200/200',
      'lorem Ipsum',
      '999',
      'Lorem Ipsum Coffee',
    ),
  ];

  dishes.forEach((dish) => {
    gridBox.appendChild(dish);
  });
}

export default menu;