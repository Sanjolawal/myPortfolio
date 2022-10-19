const menus = document.querySelector(`.menus`);
const menusCon = document.querySelectorAll(`.menusCon`);
const menuOpener = document.querySelector(`#menuOpener`);
const body = document.querySelector(`.body`);
const mainbody = document.querySelector(`.mainBody`);
const nav = document.querySelector(`.nav`);
const menuIllus = document.querySelectorAll(`.menuIllus`);
const lightToggle = document.querySelectorAll(`#lightToggle`);
const toggleValue = document.querySelector(`#toggleValue`);
const mobileMenu = document.querySelector(`.mobileMenu`);
const mobileMenuCon = document.querySelectorAll(`.mobileMenuCon`);
const mobileClose = document.querySelector(`#mobileClose`);
const view = document.querySelector(`#view`);
const h1 = document.querySelectorAll(`.h1`);
const p = document.querySelectorAll(`.p`);
const p2 = document.querySelectorAll(`.p2`);
const profileImg = document.querySelector(`.profileImg`);
const mobileProfile = document.querySelector(`.mobileProfile`);

// Animations for nav on desktop with gsap library
gsap.from(`.menuContainer`, {
  duration: 1,
  y: 350,
  opacity: 0,
});

// script for checking for menus hovering width for all devices
if (window.innerWidth > 1101) {
  menus.style.width = `${2.6}vw`;
}
if (window.innerWidth < 1101) {
  menus.style.width = `${5}vw`;
}
if (window.innerWidth < 821) {
  menus.style.width = `${7}vw`;
}

// light and dark mode saved to localstorage
if (!localStorage.length || localStorage.getItem(`mode`) === `light`) {
  mainbody.style.background = `white`;
  mobileMenu.style.background = `white`;
  nav.style.background = `white`;
  mobileMenuCon.forEach((each) => {
    each.lastElementChild.style.color = `black`;
    each.addEventListener(`mouseover`, function (e) {
      each.firstElementChild.firstElementChild.style.color = `rgb(191, 10, 182)`;
      each.lastElementChild.style.color = `rgb(191, 10, 182)`;
    });
    each.addEventListener(`mouseout`, function () {
      each.firstElementChild.firstElementChild.style.color = `black`;
      each.lastElementChild.style.color = `black`;
    });
  });

  if (location.pathname === `/`) {
    gsap.from(`.mobileArticle, .mobileFirst`, {
      duration: 1.5,
      y: -350,
      opacity: 0,
    });

    gsap.from(`.profileImg`, {
      duration: 1,
      x: 150,
      opacity: 0,
    });

    gsap.from(`.homeSecond`, {
      duration: 1,
      x: -150,
      opacity: 0,
    });

    h1.forEach((each) => {
      each.style.color = `black`;
    });
    p.forEach((each) => {
      each.style.color = `black`;
    });
    p2.forEach((each) => {
      each.style.background = `rgb(191,10,182,1)`;
    });
  }
  lightToggle.forEach((each) => {
    if (window.innerWidth < 601) {
      return (
        (each.firstElementChild.firstElementChild.innerText = `toggle_on`),
        (each.firstElementChild.firstElementChild.style.color = `black`),
        (view.style.color = `black`)
      );
    }
    each.firstElementChild.firstElementChild.innerText = `toggle_on`;
    each.lastElementChild.innerText = `On`;
  });
} else if (localStorage.getItem(`mode`) === `dark`) {
  mainbody.style.background = `rgb(51, 40, 51)`;
  mobileMenu.style.background = `black`;
  nav.style.background = `rgb(51, 40, 51)`;
  mobileMenuCon.forEach((each) => {
    each.firstElementChild.firstElementChild.style.color = `white`;
    each.lastElementChild.style.color = `white`;
    each.addEventListener(`mouseover`, function (e) {
      each.firstElementChild.firstElementChild.style.color = `rgb(191, 10, 182)`;
      each.lastElementChild.style.color = `rgb(191, 10, 182)`;
    });
    each.addEventListener(`mouseout`, function () {
      each.firstElementChild.firstElementChild.style.color = `white`;
      each.lastElementChild.style.color = `white`;
    });
  });
  if (location.pathname === `/`) {
    gsap.from(`.mobileArticle, .mobileFirst`, {
      duration: 1.5,
      y: -350,
      opacity: 0,
    });

    gsap.from(`.profileImg`, {
      duration: 1,
      x: 150,
      opacity: 0,
    });

    gsap.from(`.homeSecond`, {
      duration: 1,
      x: -150,
      opacity: 0,
    });

    profileImg.style.background = `white`;
    mobileProfile.style.background = `white`;
    h1.forEach((each) => {
      each.style.color = `white`;
    });
    p.forEach((each) => {
      each.style.color = `white`;
    });
    p2.forEach((each) => {
      each.style.background = `rgb(191,10,182,0.4)`;
    });
  }
  lightToggle.forEach((each) => {
    if (window.innerWidth > 600) {
      return (
        (each.firstElementChild.firstElementChild.innerText = `toggle_off`),
        (each.lastElementChild.innerText = `Off`)
      );
    }
    return (
      (each.firstElementChild.firstElementChild.innerText = `toggle_off`),
      (view.style.color = `white`),
      (each.firstElementChild.firstElementChild.style.color = `white`)
    );
  });
}

// script for opening menus info on desktops
menuOpener.addEventListener(`click`, function () {
  body.classList.toggle(`body2`);
  menuIllus.forEach((each) => {
    each.classList.toggle(`menuIllus2`);
  });
  if (body.classList.contains(`body2`)) {
    if (window.innerWidth < 821) {
      return (menus.style.width = `${20}vw`);
    }
    if (window.innerWidth < 1101) {
      return (menus.style.width = `${16}vw`);
    }
    return (menus.style.width = `${12}vw`);
  }
  if (window.innerWidth < 821) {
    return (menus.style.width = `${7}vw`);
  }
  if (window.innerWidth < 1101) {
    return (menus.style.width = `${5}vw`);
  }
  menus.style.width = `${2.6}vw`;
});

// script for changing menus color on hover on all devices
menusCon.forEach((each) => {
  each.addEventListener(`mouseover`, function (e) {
    each.firstElementChild.firstElementChild.style.color = `rgb(191, 10, 182)`;
    each.lastElementChild.style.color = `rgb(191, 10, 182)`;
  });
  each.addEventListener(`mouseout`, function (e) {
    each.firstElementChild.firstElementChild.style.color = `white`;
    each.lastElementChild.style.color = `white`;
  });
});

// script for toggling light and dark mode on all devices (desktop, ipad and mobiles)
lightToggle.forEach((each) => {
  each.addEventListener(`click`, () => {
    if (each.firstElementChild.firstElementChild.innerText === `toggle_on`) {
      localStorage.setItem(`mode`, `dark`);
      mainbody.style.background = `rgb(51, 40, 51)`;
      mobileMenu.style.background = `black`;
      nav.style.background = `rgb(51, 40, 51)`;
      mobileMenuCon.forEach((each) => {
        each.firstElementChild.firstElementChild.style.color = `white`;
        each.lastElementChild.style.color = `white`;
        each.addEventListener(`mouseover`, function (e) {
          each.firstElementChild.firstElementChild.style.color = `rgb(191, 10, 182)`;
          each.lastElementChild.style.color = `rgb(191, 10, 182)`;
        });
        each.addEventListener(`mouseout`, function () {
          each.firstElementChild.firstElementChild.style.color = `white`;
          each.lastElementChild.style.color = `white`;
        });
      });
      if (location.pathname === `/`) {
        profileImg.style.background = `white`;
        mobileProfile.style.background = `white`;
        h1.forEach((each) => {
          each.style.color = `white`;
        });
        p.forEach((each) => {
          each.style.color = `white`;
        });
        p2.forEach((each) => {
          each.style.background = `rgb(191,10,182,0.6)`;
        });
      }
      if (window.innerWidth > 600) {
        return (
          (each.firstElementChild.firstElementChild.innerText = `toggle_off`),
          (each.lastElementChild.innerText = `Off`)
        );
      }
      return (
        (each.firstElementChild.firstElementChild.innerText = `toggle_off`),
        (each.firstElementChild.firstElementChild.style.color = `white`),
        (view.style.color = `white`)
      );
    }
    localStorage.setItem(`mode`, `light`);
    mainbody.style.background = `white`;
    mobileMenu.style.background = `white`;
    nav.style.background = `white`;
    mobileMenuCon.forEach((each) => {
      each.firstElementChild.firstElementChild.style.color = `black`;
      each.lastElementChild.style.color = `black`;
      each.addEventListener(`mouseover`, function (e) {
        each.firstElementChild.firstElementChild.style.color = `rgb(191, 10, 182)`;
        each.lastElementChild.style.color = `rgb(191, 10, 182)`;
      });
      each.addEventListener(`mouseout`, function () {
        each.firstElementChild.firstElementChild.style.color = `black`;
        each.lastElementChild.style.color = `black`;
      });
    });
    if (location.pathname === `/`) {
      h1.forEach((each) => {
        each.style.color = `black`;
      });
      p.forEach((each) => {
        each.style.color = `black`;
      });
      p2.forEach((each) => {
        each.style.background = `rgb(191,10,182,1)`;
      });
    }
    if (window.innerWidth < 601) {
      return (
        (each.firstElementChild.firstElementChild.innerText = `toggle_on`),
        (each.firstElementChild.firstElementChild.style.color = `black`),
        (view.style.color = `black`)
      );
    }
    each.firstElementChild.firstElementChild.innerText = `toggle_on`;
    each.lastElementChild.innerText = `On`;
  });
});

// script for opening and closing menus on mobiles
view.addEventListener(`click`, () => {
  mobileMenu.style.display = `grid`;
  gsap.from(`.mobileMenu`, {
    duration: 0.6,
    y: 400,
  });
});

mobileClose.addEventListener(`click`, () => {
  mobileMenu.style.display = `none`;
});
