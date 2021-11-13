
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


const materialTextures = {
    loader: new THREE.TextureLoader(),
    getWhiteMarbleTexture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/white-marble-texture/baseColor.jpg')
        const normalTexture = this.loader.load('../assets/textures/material-textures/white-marble-texture/normal.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/white-marble-texture/roughness.jpg')
    
        const material = new THREE.MeshPhysicalMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "WhiteMarble"
        material.normalMap = normalTexture
        material.roughnessMap = roughTexture
    
        return material;
    },
    getAsphaltTexture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/asphalt/asphalt_02_diff_4k.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/asphalt/asphalt_02_rough_4k.jpg')
    
        const material = new THREE.MeshPhysicalMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "Asphalt"
        material.roughnessMap = roughTexture
    
        return material;
    },
    getBrickTexture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/brick/red_bricks_04_diff_4k.jpg')
        const dispTexture = this.loader.load('../assets/textures/material-textures/brick/red_bricks_04_disp_4k.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/brick/red_bricks_04_rough_4k.jpg')
    
        const material = new THREE.MeshPhysicalMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "Brick"
        // material.displacementMap = dispTexture
        material.roughnessMap = roughTexture
    
        return material;
    },
    getCobblestoneTexture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/cobblestone/cobblestone_floor_08_diff_4k.jpg')
        const dispTexture = this.loader.load('../assets/textures/material-textures/cobblestone/cobblestone_floor_08_disp_4k.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/cobblestone/cobblestone_floor_08_rough_4k.jpg')
    
        const material = new THREE.MeshPhysicalMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "Cobblestone"
        // material.displacementMap = dispTexture
        material.roughnessMap = roughTexture
    
        return material;
    },
    getDirtTexture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/dirt/brown_mud_leaves_01_diff_4k.jpg')
        const dispTexture = this.loader.load('../assets/textures/material-textures/dirt/brown_mud_leaves_01_disp_4k.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/dirt/brown_mud_leaves_01_rough_4k.jpg')
    
        const material = new THREE.MeshPhysicalMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "Dirt"
        // material.displacementMap = dispTexture
        material.roughnessMap = roughTexture
    
        return material;
    },
    getPebblesTexture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/pebbles/PebblesSurface_1Albedo.jpg')
        const normalTexture = this.loader.load('../assets/textures/material-textures/pebbles/PebblesSurface_1NormalMap.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/pebbles/PebblesSurface_1Roughness.jpg')
        const aoTexture = this.loader.load('../assets/textures/material-textures/pebbles/PebblesSurface_1AO.jpg')
    
        const material = new THREE.MeshPhysicalMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "Pebbles"
        material.normalMap = normalTexture
        material.roughnessMap = roughTexture
        material.aomap = aoTexture

        return material;
    },
    getRocksTexture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/rocks/rocks_ground_01_diff_4k.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/rocks/rocks_ground_01_rough_4k.jpg')
        const dispTexture = this.loader.load('../assets/textures/material-textures/white-marble-texture/normal.jpg')
    
        const material = new THREE.MeshPhysicalMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "Rocks"
        // material.displacementMap = dispTexture
        material.roughnessMap = roughTexture
        
    
        return material;
    },
    getWoodTexture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/wood/wood_table_001_diff_4k.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/wood/wood_table_001_rough_4k.jpg')
    
        const material = new THREE.MeshPhysicalMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "Wood1"
        material.roughnessMap = roughTexture
    
        return material;
    },
    getWood2Texture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/wood2/weathered_brown_planks_diff_4k.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/wood2/weathered_brown_planks_disp_4k.jpg')
        const dispTexture = this.loader.load('../assets/textures/material-textures/wood2/weathered_brown_planks_rough_4k.jpg')
    
        const material = new THREE.MeshPhysicalMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "Wood2"
        // material.displacementMap = dispTexture
        material.roughnessMap = roughTexture
        
    
        return material;
    },
    getTilesTexture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/tiles/tiled_floor_001_diffuse_4k.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/tiles/tiled_floor_001_displacement_4k.jpg')
        const dispTexture = this.loader.load('../assets/textures/material-textures/tiles/tiled_floor_001_rough_4k.jpg')
    
        const material = new THREE.MeshPhysicalMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "Tiles"
        // material.displacementMap = dispTexture
        material.roughnessMap = roughTexture
        
    
        return material;
    },
    getBarkTexture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/bark/bark_brown_02_diff_4k.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/bark/bark_brown_02_rough_4k.jpg')

    
        const material = new THREE.MeshPhysicalMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "Bark"
        material.roughnessMap = roughTexture
    
        return material;
    },
}


export default function addMaterialButtons() {
    
    asphaltTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = materialTextures.getAsphaltTexture()
    })
    barkTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = materialTextures.getBarkTexture()
    })
    brickTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = materialTextures.getBrickTexture()
    })
    cobblestoneTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = materialTextures.getCobblestoneTexture()
    })
    pebblesTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = materialTextures.getPebblesTexture()
    })
    rocksTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = materialTextures.getRocksTexture()
    })
    tilesTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = materialTextures.getTilesTexture()
    })
    whiteMarbleTextureButton.addEventListener("click", () => {
        currentObject.children[0].material = materialTextures.getWhiteMarbleTexture()
    })
    wood1TextureButton.addEventListener("click", () => {
        currentObject.children[0].material = materialTextures.getWoodTexture()
    })
    wood2TextureButton.addEventListener("click", () => {
        currentObject.children[0].material = materialTextures.getWood2Texture()
    })
    
}

