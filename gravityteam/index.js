document.getElementById("btn-toggle").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".mobile-nav-list").classList.toggle("active");
});

//slider
let currentSlideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = totalSlides - 1;
  } else {
    currentSlideIndex = index;
  }

  const offset = -currentSlideIndex * 100;
  document.querySelector(
    ".slider-container"
  ).style.transform = `translateX(${offset}%)`;

  // Update dots
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentSlideIndex);
  });
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
  showSlide(index);
}

// Initialize the slider
showSlide(currentSlideIndex);
