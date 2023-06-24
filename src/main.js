const navToggle = document.querySelector(".mobile-nav-btn");
const primaryNavigation = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");

const subMenuButton = document.querySelectorAll(".nav-drop");
const dropMenu = document.querySelectorAll("header-submenu");

// toggles mobile nav sub-menu
subMenuButton.forEach((element) =>
  element.addEventListener("click", function (e) {
    var submenu = element.nextElementSibling;
    if (submenu.classList.contains("show")) {
      submenu.classList.remove("show");
    } else {
      subMenuButton.forEach((a) =>
        a.nextElementSibling.classList.remove("show")
      );
      submenu.classList.add("show");
    }
  })
);

// toggles mobile nav icon and nav display
navToggle.addEventListener("click", () => {
  if (primaryNavigation.hasAttribute("data-visable")) {
    navToggle.setAttribute("aria-expanded", false);
    document
      .querySelectorAll(".fa-bars")
      .forEach((a) => (a.style.display = "block"));
    document
      .querySelectorAll(".fa-xmark")
      .forEach((a) => (a.style.display = "none"));
  } else {
    navToggle.setAttribute("aria-expanded", true);
    document
      .querySelectorAll(".fa-bars")
      .forEach((a) => (a.style.display = "none"));
    document
      .querySelectorAll(".fa-xmark")
      .forEach((a) => (a.style.display = "block"));
  }

  primaryNavigation.toggleAttribute("data-visable");
  primaryHeader.toggleAttribute("data-overlay");
});
