// Menu functionality

(() => {
    let menu = document.querySelector("ul");  
    let burger = document.querySelector(".menu");
    let anc = document.querySelectorAll(".link");
    let link = [...anc]    
    
    let li = document.createElement('li');

    burger.addEventListener("click", (e) => {
        li.innerHTML = "X";
        menu.prepend(li);
        menu.style.display = "block";
        menu.classList.toggle("sidebar");
        e.preventDefault();
    })

    li.addEventListener("click", (e) => {
        menu.style.display = "none";
        menu.classList.toggle("sidebar");
    })

    link.forEach(a => {
        a.addEventListener('click', (e) => {
            menu.style.display = "none";
            menu.classList.remove("sidebar");
        })
    })
})();
