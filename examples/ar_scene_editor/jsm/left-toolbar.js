function addLeftToolbar() {

    let isDeleting = false;

    // Left Toolbar
    const endButton = document.getElementById('end-session');
    const addButton = document.getElementById('add-button');
    const editButton = document.getElementById('edit-button');
    const deleteButton = document.getElementById('delete-button');
    
    // Bottom Toolbar
    const toolbarInstructions = document.getElementById('toolbar-instructions');
    const addToolbar = document.getElementById('add-toolbar');
    const editToolbar = document.getElementById('edit-toolbar');
    
    // End session
    const endSession = () => {
        window.history.back();
    }
    endButton.addEventListener("click", endSession)
    
    // Add button
    const addObject = () => {
        if(!isDeleting)
        {
            let activeToolbar = document.querySelector(".active-toolbar")
            activeToolbar.classList.remove("active-toolbar");
            activeToolbar.style.display = "none";
        } else {
            isDeleting = false;
        }
        let activeElement = document.querySelector(".active")
        activeElement.classList.remove("active");
        addButton.classList.add("active");
        addToolbar.classList.add("active-toolbar");
        addToolbar.style.display = "flex";
        toolbarInstructions.innerHTML = "Tap an object to add it to the scene";
    }
    addButton.addEventListener("click", addObject)
    
    // Edit button
    const editObject = () => {
        if(!isDeleting)
        {
            let activeToolbar = document.querySelector(".active-toolbar")
            activeToolbar.classList.remove("active-toolbar");
            activeToolbar.style.display = "none";
        } else {
            isDeleting = false;
        }
        let activeElement = document.querySelector(".active")
        activeElement.classList.remove("active");
        editButton.classList.add("active");
        editToolbar.classList.add("active-toolbar");
        editToolbar.style.display = "flex";
        toolbarInstructions.innerHTML = "Tap to select an edit tool";
    }
    editButton.addEventListener("click", editObject)
    
    // Delete button
    const deleteObject = () => {
        let activeElement = document.querySelector(".active")
        let activeToolbar = document.querySelector(".active-toolbar")
        activeElement.classList.remove("active");
        activeToolbar.classList.remove("active-toolbar");
        activeToolbar.style.display = "none";
        deleteButton.classList.add("active");
        isDeleting = true;
        toolbarInstructions.innerHTML = "Tap an object to delete it";
    }
    deleteButton.addEventListener("click", deleteObject);
    
}

export { addLeftToolbar }