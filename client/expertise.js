const h2 = document.querySelectorAll(`.h2`);
const span1 = document.querySelectorAll(`.span1`);
const sImages = document.querySelector(`.sImages`);
const tImages = document.querySelector(`.tImages`);
const h5 = document.querySelector(`.h5`);
const cp = document.querySelector(`.cp`);

if (window.innerWidth < 751) {
  menuOpener.addEventListener(`click`, function () {
    const mainExpertise = document.querySelector(`.mainExpertise`);
    mainExpertise.classList.toggle(`mainExpertise2`);
  });
}

// light toggling

lightToggle.forEach((each) => {
  if (each.firstElementChild.firstElementChild.innerText === `toggle_off`) {
    sImages.style.color = `white`;
    tImages.style.color = `white`;
    h2.forEach((h2) => {
      h2.style.color = `white`;
    });
    span1.forEach((each) => {
      each.style.color = `white`;
    });
    h5.style.color = `white`;
    cp.style.color = `white`;
    each.addEventListener(`click`, () => {
      if (each.firstElementChild.firstElementChild.innerText === `toggle_off`) {
        sImages.style.color = `white`;
        tImages.style.color = `white`;
        h2.forEach((h2) => {
          h2.style.color = `white`;
        });
        span1.forEach((each) => {
          each.style.color = `white`;
        });
        h5.style.color = `white`;
        cp.style.color = `white`;
      } else {
        sImages.style.color = `black`;
        tImages.style.color = `black`;
        h2.forEach((h2) => {
          h2.style.color = `black`;
        });
        span1.forEach((each) => {
          each.style.color = `black`;
        });
        h5.style.color = `black`;
        cp.style.color = `black`;
      }
    });
  } else {
    each.addEventListener(`click`, () => {
      sImages.style.color = `black`;
      tImages.style.color = `black`;
      h2.forEach((h2) => {
        h2.style.color = `black`;
      });
      span1.forEach((each) => {
        each.style.color = `black`;
      });
      h5.style.color = `black`;
      cp.style.color = `black`;
      if (each.firstElementChild.firstElementChild.innerText === `toggle_on`) {
        sImages.style.color = `black`;
        tImages.style.color = `black`;
        h2.forEach((h2) => {
          h2.style.color = `black`;
        });
        span1.forEach((each) => {
          each.style.color = `black`;
        });
        h5.style.color = `black`;
        cp.style.color = `black`;
      } else {
        sImages.style.color = `white`;
        tImages.style.color = `white`;
        h2.forEach((h2) => {
          h2.style.color = `white`;
        });
        span1.forEach((each) => {
          each.style.color = `white`;
        });
        h5.style.color = `white`;
        cp.style.color = `white`;
      }
    });
  }
});

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
    src: `vs code.png`,
    text: `vs code`,
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
    src: `canva.png`,
    text: `canva`,
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
