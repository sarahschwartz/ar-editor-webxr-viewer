const loader = new THREE.TextureLoader()

// pattern texture buttons
const texture1Button = document.getElementById('texture1-button');
const texture2Button = document.getElementById('texture2-button');
const texture3Button = document.getElementById('texture3-button');
const texture4Button = document.getElementById('texture4-button');
const texture5Button = document.getElementById('texture5-button');
const texture6Button = document.getElementById('texture6-button');
const texture7Button = document.getElementById('texture7-button');
const texture8Button = document.getElementById('texture8-button');
const texture9Button = document.getElementById('texture9-button');
const texture10Button = document.getElementById('texture10-button');
const texture11Button = document.getElementById('texture11-button');
const texture12Button = document.getElementById('texture12-button');
const texture13Button = document.getElementById('texture13-button');
const texture14Button = document.getElementById('texture14-button');
const texture15Button = document.getElementById('texture15-button');
const texture16Button = document.getElementById('texture16-button');
const texture17Button = document.getElementById('texture17-button');
const texture18Button = document.getElementById('texture18-button');
const texture19Button = document.getElementById('texture19-button');
const texture20Button = document.getElementById('texture20-button');
const texture21Button = document.getElementById('texture21-button');
const texture22Button = document.getElementById('texture22-button');
const texture23Button = document.getElementById('texture23-button');

const loadTexture = (path, materialName) => {
    const texture = loader.load([path])
    const material = new THREE.MeshPhysicalMaterial({
        map: texture,
        side: THREE.DoubleSide
    })
    material.map.name = materialName
    return material;
}

export default function addPatternButtons() {
    
    texture1Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_1.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_1")
    })

    texture2Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_2.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_2")
    })

    texture3Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_3.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_3")
    })

    texture4Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_4.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_4")
    })

    texture5Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_5.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_5")
    })

    texture6Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_6.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_6")
    })

    texture7Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_7.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_7")
    })

    texture8Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_8.png'
        currentObject.children[0].material = loadTexture(path, "Texture_8")
    })

    texture9Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_9.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_9")
    })

    texture10Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_10.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_10")
    })

    texture11Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_11.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_11")
    })

    texture12Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_12.png'
        currentObject.children[0].material = loadTexture(path, "Texture_12")
    })

    texture13Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_13.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_13")
    })

    texture14Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_14.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_14")
    })

    texture15Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_15.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_15")
    })

    texture16Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_16.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_16")
    })

    texture17Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_17.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_17")
    })

    texture18Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_18.jpeg'
        currentObject.children[0].material = loadTexture(path, "Texture_18")
    })

    texture19Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_19.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_19")
    })

    texture20Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_20.png'
        currentObject.children[0].material = loadTexture(path, "Texture_20")
    })

    texture21Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_21.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_21")
    })

    texture22Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_22.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_22")
    })

    texture23Button.addEventListener("click", () => {
        let path = '../assets/textures/color-textures/Texture_23.jpg'
        currentObject.children[0].material = loadTexture(path, "Texture_23")
    })

  }