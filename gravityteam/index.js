document.getElementById("btn-toggle").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".mobile-nav-list").classList.toggle("active");
});
