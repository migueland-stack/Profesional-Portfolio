window.addEventListener("scroll", function () {
  const navList = document.querySelector("nav ul");
  if (window.scrollY > 0) {
    navList.classList.add("scrolled");
  } else {
    navList.classList.remove("scrolled");
  }
});

// Smooth scrolling
document.querySelectorAll("nav a:not([href^='mailto:'])").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = link.textContent.toLowerCase().replace(" ", "-");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Active class handling based on scroll position
const navLinks = document.querySelectorAll("nav a:not([href^='mailto:'])");
const sections = Array.from(document.querySelectorAll("section")).filter(
  section => section.id
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const navLink = document.querySelector(`nav a[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));
        if (navLink) navLink.classList.add("active");
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach(section => observer.observe(section));