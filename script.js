const burger = document.querySelector(".burger");
const navbar = document.querySelector(".nav-bar");
const logo = document.querySelector(".logo")
const line = document.querySelector(".line-m")
const container = document.querySelector(".container-head")
const navItem = document.querySelector(".nav-item")

burger.addEventListener("click", ()=>{
    navbar.classList.toggle("h-nav");
    logo.classList.toggle("d-none");
    line.classList.toggle("d-none")
    navItem.classList.toggle("d-none")
    container.classList.toggle("blur")

})