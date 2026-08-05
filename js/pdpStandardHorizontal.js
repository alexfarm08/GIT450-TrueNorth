//***************************************
//variables for button and modal
//***************************************

const openButton = document.querySelector("#open-ar-modal");
const closeButton = document.querySelector("#close-ar-modal");
const modal = document.querySelector("#ar-modal");

//***************************************
//Functions to open modal and close modal
//***************************************

function openModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  closeButton.focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  openButton.focus();
}

//***************************************
//Event listeners
//***************************************

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});