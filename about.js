const sImages = document.querySelector(`.sImages`);
const tImages = document.querySelector(`.tImages`);

if (window.innerWidth < 751) {
  menuOpener.addEventListener(`click`, function () {
    const about = document.querySelector(`.about`);
    about.classList.toggle(`about2`);
  });
}

let pl = [
  {
    src: `html.png`,
    text: `html`,
  },
  {
    src: `js.png`,
    text: `javascript`,
  },
  {
    src: `css.png`,
    text: `css`,
  },
  {
    src: `react.png`,
    text: `react`,
  },
  {
    src: `tailwind.png`,
    text: `tailwind`,
  },
  {
    src: `nodejs.png`,
    text: `nodejs`,
  },
  {
    src: `express.png`,
    text: `express`,
  },
  {
    src: `mongoose.png`,
    text: `mongoose`,
  },
  {
    src: `mongodb.png`,
    text: `mongodb`,
  },
];

const newPl = pl.map((each) => {
  return `  <div class="imageContainer">
                  <img src="images/${each.src}" alt="logo" class="sLogo" />
                  <p class="imageP">${each.text.toUpperCase()}</p>
                </div>`;
});

sImages.innerHTML = newPl.join(` `);

let tl = [
  {
    src: `figma.png`,
    text: `figma`,
  },
  {
    src: `canva.png`,
    text: `canva`,
  },
  {
    src: `git.png`,
    text: `git`,
  },
  {
    src: `NPM.png`,
    text: `NPM`,
  },
  {
    src: `heroku.png`,
    text: `heroku`,
  },
  {
    src: `material.png`,
    text: `material`,
  },
  {
    src: `netlify.png`,
    text: `netlify`,
  },
  {
    src: `vs code.png`,
    text: `vs code`,
  },
  {
    src: `xd.png`,
    text: `xd`,
  },
];

const newTl = tl.map((each) => {
  return `  <div class="imageContainer">
                  <img src="images/${each.src}" alt="logo" class="sLogo" />
                  <p class="imageP">${each.text.toUpperCase()}</p>
                </div>`;
});

tImages.innerHTML = newTl.join(` `);
