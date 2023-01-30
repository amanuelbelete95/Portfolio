const humburger = document.querySelector('.humburger');

const closeBtn = document.querySelector('.close-btn');

const menu = document.querySelector('.menu-bar');

const menuItems = document.querySelectorAll('.menu-mobile a');

humburger.addEventListener('click', () => {
  menu.classList.toggle('hidden-menu');
});

closeBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden-menu');
});

function menuRemover() {
  menu.classList.toggle('hidden-menu');
}

menuItems.forEach((item) => {
  item.addEventListener('click', menuRemover);
});
