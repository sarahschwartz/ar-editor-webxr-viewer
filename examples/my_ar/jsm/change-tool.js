export default function changeTool() {
    let activeToolbar = document.querySelector(".active-toolbar")
    activeToolbar.classList.remove("active-toolbar");
    activeToolbar.style.display = "none";

    let activeElement = document.querySelector(".active")
    activeElement.classList.remove("active");
}