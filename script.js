"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// the below commented code is refactored
/*
for (let i = 0; i < btnsOpenModal.length; i++)
  //   console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // modal.style.display = 'block';
  });
*/

/*
btnCloseModal.addEventListener("click", () => {
  console.log("x button clicked");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
*/
/*
overlay.addEventListener("click", () => {
  console.log("clicked overlay");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
*/
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
// we can add curly braces{} here for for loop

// Handling an "Esc" Keypress Event
// keyboard events are global events

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  /*
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
  */

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
