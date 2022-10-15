const menus = document.querySelector(`.menus`);
const menusCon = document.querySelectorAll(`.menusCon`);
const menuOpener = document.querySelector(`#menuOpener`);
const body = document.querySelector(`.body`);
const menuIllus = document.querySelectorAll(`.menuIllus`);
const lightToggle = document.querySelectorAll(`#lightToggle`);
const toggleValue = document.querySelector(`#toggleValue`);
const mobile = document.querySelector(`.mobile`);
const mobileMenu = document.querySelector(`.mobileMenu`);
const mobileClose = document.querySelector(`#mobileClose`);
const view = document.querySelector(`#view`);
const h1 = document.querySelectorAll(`.h1`);
const p = document.querySelectorAll(`.p`);
const p2 = document.querySelectorAll(`.p2`);
const profileImg = document.querySelector(`.profileImg`);
const mobileProfile = document.querySelector(`.mobileProfile`);

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
  if (location.pathname === `/index.html`) {
    body.style.background = `white`;
    mobile.style.background = `white`;
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
      return (each.firstElementChild.innerText = `toggle_on`);
    }
    each.firstElementChild.innerText = `toggle_on`;
    each.lastElementChild.innerText = `On`;
  });
} else if (localStorage.getItem(`mode`) === `dark`) {
  if (location.pathname === `/index.html`) {
    body.style.background = `rgb(0,0,0,0.8)`;
    mobile.style.background = `rgb(0,0,0,0.8)`;
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
        (each.firstElementChild.innerText = `toggle_off`),
        (each.lastElementChild.innerText = `Off`)
      );
    }
    return (each.firstElementChild.innerText = `toggle_off`);
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

// script for changing menus color on hover on desktops
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

// script for toggling light and dark mode on all devices (desktop, ipad and mobiles)
lightToggle.forEach((each) => {
  each.addEventListener(`click`, () => {
    if (each.firstElementChild.innerText === `toggle_on`) {
      localStorage.setItem(`mode`, `dark`);
      if (location.pathname === `/index.html`) {
        body.style.background = `rgb(0,0,0,0.8)`;
        mobile.style.background = `rgb(0,0,0,0.8)`;
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
          (each.firstElementChild.innerText = `toggle_off`),
          (each.lastElementChild.innerText = `Off`)
        );
      }
      return (each.firstElementChild.innerText = `toggle_off`);
    }
    localStorage.setItem(`mode`, `light`);
    if (location.pathname === `/index.html`) {
      body.style.background = `white`;
      mobile.style.background = `white`;
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
      return (each.firstElementChild.innerText = `toggle_on`);
    }
    each.firstElementChild.innerText = `toggle_on`;
    each.lastElementChild.innerText = `On`;
  });
});

// script for opening and closing menus on mobiles
view.addEventListener(`click`, () => {
  mobileMenu.style.display = `grid`;
});

mobileClose.addEventListener(`click`, () => {
  mobileMenu.style.display = `none`;
});
