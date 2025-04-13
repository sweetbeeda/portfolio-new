const menu = document.querySelector(".hamburger");

menu.addEventListener(`click`, () => {
  mobileMenu = document.getElementById("mobile-menu");
  hero = document.getElementById("hero");
  servies = document.getElementById("servies");
  contact = document.getElementById("contact");
  mobileMenu.style.display = "inline-block";
  hero.style.display = "none";
  servies.style.display = "none";
  contact.style.display = "none";
});
function closeMenu() {
  bileMenu.style.display = "none";
  hero.style.display = "block";
  servies.style.display = "block";
  contact.style.display = "block";
}
