
// material texture buttons
const whiteMarbleTextureButton = document.getElementById('white-marble-texture-button');
const barkTextureButton = document.getElementById('bark-texture-button');
const asphaltTextureButton = document.getElementById('asphalt-texture-button');
const brickTextureButton = document.getElementById('brick-texture-button');
const tilesTextureButton = document.getElementById('tiles-texture-button');
const rocksTextureButton = document.getElementById('rocks-texture-button');
const pebblesTextureButton = document.getElementById('pebbles-texture-button');
const cobblestoneTextureButton = document.getElementById('cobblestone-texture-button');
const dirtTextureButton = document.getElementById('dirt-texture-button');
const wood1TextureButton = document.getElementById('wood-texture-button');
const wood2TextureButton = document.getElementById('wood-2-texture-button');

const loader = new THREE.TextureLoader()

function getWhiteMarbleTexture() {
    const baseTexture = loader.load('../assets/textures/material-textures/white-marble-texture/baseColor.jpg')
    const normalTexture = loader.load('../assets/textures/material-textures/white-marble-texture/normal.jpg')
    const roughTexture = loader.load('../assets/textures/material-textures/white-marble-texture/roughness.jpg')

    const material = new THREE.MeshPhysicalMaterial({
        map: baseTexture,
        side: THREE.DoubleSide
    })

    material.map.name = "WhiteMarble"
    material.normalMap = normalTexture
    material.roughnessMap = roughTexture

    return material;
}

function getAsphaltTexture() {
    const baseTexture = loader.load('../assets/textures/material-textures/asphalt/asphalt_02_diff_4k-min.jpeg')
    const roughTexture = loader.load('../assets/textures/material-textures/asphalt/asphalt_02_rough_4k-min.jpeg')

    const material = new THREE.MeshPhysicalMaterial({
        map: baseTexture,
        side: THREE.DoubleSide
    })

    material.map.name = "Asphalt"
    material.roughnessMap = roughTexture

    return material;
}

function getBrickTexture() {
    const baseTexture = loader.load('../assets/textures/material-textures/brick/red_bricks_04_diff_4k-min.jpg')
    const roughTexture = loader.load('../assets/textures/material-textures/brick/red_bricks_04_rough_4k-min.jpg')

    const material = new THREE.MeshPhysicalMaterial({
        map: baseTexture,
        side: THREE.DoubleSide
    })

    material.map.name = "Brick"
    material.roughnessMap = roughTexture

    return material;
}

function getCobblestoneTexture() {
    const baseTexture = loader.load('../assets/textures/material-textures/cobblestone/cobblestone_floor_08_diff_4k-min.jpg')
    const roughTexture = loader.load('../assets/textures/material-textures/cobblestone/cobblestone_floor_08_rough_4k-min.jpg')

    const material = new THREE.MeshPhysicalMaterial({
        map: baseTexture,
        side: THREE.DoubleSide
    })

    material.map.name = "Cobblestone"
    material.roughnessMap = roughTexture

    return material;
}

function getDirtTexture() {
    const baseTexture = loader.load('../assets/textures/material-textures/dirt/brown_mud_leaves_01_diff_4k-min.jpg')
    const roughTexture = loader.load('../assets/textures/material-textures/dirt/brown_mud_leaves_01_rough_4k-min.jpg')

    const material = new THREE.MeshPhysicalMaterial({
        map: baseTexture,
        side: THREE.DoubleSide
    })

    material.map.name = "Dirt"
    material.roughnessMap = roughTexture

    return material;
}

function getPebblesTexture() {
    const baseTexture = loader.load('../assets/textures/material-textures/pebbles/PebblesSurface_1Albedo.jpg')
    const normalTexture = loader.load('../assets/textures/material-textures/pebbles/PebblesSurface_1NormalMap.jpg')
    const roughTexture = loader.load('../assets/textures/material-textures/pebbles/PebblesSurface_1Roughness.jpg')
    const aoTexture = loader.load('../assets/textures/material-textures/pebbles/PebblesSurface_1AO.jpg')

    const material = new THREE.MeshPhysicalMaterial({
        map: baseTexture,
        side: THREE.DoubleSide
    })

    material.map.name = "Pebbles"
    material.normalMap = normalTexture
    material.roughnessMap = roughTexture
    material.aomap = aoTexture

    return material;
}

function getRocksTexture() {
    const baseTexture = loader.load('../assets/textures/material-textures/rocks/rocks_ground_01_diff_4k-min.jpg')
    const roughTexture = loader.load('../assets/textures/material-textures/rocks/rocks_ground_01_rough_4k-min.jpg')

    const material = new THREE.MeshPhysicalMaterial({
        map: baseTexture,
        side: THREE.DoubleSide
    })

    material.map.name = "Rocks"
    material.roughnessMap = roughTexture
    

    return material;
}

function getWoodTexture() {
    const baseTexture = loader.load('../assets/textures/material-textures/wood/wood_table_001_diff_4k-min.jpg')
    const roughTexture = loader.load('../assets/textures/material-textures/wood/wood_table_001_rough_4k-min.jpg')

    const material = new THREE.MeshPhysicalMaterial({
        map: baseTexture,
        side: THREE.DoubleSide
    })

    material.map.name = "Wood1"
    material.roughnessMap = roughTexture

    return material;
}

function getWood2Texture() {
    const baseTexture = loader.load('../assets/textures/material-textures/wood2/weathered_brown_planks_diff_4k-min.jpg')
    const roughTexture = loader.load('../assets/textures/material-textures/wood2/weathered_brown_planks_disp_4k-min.jpg')

    const material = new THREE.MeshPhysicalMaterial({
        map: baseTexture,
        side: THREE.DoubleSide
    })

    material.map.name = "Wood2"
    material.roughnessMap = roughTexture
    

    return material;
}

function getTilesTexture() {
    const baseTexture = loader.load('../assets/textures/material-textures/tiles/tiled_floor_001_diffuse_4k-min.jpg')
    const roughTexture = loader.load('../assets/textures/material-textures/tiles/tiled_floor_001_displacement_4k-min.jpg')

    const material = new THREE.MeshPhysicalMaterial({
        map: baseTexture,
        side: THREE.DoubleSide
    })

    material.map.name = "Tiles"
    material.roughnessMap = roughTexture
    

    return material;
}

function getBarkTexture() {
    const baseTexture = loader.load('../assets/textures/material-textures/bark/bark_brown_02_diff_4k-min.jpg')
    const roughTexture = loader.load('../assets/textures/material-textures/bark/bark_brown_02_rough_4k-min.jpg')


    const material = new THREE.MeshPhysicalMaterial({
        map: baseTexture,
        side: THREE.DoubleSide
    })

    material.map.name = "Bark"
    material.roughnessMap = roughTexture

    return material;
}



export default function addMaterialButtons() {
    
    asphaltTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = getAsphaltTexture()
    })
    barkTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = getBarkTexture()
    })
    brickTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = getBrickTexture()
    })
    cobblestoneTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = getCobblestoneTexture()
    })
    dirtTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = getDirtTexture()
    })
    pebblesTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = getPebblesTexture()
    })
    rocksTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = getRocksTexture()
    })
    tilesTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = getTilesTexture()
    })
    whiteMarbleTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = getWhiteMarbleTexture()
    })
    wood1TextureButton.addEventListener("click", () => {
        currentObject.children[0].material = getWoodTexture()
    })
    wood2TextureButton.addEventListener("click", () => {
        currentObject.children[0].material = getWood2Texture()
    })
    
}

