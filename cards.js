const worksTitle = ['My Recent Works'];
const storyTitle = ['My Recent Works'];
const storyDescription = ["A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text."];
const workImage = ['./Images/mytitle image.png'];

const workList = ['css', 'html', 'bootsrap', 'ruby'];

const workSection = document.querySelector('.work-section');

workSection.innerHTML = `<section class="work-section" id="work">
      <div class="work">
        <h1 class="work-title">${worksTitle[0]}</h1>
        <hr class="desktop-hr" />
        <img src="${workImage}" class="work-image" />
        <h3 class="story-title">${storyTitle[0]}</h3>
        <p class="story-info"> ${storyDescription[0]}
        </p>
        <ul class="my-skills">
          <li>${workList[0]}</li>
          <li>${workList[1]}</li>
          <li>${workList[2]}</li>
          <li>${workList[3]}</li>
        </ul>
        <br />
        <button data-modal-target="#popUp" class="my-btn">See Projects</button>
      </div>
    </section>`;

const titleArray = ['', 'Data Dashboard Healthcare', 'Website Portfolio', 'Profesional Art Printing Data More', 'Data Dashboard Healthcare', 'Website Portfolio'];
const description = ["A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard"];
const classesDiv = ['cards desktop1', 'cards desktop2', 'cards desktop3', 'cards desktop4', 'cards desktop5', 'cards desktop6'];
const classesHeading = ['nothing', 'heading-desk', 'heading-desk', 'heading-desk', 'heading-desk', 'heading-desk'];
const lists = ['html', 'bootstrap', 'ruby'];

const cards = document.querySelector('.cards-desktop');

cards.innerHTML += ` <div class="${classesDiv[0]}">
    <button data-modal-target="#popUp" class="btn-desk" href="#">See Project</button>
    </div>`;

for (let i = 1; i < titleArray.length; i += 1) {
  cards.innerHTML += ` <div class="${classesDiv[i]}">
    <h2 class="${classesHeading[i]}">
    ${titleArray[i]}
    </h2>
    <p>
    ${description[i]}
    </p>
    <ul>
          <li>${lists[0]}</li>
          <li>${lists[1]}</li>
          <li>${lists[2]}</li>
        </ul>
    </div>`;
}