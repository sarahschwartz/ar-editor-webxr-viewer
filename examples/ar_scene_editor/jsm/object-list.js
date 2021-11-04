export function newObjectDiv(geometry, id) {
    let name = `${id}. ${geometry}`;
    let div = document.createElement('div');
    div.classList.add('object-button')
    div.id = id;
    div.innerHTML = name;
    return div;
}

export function newDeleteButton(id) {
    let button = document.createElement('button')
    button.classList.add('delete-button')
    button.innerText = "X"
    button.id = id
    return button
}