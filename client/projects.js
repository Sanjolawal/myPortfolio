const container = document.querySelector(`.container`);
const span1 = document.querySelector(`.span1`);
const h5 = document.querySelector(`.h5`);
const cp = document.querySelector(`.cp`);

if (window.innerWidth < 751) {
  menuOpener.addEventListener(`click`, function () {
    const mainProject = document.querySelector(`.mainProject`);
    mainProject.classList.toggle(`mainProject2`);
  });
}

// light toggling

lightToggle.forEach((each) => {
  if (each.firstElementChild.firstElementChild.innerText === `toggle_off`) {
    span1.style.color = `white`;
    h5.style.color = `white`;
    cp.style.color = `white`;
    color = `white`;
    Change(color);
    each.addEventListener(`click`, () => {
      if (each.firstElementChild.firstElementChild.innerText === `toggle_off`) {
        span1.style.color = `white`;
        h5.style.color = `white`;
        cp.style.color = `white`;
        color = `white`;
        Change(color);
      } else {
        span1.style.color = `black`;
        h5.style.color = `black`;
        cp.style.color = `black`;
        color = ` `;
        Change(color);
      }
    });
  } else {
    span1.style.color = `black`;
    h5.style.color = `black`;
    cp.style.color = `black`;
    color = ` `;
    Change(color);
    each.addEventListener(`click`, () => {
      if (each.firstElementChild.firstElementChild.innerText === `toggle_on`) {
        span1.style.color = `black`;
        h5.style.color = `black`;
        cp.style.color = `black`;
        color = ` `;
        Change(color);
      } else {
        span1.style.color = `white`;
        h5.style.color = `white`;
        cp.style.color = `white`;
        color = `white`;
        Change(color);
      }
    });
  }
});

function Change(color) {
  proarr = [
    {
      img: `images/test.png`,
      h4: `Premium Admin Template`,
      p3: `
     Premium coded admin panel, with animations, charts, secure login.
              Has everything you can ever think of, aesthetic minimalist design,
              stunning layout, premium font etc.`,
    },
    {
      img: `images/test.png`,
      h4: `Premium Admin Template`,
      p3: `
     Premium coded admin panel, with animations, charts, secure login.
              Has everything you can ever think of, aesthetic minimalist design,
              stunning layout, premium font etc.`,
      github: `/`,
      demo: `/`,
    },
    {
      img: `images/test.png`,
      h4: `Premium Admin Template`,
      p3: `
     Premium coded admin panel, with animations, charts, secure login.
              Has everything you can ever think of, aesthetic minimalist design,
              stunning layout, premium font etc.`,
      github: `/`,
    },
    {
      img: `images/test.png`,
      h4: `Premium Admin Template`,
      p3: `
     Premium coded admin panel, with animations, charts, secure login.
              Has everything you can ever think of, aesthetic minimalist design,
              stunning layout, premium font etc.`,
      demo: `/`,
    },
  ];

  const pronew = proarr.map((each) => {
    const { img, h4, p3, github, demo } = each;
    if (demo && github) {
      return `
        <div class="first">
                <div class="contain" >
               <img  src=${img} class="Img" alt="img" />
                 <div class="overlay">
                 <div class="con">
                  <a href=${github} class="btn1"> Github </a>
                 <a href=${demo} class="btn2"> Demo </a>
                   </div>
                  </div>
                 </div>
                 <h4 class="h4"  style="color: ${color}">${h4}</h4>
                 <p class="p3" style="color: ${color}">
                   ${p3}
                 </p>
               </div>
         `;
    } else if (github || demo) {
      return `
        <div class="first">
                <div class="contain" >
               <img  src=${img} class="Img" alt="img" />
                 <div class="overlay">
                 <div class="con">
                  <a href=${github ? github : demo} class="btn1">${
        github ? `Github` : `Demo`
      }</a>
                   </div>
                  </div>
                 </div>
                 <h4 class="h4" style="color: ${color}">${h4}</h4>
                 <p class="p3" style="color: ${color}">
                   ${p3}
                 </p>
               </div>
         `;
    }
    return `
        <div class="first">
                <div class="contain" >
               <img  src=${img} class="Img" alt="img" />
                 </div>
                 <h4 class="h4" style="color: ${color}">${h4}</h4>
                 <p class="p3" style="color: ${color}">
                   ${p3}
                 </p>
               </div>
         `;
  });

  container.innerHTML = pronew.join(` `);
}
// Change();
