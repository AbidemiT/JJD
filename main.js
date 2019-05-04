let burger = document.querySelector(".burger");
let cancel = document.querySelector(".cancel");
let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    menu.style.display = "block";
    burger.style.display = "none";
    cancel.style.display = "block";
});
cancel.addEventListener("click", () => {
    menu.style.display = "none";
    burger.style.display = "block";
    cancel.style.display = "none";
});

// window.addEventListener("click", () => {
//     menu.style.display = "none";
// });