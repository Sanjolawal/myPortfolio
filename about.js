const sImages = document.querySelector(`.sImages`);
const tImages = document.querySelector(`.tImages`);
const img = document.querySelector(`.Img`);
const span1 = document.querySelectorAll(`.span1`);
const infoH1 = document.querySelectorAll(`.infoH1`);
const infoP = document.querySelectorAll(`.infoP`);
const h2 = document.querySelectorAll(`.h2`);
const aboutArticle = document.querySelector(`.aboutArticle`);

if (window.innerWidth < 751) {
  menuOpener.addEventListener(`click`, function () {
    const about = document.querySelector(`.about`);
    about.classList.toggle(`about2`);
  });
}

lightToggle.forEach((each) => {
  if (each.firstElementChild.firstElementChild.innerText === `toggle_off`) {
    aboutArticle.style.color = `white`;
    span1.forEach((each) => {
      each.style.color = `white`;
    });
    img.style.background = `white`;
    h2.forEach((h2) => {
      h2.style.color = `white`;
    });
    sImages.style.color = `white`;
    tImages.style.color = `white`;
    each.addEventListener(`click`, () => {
      if (each.firstElementChild.firstElementChild.innerText === `toggle_off`) {
        aboutArticle.style.color = `white`;
        span1.forEach((each) => {
          each.style.color = `white`;
        });
        img.style.background = `white`;
        h2.forEach((h2) => {
          h2.style.color = `white`;
        });
        sImages.style.color = `white`;
        tImages.style.color = `white`;
      } else {
        aboutArticle.style.color = `black`;
        span1.forEach((each) => {
          each.style.color = `black`;
        });
        img.style.background = `white`;
        h2.forEach((h2) => {
          h2.style.color = `black`;
        });
        sImages.style.color = `black`;
        tImages.style.color = `black`;
      }
    });
  } else {
    aboutArticle.style.color = `black`;
    img.style.background = `white`;
    h2.forEach((h2) => {
      h2.style.color = `black`;
    });
    sImages.style.color = `black`;
    tImages.style.color = `black`;
    each.addEventListener(`click`, () => {
      if (each.firstElementChild.firstElementChild.innerText === `toggle_on`) {
        aboutArticle.style.color = `black`;
        span1.forEach((each) => {
          each.style.color = `black`;
        });
        img.style.background = `white`;
        h2.forEach((h2) => {
          h2.style.color = `black`;
        });
        sImages.style.color = `black`;
        tImages.style.color = `black`;
      } else {
        aboutArticle.style.color = `white`;
        span1.forEach((each) => {
          each.style.color = `white`;
        });
        img.style.background = `white`;
        h2.forEach((h2) => {
          h2.style.color = `white`;
        });
        sImages.style.color = `white`;
        tImages.style.color = `white`;
      }
    });
  }
});

// programming languages script link
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
  if (aboutArticle.style.color === `black`) {
    return `  <div class="imageContainer">
                    <img src="images/${each.src}" alt="logo" class="sLogo" />
                    <p class="imageP">${each.text.toUpperCase()}</p>
                  </div>`;
  }
  return `  <div class="imageContainer">
                    <img src="images/${
                      each.src
                    }" alt="logo" class="sLogo" style="background: black" />
                    <p class="imageP">${each.text.toUpperCase()}</p>
                  </div>`;
});

sImages.innerHTML = newPl.join(` `);

// My tools script link
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
  if (aboutArticle.style.color === `black`) {
    return `  <div class="imageContainer">
                    <img src="images/${each.src}" alt="logo" class="sLogo" />
                    <p class="imageP">${each.text.toUpperCase()}</p>
                  </div>`;
  }
  return `  <div class="imageContainer">
                    <img src="images/${
                      each.src
                    }" alt="logo" class="sLogo" style="background: black" />
                    <p class="imageP">${each.text.toUpperCase()}</p>
                  </div>`;
});

tImages.innerHTML = newTl.join(` `);
