const prepareActivies = () => {
  if (window.innerWidth <= '800') void(document.querySelector('#menu').classList.remove('mobile-active'));
  return void document.querySelectorAll('div[data-content]').forEach(x => x.classList.remove('active'));
}

document.querySelector('#logo a').addEventListener('click', (e) => {
  e.preventDefault();
  prepareActivies();
  return void document.querySelector('.body').scrollIntoView({ behavior: 'smooth' });
});

const makeContentActive = (content) => {
  prepareActivies();
  content.scrollIntoView({ behavior: 'smooth' });
  return void content.classList.add('active');
}

document.querySelectorAll('#menu ul li a:not([data-action="external"])').forEach((menu) => {
  menu.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('data-show');
    return void makeContentActive(document.querySelector(`[data-content="${target}"]`));
  });
});

document.querySelector('#mobile .icon').addEventListener('click', e => {
  e.preventDefault();
  return void document.querySelector('#menu').classList.toggle('mobile-active');
});

document.querySelector('#year').textContent = (new Date()).getFullYear();