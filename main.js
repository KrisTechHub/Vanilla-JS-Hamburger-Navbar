// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const showToggle = document.querySelector(".showToggle");
const links = document.querySelector(".links");
const link = document.querySelectorAll(".link");
const hideToggle = document.querySelector(".hideToggle");

showToggle.addEventListener("click", () => {
    links.style.display = "block";
    showToggle.style.display = "none";
    hideToggle.style.display = "block";
});

hideToggle.addEventListener("click", () => {
    links.style.display = "none";
    showToggle.style.display = "block";
    hideToggle.style.display = "none";
})
