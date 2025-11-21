document.addEventListener("DOMContentLoaded", () => {
  // Marker aktiv lenke i menyen
  const path = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === path) {
      link.classList.add("active");
    }
  });

  // Sett år i footer
  const yearSpan = document.querySelector("[data-year]");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
