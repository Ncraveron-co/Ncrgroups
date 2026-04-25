const menuItems = document.querySelectorAll("nav ul li");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    item.classList.add("active");
  });
});
