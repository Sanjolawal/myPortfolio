const container = document.querySelector(`.container`);

if (window.innerWidth < 751) {
  menuOpener.addEventListener(`click`, function () {
    const mainBlog = document.querySelector(`.mainBlog`);
    mainBlog.classList.toggle(`mainBlog2`);
  });
}

// light toggling

lightToggle.forEach((each) => {
  if (each.firstElementChild.firstElementChild.innerText === `toggle_off`) {
    let color = `white`;
    test(color);
    each.addEventListener(`click`, () => {
      if (each.firstElementChild.firstElementChild.innerText === `toggle_off`) {
        let color = `white`;
        test(color);
      } else {
        let color = ` `;
        test(color);
      }
    });
  } else {
    let color = ` `;
    test(color);
    each.addEventListener(`click`, () => {
      if (each.firstElementChild.firstElementChild.innerText === `toggle_on`) {
        let color = ` `;
        test(color);
      } else {
        let color = `white`;
        test(color);
      }
    });
  }
});

async function test(color) {
  const responseObject = await fetch(`/api/blogs`);
  const blogarr = await responseObject.json();
  const blognew = blogarr.map((each) => {
    const { img, h4, p3 } = each;
    return `
    <div class="first">
            <img src=${img} alt="img" class="Img" />
            <h4 class="h4" style="color: ${color}" >${h4}</h4>
            <p class="p3" style="color: ${color}" >
              ${p3}
            </p>
          </div>
    `;
  });

  container.innerHTML = blognew.join(` `);
}
