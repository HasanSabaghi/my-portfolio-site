document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-dark");
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // فقط یک‌بار اجرا بشه
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
});


  window.addEventListener("scroll", () => {
    const indicator = document.querySelector(".scroll-indicator");
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    indicator.style.width = scrollPercent + "%";
  });

  const btn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    toggleBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });


 
  


