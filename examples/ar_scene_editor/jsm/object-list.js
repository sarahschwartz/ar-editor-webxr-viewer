export function newObjectDiv(object, geometry, id) {
    let name = object.name ? object.name : `${id}. ${geometry}`;
    let div = document.createElement('div');
    div.classList.add('object-button')
    div.id = id;
    div.innerHTML = name;
    return div;
}