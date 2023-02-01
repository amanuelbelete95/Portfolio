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

// pop up

const popWindow = [
  {
    mobileHeading: 'Multi Post Stories',
    popImg: 'images/Snapshoot Portfolio.png',
    popDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    poplive: 'images/live.png',
    popGitHub: 'images/github.png',
    popList: ['html', 'bootstrap', 'Ruby on rails'],
    popLiveLink: 'https://github.com/amanuelbelete95/Portfolio',
    popGithubLink: 'https://amanuelbelete95.github.io/Portfolio/',
  },

  {
    desktopHeading: 'Keeping track of hundreds of components website',
    popImg: 'images/Snapshoot Portfolio.png',
    popDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    poplive: 'images/live.png',
    popGitHub: 'images/github.png',
    popList: ['html', 'bootstrap', 'Ruby on rails'],
    popLiveLink: 'https://github.com/amanuelbelete95/Portfolio',
    popGithubLink: 'https://amanuelbelete95.github.io/Portfolio/',
  },
];

const popUpWindow = document.querySelector('.popUp');

popUpWindow.innerHTML = `<div class="showpop hidepop">
   <div class="pop-header">
    <h3 class="pop-title-mobile">${popWindow[0].mobileHeading}</h3>
    <h3 class="pop-title-desktop">${popWindow[1].desktopHeading}</h3>
    <button data-close-button class="close-btn" id="close-project">
              <i class="fa fa-times"></i>
      </button>
   </div>

   <ul class="pop-list">
    <li>${popWindow[0].popList[0]}</li>
    <li>${popWindow[0].popList[1]}</li>
    <li>${popWindow[0].popList[2]}</li>
   </ul>

   <div class="image-info-container">
    <div class="img-pop">
    <img src="${popWindow[0].popImg}"/>
   </div>
   
   <div class="info-button">
    <p ${popWindow[0].popDescription}class="pop-desktop-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
    <div class="my-buttons">
    <button class="btn1">See live <span></span><img src="${popWindow[0].poplive}"></button>
    <button class="btn1">See source <span></span><img src="${popWindow[0].popGitHub}"></button>
   </div>
   </div> 
  </div>
    </div>
`;

const openBtn = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.querySelector('.overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.toggle('active');
  overlay.classList.toggle('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
    window.scrollTo({ top: 10, behavior: 'smooth' });
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.popUp.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.popUp');
    closeModal(modal);
  });
});
