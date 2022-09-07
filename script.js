document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});
