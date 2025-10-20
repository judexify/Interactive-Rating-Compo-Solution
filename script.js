"use strict";
const ratingBtn = document.querySelectorAll(".rating-num");
const submit = document.querySelector(".rating-submit");
const ratingBox = document.querySelector(".interactive-rating-comp");
const successBox = document.querySelector(".interactive-rating-succes");
const ratingNum = document.querySelector(".selected-buttons");
const whatBtn = document.querySelector(".whatBtn");

let currentBtnClicked;
whatBtn.classList.add("hidden");

ratingBtn.forEach((c) => {
  c.addEventListener("click", function (e) {
    currentBtnClicked = e.target.textContent;
    ratingBtn.forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    console.log(`you clicked ${currentBtnClicked}`);
    if (whatBtn.classList.contains("hidden")) {
      whatBtn.classList.remove("hidden");
    }
    whatBtn.textContent = `You Clicked ${currentBtnClicked}`;
  });
});

submit.addEventListener("click", function (d) {
  if (currentBtnClicked) {
    ratingNum.textContent = `You selected ${currentBtnClicked} out of 5`;
    ratingBox.classList.add("hidden");
    successBox.classList.remove("hidden");
  } else {
    alert(`You haven't selected any rating`);
  }
});
