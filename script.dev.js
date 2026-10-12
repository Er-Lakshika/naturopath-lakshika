"use strict";

var menuButton = document.querySelector(".menu-toggle");
var nav = document.querySelector(".nav");
menuButton.addEventListener("click", function () {
  nav.classList.toggle("open");
  var isOpen = nav.classList.contains("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});
document.querySelectorAll(".nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
//# sourceMappingURL=script.dev.js.map
