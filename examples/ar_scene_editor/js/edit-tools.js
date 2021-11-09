function changeEditTool(button, sliders) {
    let activeTool = document.querySelector(".active-edit")
    activeTool.classList.remove("active-edit");
    button.firstElementChild.classList.add("active-edit");
    if (sliders !== "none") {
        sliders.style.display = "grid";
    }
}

function changeMainTool(button, toolbar) {
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

////////////////////// Edit Tool Buttons ///////////////////////////

scaleButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "scale";
    changeEditTool(scaleButton, scaleSliders);
})

rotateButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "rotate";
    changeEditTool(rotateButton, rotateSliders);
})

colorButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "color";
    changeEditTool(colorButton, colorSliders);
})

moveButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "move";
    changeEditTool(moveButton, posSliders);
})

opacityButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "opacity";
    changeEditTool(opacityButton, opacitySlider);
})

transmissionButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "transmission";
    changeEditTool(transmissionButton, transmissionSlider);
})

sheenButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "sheen";
    changeEditTool(sheenButton, sheenSlider);
})

sheenColorButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "sheen-color";
    changeEditTool(sheenColorButton, sheenColorSliders);
})

sheenRoughnessButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "sheen-roughness";
    changeEditTool(sheenRoughnessButton, sheenRoughnessSlider);
})

roughnessButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "roughness";
    changeEditTool(roughnessButton, roughnessSlider);
})

metalnessButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "metalness";
    changeEditTool(metalnessButton, metalnessSlider);
})

reflectionButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "reflection";
    changeEditTool(reflectionButton, reflectionSlider);
})

clearcoatButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "clearcoat";
    changeEditTool(clearcoatButton, clearcoatSlider);
})

clearcoatRoughnessButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "clearcoat-roughness";
    changeEditTool(clearcoatRoughnessButton, clearcoatRoughnessSlider);
})

iorButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "ior";
    changeEditTool(iorButton, iorSlider);
})

thicknessButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "thickness";
    changeEditTool(thicknessButton, thicknessSlider);
})

emissiveIntensityButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "emissive-intensity";
    changeEditTool(emissiveIntensityButton, emissiveIntensitySlider);
})

emissiveColorButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    currentEditTool = "emissive-color";
    changeEditTool(emissiveColorButton, emissiveColorSliders);
})

wireframeButton.addEventListener("click", () => {
    currentObject.children[0].material.wireframe = !currentObject.children[0].material.wireframe;
})

textureButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    changeMainTool("none", textureToolbar);
})

materialsButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    changeMainTool("none", materialsToolbar)
})

patternTextureButton.addEventListener("click", () => {
    removeSliders(currentEditTool);
    changeMainTool("none", patternTexturesToolbar)
})
