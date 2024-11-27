let elements = document.querySelector(".options");
let selected = false;
elements.addEventListener("click", (e) => {
  if (e.target.id === "option") {
    if (!selected) {
      e.target.classList.toggle("active");
      selected = true;
    } else {
      if (e.target.classList.contains("active")) {
        e.target.classList.remove("active");
        selected = false;
      }
    }
  }
});
