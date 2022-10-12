const menus = document.querySelector(`.menus`);
const menuOpener = document.querySelector(`#menuOpener`);
const body = document.querySelector(`.body`);
const menusIllus = document.querySelectorAll(`.menusIllus`);

const checkActive = (e) => {
  if (e.target.classList.contains(`menusIllus`)) {
    const us = menusIllus.forEach((each) => {
      if (each.parentElement.classList.contains(`menusConActive`)) {
        return each.parentElement.classList.replace(
          `menusConActive`,
          `menusCon`
        );
      }
    });
    e.target.parentElement.classList.replace(`menusCon`, `menusConActive`);
  }
};

menus.addEventListener(`click`, checkActive);

menuOpener.addEventListener(`click`, function () {
  body.classList.toggle(`body2`);
});
