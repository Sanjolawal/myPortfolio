if (window.innerWidth < 751) {
  menuOpener.addEventListener(`click`, function () {
    const about = document.querySelector(`.about`);
    about.classList.toggle(`about2`);
  });
}
