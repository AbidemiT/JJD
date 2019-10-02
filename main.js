// Menu functionality

(() => {
    let menu = document.querySelector(".web");  
    let burger = document.querySelector(".menu");
    let anc = document.querySelectorAll(".link");
    let link = [...anc]    
    
    let li = document.createElement('li');

    burger.addEventListener("click", (e) => {
        li.innerHTML = "X";
        menu.prepend(li);
        menu.style.display = "block";
        menu.classList.add("sidebar");
        e.preventDefault();
    })

    li.addEventListener("click", (e) => {
        menu.style.display = "none";
        menu.classList.remove("sidebar");
    })

    link.forEach(a => {
        a.addEventListener('click', (e) => {
            console.log(a)
            
            menu.style.display = "none";
            menu.classList.remove("sidebar");
        })
    })
})();
