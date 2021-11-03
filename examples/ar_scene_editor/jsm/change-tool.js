export default function changeMainTool(button, toolbar) {
    if (document.querySelector(".active-toolbar")) {
        let activeToolbar = document.querySelector(".active-toolbar")
        activeToolbar.classList.remove("active-toolbar");
        activeToolbar.style.display = "none";
    }
    if (document.querySelector(".active")) {
        let activeElement = document.querySelector(".active")
        activeElement.classList.remove("active");
    }

    if (button !== "none") {
        button.classList.add("active");
    }
    toolbar.classList.add("active-toolbar");
    toolbar.style.display = "flex";
}

// function changeEditTool(button, sliders) {
//     let activeTool = document.querySelector(".active-edit")
//     activeTool.classList.remove("active-edit");
//     button.classList.add("active-edit");
//     if (sliders !== "none") {
//         sliders.style.display = "grid";
//     }
// }

// export { changeMainTool, changeEditTool }