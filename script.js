AOS.init();

// Toggle mobile menu
const toggleBtn = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");
if (toggleBtn && menu) {
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

// Scroll highlight for navigation
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a[href^='#']");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 110) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-400", "underline", "font-semibold");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-blue-400", "underline", "font-semibold");
    }
  });
});

function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const card = carousel.querySelector(".carousel-card");

  if (!carousel || !card) return;

  const style = window.getComputedStyle(card);
  const gap = parseInt(style.marginRight || "0") + parseInt(style.marginLeft || "0");
  const scrollAmount = card.offsetWidth + gap;

  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const text1 = "Hi, I'm Nalendra Fadila Saskara";
  const text2 = "Information System's Student";
  const typedText = document.getElementById("typed-text");
  const subTypedText = document.getElementById("sub-typed-text");
  let index1 = 0;
  let index2 = 0;

  function typeFirstText() {
    if (index1 < text1.length) {
      typedText.textContent += text1.charAt(index1);
      index1++;
      setTimeout(typeFirstText, 100);
    } else {
      // Setelah selesai ketik teks pertama, mulai teks kedua
      setTimeout(typeSecondText, 500);
    }
  }

  function typeSecondText() {
    if (index2 < text2.length) {
      subTypedText.textContent += text2.charAt(index2);
      index2++;
      setTimeout(typeSecondText, 100);
    }
  }

  typeFirstText();

  // AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
});
