const container = document.querySelector(`.container`);

if (window.innerWidth < 751) {
  menuOpener.addEventListener(`click`, function () {
    const mainBlog = document.querySelector(`.mainBlog`);
    mainBlog.classList.toggle(`mainBlog2`);
  });
}

blogarr = [
  {
    img: `images/test.png`,
    h4: `Premium Admin Template`,
    p3: new Date().toDateString(),
  },
  {
    img: `images/test.png`,
    h4: `Premium Admin Template`,
    p3: new Date().toDateString(),
  },
  {
    img: `images/test.png`,
    h4: `Premium Admin Template`,
    p3: new Date().toDateString(),
  },
  {
    img: `images/test.png`,
    h4: `Premium Admin Template`,
    p3: new Date().toDateString(),
  },
];

const blognew = blogarr.map((each) => {
  const { img, h4, p3 } = each;
  return `
    <div class="first">
            <img src=${img} alt="img" class="Img" />
            <h4 class="h4">${h4}</h4>
            <p class="p3">
              ${p3}
            </p>
          </div>
    `;
});

container.innerHTML = blognew.join(` `);
