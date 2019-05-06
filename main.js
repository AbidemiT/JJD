
let cancel = document.querySelector(".cancel");
let nav = document.querySelector("nav");


(function () {
    let menu = document.querySelector("ul");
    let burger = document.querySelector(".burger");
    
    burger.addEventListener("click", (e) => {
        menu.classList.toggle("menu");
        e.preventDefault();
    })
})();