const togglerMenu = document.querySelector(".toggler");
const mobileMenu = document.querySelector(".main__navigation");
const closeMenu = document.querySelector(".navbar__toggler--close");

togglerMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("visible");
});
