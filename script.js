const menus = document.querySelector(`.menus`);
const menusCon = document.querySelectorAll(`.menusCon`);
const menuOpener = document.querySelector(`#menuOpener`);
const body = document.querySelector(`.body`);
const menuIllus = document.querySelectorAll(`.menuIllus`);
const lightToggle = document.querySelector(`#lightToggle`);
const toggleValue = document.querySelector(`#toggleValue`);
// const menusIllus = document.querySelectorAll(`.menusIllus`);

// const checkActive = (e) => {
//   if (e.target.classList.contains(`menusIllus`)) {
//     e.target.style.background = `blue`;
//     const us = menusIllus.forEach((each) => {
//       if (each.parentElement.classList.contains(`menusConActive`)) {
//         return each.parentElement.classList.replace(
//           `menusConActive`,
//           `menusCon`
//         );
//       }
//     });
//     e.target.parentElement.classList.replace(`menusCon`, `menusConActive`);
//   }
// };

// menus.addEventListener(`click`, checkActive);

menuOpener.addEventListener(`click`, function () {
  body.classList.toggle(`body2`);
  menuIllus.forEach((each) => {
    each.classList.toggle(`menuIllus2`);
  });
  if (body.classList.contains(`body2`)) {
    return (menus.style.width = `${20}vw`);
  }
  menus.style.width = `${7}vw`;
});

menusCon.forEach((each) => {
  each.addEventListener(`mouseover`, function (e) {
    each.firstElementChild.style.color = `rgb(191, 10, 182)`;
    each.lastElementChild.style.color = `rgb(191, 10, 182)`;
  });
  each.addEventListener(`mouseout`, function (e) {
    each.firstElementChild.style.color = `white`;
    each.lastElementChild.style.color = `white`;
  });
});

const ToggleMode = () => {
  if (lightToggle.firstElementChild.innerText === `toggle_on`) {
    return (
      (lightToggle.firstElementChild.innerText = `toggle_off`),
      (lightToggle.lastElementChild.innerText = `Off`)
    );
  }
  lightToggle.firstElementChild.innerText = `toggle_on`;
  lightToggle.lastElementChild.innerText = `On`;
};

lightToggle.addEventListener(`click`, ToggleMode);
