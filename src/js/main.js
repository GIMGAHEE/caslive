document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  const btn = document.getElementById("themeToggle");
  btn?.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    btn.textContent = document.documentElement.classList.contains("dark") ? "🌞" : "🌙";
  });
});
