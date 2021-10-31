const materialTextures = {
    loader: new THREE.TextureLoader(),
    getWhiteMarbleTexture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/white-marble-texture/baseColor.jpg')
        const normalTexture = this.loader.load('../assets/textures/material-textures/white-marble-texture/normal.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/white-marble-texture/roughness.jpg')
    
        const material = new THREE.MeshStandardMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "WhiteMarble"
        material.normalMap = normalTexture
        material.roughnessMap = roughTexture
    
        return material;
    },
    getBarkTexture: function() {
        const baseTexture = this.loader.load('../assets/textures/material-textures/bark/bark_brown_02_diff_4k.jpg')
        const roughTexture = this.loader.load('../assets/textures/material-textures/bark/bark_brown_02_rough_4k.jpg')

    
        const material = new THREE.MeshStandardMaterial({
            map: baseTexture,
            side: THREE.DoubleSide
        })

        material.map.name = "WhiteMarble"
        material.roughnessMap = roughTexture
    
        return material;
    }
  }


export { materialTextures }