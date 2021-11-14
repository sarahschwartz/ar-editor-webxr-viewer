
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

const baseTextureAsphalt = loader.load('../assets/textures/material-textures/asphalt/asphalt_02_diff_4k-min.jpeg')
const roughTextureAsphalt = loader.load('../assets/textures/material-textures/asphalt/asphalt_02_rough_4k-min.jpeg')

const baseTextureMarble = loader.load('../assets/textures/material-textures/white-marble-texture/baseColor.jpg')
const normalTextureMarble = loader.load('../assets/textures/material-textures/white-marble-texture/normal.jpg')
const roughTextureMarble = loader.load('../assets/textures/material-textures/white-marble-texture/roughness.jpg')

const baseTextureBrick = loader.load('../assets/textures/material-textures/brick/red_bricks_04_diff_4k-min.jpg')
const roughTextureBrick = loader.load('../assets/textures/material-textures/brick/red_bricks_04_rough_4k-min.jpg')

const baseTextureCobblestone = loader.load('../assets/textures/material-textures/cobblestone/cobblestone_floor_08_diff_4k-min.jpg')
const roughTextureCobblestone = loader.load('../assets/textures/material-textures/cobblestone/cobblestone_floor_08_rough_4k-min.jpg')

const baseTextureDirt = loader.load('../assets/textures/material-textures/dirt/brown_mud_leaves_01_diff_4k-min.jpg')
const roughTextureDirt = loader.load('../assets/textures/material-textures/dirt/brown_mud_leaves_01_rough_4k-min.jpg')

const baseTexturePebbles = loader.load('../assets/textures/material-textures/pebbles/PebblesSurface_1Albedo.jpeg')
const normalTexturePebbles = loader.load('../assets/textures/material-textures/pebbles/PebblesSurface_1NormalMap.jpeg')
const roughTexturePebbles = loader.load('../assets/textures/material-textures/pebbles/PebblesSurface_1Roughness.jpeg')
const aoTexturePebbles = loader.load('../assets/textures/material-textures/pebbles/PebblesSurface_1AO.jpeg')

const baseTextureRocks = loader.load('../assets/textures/material-textures/rocks/rocks_ground_01_diff_4k-min.jpg')
const roughTextureRocks = loader.load('../assets/textures/material-textures/rocks/rocks_ground_01_rough_4k-min.jpg')

const baseTextureWood1 = loader.load('../assets/textures/material-textures/wood/wood_table_001_diff_4k-min.jpg')
const roughTextureWood1 = loader.load('../assets/textures/material-textures/wood/wood_table_001_rough_4k-min.jpg')

const baseTextureWood2 = loader.load('../assets/textures/material-textures/wood2/weathered_brown_planks_diff_4k-min.jpg')
const roughTextureWood2 = loader.load('../assets/textures/material-textures/wood2/weathered_brown_planks_disp_4k-min.jpg')

const baseTextureBark = loader.load('../assets/textures/material-textures/bark/bark_brown_02_diff_4k-min.jpg')
const roughTextureBark = loader.load('../assets/textures/material-textures/bark/bark_brown_02_rough_4k-min.jpg')

const baseTextureTiles = loader.load('../assets/textures/material-textures/tiles/tiled_floor_001_diffuse_4k-min.jpg')
const roughTextureTiles = loader.load('../assets/textures/material-textures/tiles/tiled_floor_001_displacement_4k-min.jpg')



function getWhiteMarbleTexture() {
    const material = new THREE.MeshPhysicalMaterial({
        map: baseTextureMarble,
        side: THREE.DoubleSide
    })

    material.map.name = "WhiteMarble"
    material.normalMap = normalTextureMarble
    material.roughnessMap = roughTextureMarble

    return material;
}

function getAsphaltTexture() {
    const material = new THREE.MeshPhysicalMaterial({
        map: baseTextureAsphalt,
        side: THREE.DoubleSide
    })

    material.map.name = "Asphalt"
    material.roughnessMap = roughTextureAsphalt

    return material;
}

function getBrickTexture() {
    const material = new THREE.MeshPhysicalMaterial({
        map: baseTextureBrick,
        side: THREE.DoubleSide
    })

    material.map.name = "Brick"
    material.roughnessMap = roughTextureBrick

    return material;
}

function getCobblestoneTexture() {
    const material = new THREE.MeshPhysicalMaterial({
        map: baseTextureCobblestone,
        side: THREE.DoubleSide
    })

    material.map.name = "Cobblestone"
    material.roughnessMap = roughTextureCobblestone

    return material;
}

function getDirtTexture() {
    const material = new THREE.MeshPhysicalMaterial({
        map: baseTextureDirt,
        side: THREE.DoubleSide
    })

    material.map.name = "Dirt"
    material.roughnessMap = roughTextureDirt

    return material;
}

function getPebblesTexture() {
    const material = new THREE.MeshPhysicalMaterial({
        map: baseTexturePebbles,
        side: THREE.DoubleSide
    })

    material.map.name = "Pebbles"
    material.normalMap = normalTexturePebbles
    material.roughnessMap = roughTexturePebbles
    material.aomap = aoTexturePebbles

    return material;
}

function getRocksTexture() {
    const material = new THREE.MeshPhysicalMaterial({
        map: baseTextureRocks,
        side: THREE.DoubleSide
    })

    material.map.name = "Rocks"
    material.roughnessMap = roughTextureRocks
    

    return material;
}

function getWoodTexture() {
    const material = new THREE.MeshPhysicalMaterial({
        map: baseTextureWood1,
        side: THREE.DoubleSide
    })

    material.map.name = "Wood1"
    material.roughnessMap = roughTextureWood1

    return material;
}

function getWood2Texture() {
    const material = new THREE.MeshPhysicalMaterial({
        map: baseTextureWood2,
        side: THREE.DoubleSide
    })

    material.map.name = "Wood2"
    material.roughnessMap = roughTextureWood2
    

    return material;
}

function getTilesTexture() {
    const material = new THREE.MeshPhysicalMaterial({
        map: baseTextureTiles,
        side: THREE.DoubleSide
    })

    material.map.name = "Tiles"
    material.roughnessMap = roughTextureTiles
    

    return material;
}

function getBarkTexture() {
    const material = new THREE.MeshPhysicalMaterial({
        map: baseTextureBark,
        side: THREE.DoubleSide
    })

    material.map.name = "Bark"
    material.roughnessMap = roughTextureBark

    return material;
}



export default function addMaterialButtons() {
    
    asphaltTextureButton.addEventListener("click", () => {
        currentObject.children[0].material.dispose()
        currentObject.children[0].material = getAsphaltTexture()
    })
    barkTextureButton.addEventListener("click", () => {
        currentObject.children[0].material.dispose();
        currentObject.children[0].material = getBarkTexture()
    })
    brickTextureButton.addEventListener("click", () => {
        currentObject.children[0].material.dispose();
        currentObject.children[0].material = getBrickTexture()
    })
    cobblestoneTextureButton.addEventListener("click", () => {
        currentObject.children[0].material.dispose();
        currentObject.children[0].material = getCobblestoneTexture()
    })
    dirtTextureButton.addEventListener("click", () => {
        currentObject.children[0].material.dispose();
        currentObject.children[0].material = getDirtTexture()
    })
    pebblesTextureButton.addEventListener("click", () => {
        currentObject.children[0].material.dispose();
        currentObject.children[0].material = getPebblesTexture()
    })
    rocksTextureButton.addEventListener("click", () => {
        currentObject.children[0].material.dispose();
        currentObject.children[0].material = getRocksTexture()
    })
    tilesTextureButton.addEventListener("click", () => {
        currentObject.children[0].material.dispose();
        currentObject.children[0].material = getTilesTexture()
    })
    whiteMarbleTextureButton.addEventListener("click", () => {
        currentObject.children[0].material.dispose();
        currentObject.children[0].material = getWhiteMarbleTexture()
    })
    wood1TextureButton.addEventListener("click", () => {
        currentObject.children[0].material.dispose();
        currentObject.children[0].material = getWoodTexture()
    })
    wood2TextureButton.addEventListener("click", () => {
        currentObject.children[0].material.dispose();
        currentObject.children[0].material = getWood2Texture()
    })
    
}

