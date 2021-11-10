navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
    if (supported) {
        document.getElementById('start').style.display = "flex"
        document.getElementById('noXR').style.display = "none"
    }
    });