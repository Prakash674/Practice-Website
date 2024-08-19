const btn = document.getElementById("btn-toggle");

btn.addEventListener("click", myFunction);

function myFunction() {
  const element = document.querySelector(".tabs-list");
  element.classList.toggle("tabs-list");
}
