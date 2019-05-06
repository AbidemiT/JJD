(function () {
    let menu = document.querySelector("ul");
    
    let burger = document.querySelector(".burger");
    
    burger.addEventListener("click", (e) => {
        menu.classList.toggle("menu");
        e.preventDefault();
    })
})();