function editTools(engine, position, scale, color, debug) {

    let evCache = new Array();
    let prevDiff = -1;

    let isScaling = false;
    let currentGeometry;

    const touchSpace = document.getElementById("touch-space");
    const scaleButton = document.getElementById('scale-button');
    const rotateButton = document.getElementById('rotate-button');
    const colorButton = document.getElementById('color-button');
    const moveButton = document.getElementById('move-button');

    touchSpace.onpointerdown = pointerdown_handler;
    touchSpace.onpointermove = pointermove_handler;

    // Use same handler for pointer{up,cancel,out,leave} events since
    // the semantics for these events - in this app - are the same.
    touchSpace.onpointerup = pointerup_handler;
    touchSpace.onpointercancel = pointerup_handler;
    touchSpace.onpointerout = pointerup_handler;
    touchSpace.onpointerleave = pointerup_handler;
    
    function pointerdown_handler(ev) {
        evCache.push(ev);
    }
    
    function pointermove_handler(ev) {
        // Find this event in the cache and update its record with this event
        for (let i = 0; i < evCache.length; i++) {
            if (ev.pointerId == evCache[i].pointerId) {
                evCache[i] = ev;
            break;
            }
        }
        
        // If two pointers are down, check for pinch gestures
        if (evCache.length == 2 && isScaling) {
            // Calculate the distance between the two pointers
            let curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);
            debug.innerHTML = evCache[0].clientX
            debug.innerHTML += " AND " + evCache[1].clientX
            debug.innerHTML += " CUR: " + curDiff
            debug.innerHTML += " PREV: " + prevDiff
        
            // if (prevDiff > 0) {
            // if (curDiff > prevDiff) {
            //     // The distance between the two pointers has increased
            //     // Scale up
            // }
            // if (curDiff < prevDiff) {
            //     // The distance between the two pointers has decreased
            //     // Scale down
            // }
            // }
        
            // Cache the distance for the next move event 
            prevDiff = curDiff;
        }
    }
    
    function pointerup_handler(ev) {
        remove_event(ev);
        // If the number of pointers down is less than two then reset diff tracker
        if (evCache.length < 2) prevDiff = -1;
    }
    
    function remove_event(ev) {
    // Remove this event from the target's cache
    for (let i = 0; i < evCache.length; i++) {
        if (evCache[i].pointerId == ev.pointerId) {
        evCache.splice(i, 1);
        break;
        }
    }
    }


    const scaleObject = () => {
        isScaling = true;
        let last = engine._root.children.length - 1;
        switch (engine._root.children[last].geometry.type) {
            case "CylinderGeometry":
                currentGeometry = "Cylinder";
                debug.innerHTML = "Cylinder";
                debug.innerHTML += " Radius Top: " + engine._root.children[last].geometry.parameters.radiusTop;
                debug.innerHTML += " Radius Bottom: " + engine._root.children[last].geometry.parameters.radiusBottom;
                debug.innerHTML += " Height: " + engine._root.children[last].geometry.parameters.height;
                break;
            case "BoxBufferGeometry":
                currentGeometry = "Box";
                debug.innerHTML = "Box";
                debug.innerHTML += " Scale: " + JSON.stringify(engine._root.children[last].scale);
                debug.innerHTML += " Width: " + engine._root.children[last].geometry.parameters.width;
                debug.innerHTML += " Height: " + engine._root.children[last].geometry.parameters.height;
                debug.innerHTML += " Depth: " + engine._root.children[last].geometry.parameters.depth;
                break;
            case "SphereBufferGeometry":
                currentGeometry = "Sphere";
                debug.innerHTML = "Sphere";
                debug.innerHTML += " Radius: " + engine._root.children[last].geometry.parameters.radius;
                break;
            case "PlaneGeometry":
                currentGeometry = "Plane";
                debug.innerHTML = "Plane";
                debug.innerHTML += " Width: " + engine._root.children[last].geometry.parameters.width;
                debug.innerHTML += " Height: " + engine._root.children[last].geometry.parameters.height;
                break;
            default:
                currentGeometry = null;
                debug.innerHTML = "No Geometry Case";
        }
        debug.innerHTML += "<br>PARAMS: " + JSON.stringify(engine._root.children[last].geometry.parameters);
    }

    const rotateObject = () => {
        let last = engine._root.children.length - 1;
        debug.innerHTML = JSON.stringify(engine._root.children[last].rotation);
    }          


    const colorObject = () => {
        let last = engine._root.children.length - 1;
        debug.innerHTML = "Red: " + JSON.stringify(engine._root.children[last].material.color.r);
        debug.innerHTML += " Green: " + JSON.stringify(engine._root.children[last].material.color.g);
        debug.innerHTML += " Blue: " + JSON.stringify(engine._root.children[last].material.color.b);
    }

    const moveObject = () => {
        let last = engine._root.children.length - 1;
        debug.innerHTML = JSON.stringify(engine._root.children[last].position);
    }


    scaleButton.addEventListener("click", scaleObject)
    rotateButton.addEventListener("click", rotateObject)
    colorButton.addEventListener("click", colorObject)
    moveButton.addEventListener("click", moveObject)

    
}

export { editTools };