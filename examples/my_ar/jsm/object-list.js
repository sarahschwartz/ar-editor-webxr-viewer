export function newObjectDiv(object, geometry) {
    let id = object.id - 13;
    let name = object.name ? object.name : `${id}. ${geometry}`;
    let div = document.createElement('div');
    div.id = id;
    div.innerHTML = name;
    return div;
}