const hamburger = document.querySelector(".hamburger");
const actionItems = document.querySelector(".action-items");

const registerBtn = document.querySelector(".rgs");
const loginBtn = document.querySelector(".lgn");

/// შემომაქვს html ელემენტები და ვუტოლებ ცვლადებს
const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");
const closeRgs = document.querySelector(".close-rgs");
const closeLgn = document.querySelector(".close-lgn");

// Hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  actionItems.classList.toggle("active");
});

// ნავიგაციაში register -  ზე  დაჭერის შემდეგ ვაჩენ რეგისტრაციის ფორმას registerForm
// და ვაქრობ login - ფორმას.
registerBtn.addEventListener("click", (e) => {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
});
// ნავიგაციაში login -  ზე  დაჭერის შემდეგ ვაჩენ რეგისტრაციის ფორმას registerForm
// და ვაქრობ registe - ფორმას.
loginBtn.addEventListener("click", (e) => {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

// ფორმაში x - ღილაკზე დაჭერისას ვაქრობ რეგისტრაციის ფორმას
closeRgs.addEventListener("click", () => {
  registerForm.style.display = "none";
});
// ფორმაში x - ღილაკზე დაჭერისას ვაქრობ ლოგინის ფორმას
closeLgn.addEventListener("click", () => {
  loginForm.style.display = "none";
});
