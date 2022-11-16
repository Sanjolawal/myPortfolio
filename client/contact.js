const contact = document.querySelector(`.contact`);

if (window.innerWidth < 751) {
  menuOpener.addEventListener(`click`, function () {
    const contact = document.querySelector(`.contact`);
    contact.classList.toggle(`contact2`);
  });
}

// light toggling

lightToggle.forEach((each) => {
  if (each.firstElementChild.firstElementChild.innerText === `toggle_off`) {
    contact.style.background = `rgb(162,10,181, 0.45)`;
    p.forEach((each) => {
      each.style.color = `white`;
    });
    each.addEventListener(`click`, () => {
      if (each.firstElementChild.firstElementChild.innerText === `toggle_off`) {
        contact.style.background = `rgb(162,10,181, 0.45)`;
        p.forEach((each) => {
          each.style.color = `white`;
        });
      } else {
        contact.style.background = ``;
        p.forEach((each) => {
          each.style.color = `black`;
        });
      }
    });
  } else {
    contact.style.background = ``;
    p.forEach((each) => {
      each.style.color = `black`;
    });
    each.addEventListener(`click`, () => {
      if (each.firstElementChild.firstElementChild.innerText === `toggle_on`) {
        contact.style.background = ``;
        p.forEach((each) => {
          each.style.color = `black`;
        });
      } else {
        contact.style.background = `rgb(162,10,181, 0.45)`;
        p.forEach((each) => {
          each.style.color = `white`;
        });
      }
    });
  }
});
