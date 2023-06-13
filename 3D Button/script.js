const centerItem = document.querySelector(".center-item");
const menu = document.querySelector(".menu");

centerItem.addEventListener("mouseover", () =>{
    menu.classList.add("change");
});

menu.addEventListener("mouseout", () =>{
    menu.classList.remove("change");
});