/* ACCORDION */
const faqs = document.querySelectorAll('.faq-item');
  faqs.forEach(item => {
    item.addEventListener('click', () => {
      faqs.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
 });

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-custom");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const thumbnails = document.querySelectorAll('.thumbnails img');

function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  thumbnails.forEach(t => t.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');

  if (thumbnails[index - 1]) {
    thumbnails[index - 1].classList.add('active');
  }
}

function changeSlide(dir) {
  currentIndex += dir;
  if (currentIndex < 0) currentIndex = slides.length - 1;
  if (currentIndex >= slides.length) currentIndex = 0;
  showSlide(currentIndex);
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

function toggleSub(type) {
  const singleBox = document.getElementById('singleBox');
  const doubleBox = document.getElementById('doubleBox');

  const singleContent = singleBox.querySelector('.sub-content');
  const doubleContent = doubleBox.querySelector('.sub-content');

  singleBox.classList.remove('active');
  doubleBox.classList.remove('active');

  singleContent.classList.add('d-none');
  doubleContent.classList.add('d-none');

  if (type === 'single') {
    singleBox.classList.add('active');
    singleContent.classList.remove('d-none');
  } else {
    doubleBox.classList.add('active');
    doubleContent.classList.remove('d-none');
  }
}

const shopToggle = document.getElementById("shopToggle");
const shopItem = document.getElementById("shopItem");

shopToggle.addEventListener("click", function (e) {
  e.preventDefault();
  shopItem.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!shopItem.contains(e.target)) {
    shopItem.classList.remove("active");
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

