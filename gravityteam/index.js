const btn = document.getElementById("btn-toggle");

btn.addEventListener("click", myFunction);

function myFunction() {
  document.querySelector(".mobile-nav-list").style.display = "block";
  // element.classList.toggle("tabs-list");
  // element.style.display = "block";
}
