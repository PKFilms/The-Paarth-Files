document.querySelectorAll(".dropdown-btn").forEach(button => {

  button.addEventListener("click", () => {

    const content = button.nextElementSibling;
    const arrow = button.querySelector(".arrow");

    const isOpen = content.style.display === "block";

    content.style.display = isOpen ? "none" : "block";
    arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";

  });

});