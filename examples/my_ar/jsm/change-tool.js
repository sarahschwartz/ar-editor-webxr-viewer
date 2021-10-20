export default function changeTool(button, toolbar) {
    let activeToolbar = document.querySelector(".active-toolbar")
    activeToolbar.classList.remove("active-toolbar");
    activeToolbar.style.display = "none";

    let activeElement = document.querySelector(".active")
    activeElement.classList.remove("active");

    button.classList.add("active");
    toolbar.classList.add("active-toolbar");
    toolbar.style.display = "flex";
}