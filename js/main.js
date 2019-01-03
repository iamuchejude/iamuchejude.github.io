const setActiveContent = content => {
  document.querySelectorAll('main > div').forEach((contents) => contents.classList.remove('active'));
  document.querySelector(`main > div[data-content="${content}"]`).classList.add('active');
}

document.querySelector('#logo a').addEventListener('click', (e) => {
  e.preventDefault();
  setActiveContent('home');
});

document.querySelectorAll('#menu ul li a:not([data-action="external"])').forEach((menu) => {
  menu.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveContent(e.target.getAttribute('data-show'));
  });
});

document.querySelector('#mobile .icon').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#menu').classList.toggle('mobile-active');
});