const menuBtn = document.getElementById("menu-btn");
// const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("nav");



menuBtn.addEventListener("click", () => {
  nav.classList.remove('hidden')
  menuBtn.classList.remove("hidden");

});

closeBtn.addEventListener("click", () => {
  nav.classList.add("hidden");
  menuBtn.classList.remove("hidden");
  
});
