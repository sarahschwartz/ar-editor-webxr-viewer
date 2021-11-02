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
    getIceTexture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/ice/Ice_basecolor.jpg')
        const normalTexture = this.loader.load('../assets/textures/material-textures/ice/Ice_normal.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/ice/Ice_roughness.jpg')
    
        const material = new THREE.MeshPhysicalMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "Ice"
        material.normalMap = normalTexture
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
        // const displaceTexture = this.loader.load('../assets/textures/material-textures/white-marble-texture/normal.jpg')
    
        const material = new THREE.MeshPhysicalMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "Rocks"
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

        material.map.name = "Wood"
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


export { materialTextures }