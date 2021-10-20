function changeLeftTool(button, toolbar) {
    let activeToolbar = document.querySelector(".active-toolbar")
    activeToolbar.classList.remove("active-toolbar");
    activeToolbar.style.display = "none";

    let activeElement = document.querySelector(".active")
    activeElement.classList.remove("active");

    button.classList.add("active");
    toolbar.classList.add("active-toolbar");
    toolbar.style.display = "flex";
}

function changeEditTool(button, sliders) {
    let activeTool = document.querySelector(".active-edit")
    activeTool.classList.remove("active-edit");
    button.classList.add("active-edit");
    sliders.style.display = "grid";
}

export { changeLeftTool, changeEditTool }