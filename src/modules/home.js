const addAbout = () => {
  const about = document.createElement('section');
  about.className = ('section w-screen flex flex-col items-center text-center border-t-2 border-black');

  const title = document.createElement('h2');
  title.className = ('section-title text-5xl font-bold mt-5 mb-6 font-mono');
  title.textContent = ('Who are we?');

  about.appendChild(title);

  const filler = document.createElement('p');
  filler.className = 'section-filler font-mono w-2/3';
  filler.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam praesentium porro dolor modi rem! Provident iure eligendi tempore. Ducimus dolorem iure aperiam incidunt iste nostrum perspiciatis molestiae veniam praesentium repellendus ut ipsum quasi doloribus adipisci non, quaerat nesciunt rem delectus quia numquam? Architecto ea vero earum reprehenderit ab? Magnam, delectus.';

  about.appendChild(filler);
  return about;
};

const about = () => {
  const content = document.getElementById('tab-content');
  content.textContent = '';

  const aboutSection = addAbout();
  content.appendChild(aboutSection);
};

export default about;