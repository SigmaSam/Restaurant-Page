
const addSection = (name, data) => {
  const section = document.createElement('section');
  section.className = 'section font-mono mt-5 capitalize mx-5';

  const title = document.createElement('h2');
  title.className = ' font-bold text-4xl';
  title.textContent = name;
  section.appendChild(title);

  data.forEach((d) => {
    const info = document.createElement('p');
    info.className = '';
    info.textContent = d;
    section.appendChild(info);
  });

  return section;
};

const contact = () => {
  const content = document.getElementById('tab-content');
  content.textContent = '';

  const section = document.createElement('section');
  section.className = 'w-screen text-center flex justify-center';
  content.appendChild(section);

  const phone = addSection('Phones', ['1234-567-8910',
    '1234-567-8910']);

  const address = addSection('address', ['somewhere arround']);

  section.appendChild(phone);
  section.appendChild(address);
};

export default contact;