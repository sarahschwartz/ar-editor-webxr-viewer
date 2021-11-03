const patternTextures = {
    loader: new THREE.TextureLoader(),
    getTexture_1: function() {
        const texture = this.loader.load('../assets/textures/color-textures/Texture_1.jpg')
        const material = new THREE.MeshPhysicalMaterial({
            map: texture,
            side: THREE.DoubleSide
        })
        material.map.name = "Texture_1"
        return material;
    },
    getTexture_2: function() {
        const texture = this.loader.load('../assets/textures/color-textures/Texture_2.jpg')
        const material = new THREE.MeshPhysicalMaterial({
            map: texture,
            side: THREE.DoubleSide
        })
        material.map.name = "Texture_2"
        return material;
    },
    getTexture_3: function() {
        const texture = this.loader.load('../assets/textures/color-textures/Texture_3.jpg')
        const material = new THREE.MeshPhysicalMaterial({
            map: texture,
            side: THREE.DoubleSide
        })
        material.map.name = "Texture_3"
        return material;
    },
    getTexture_4: function() {
        const texture = this.loader.load('../assets/textures/color-textures/Texture_4.jpg')
        const material = new THREE.MeshPhysicalMaterial({
            map: texture,
            side: THREE.DoubleSide
        })
        material.map.name = "Texture_4"
        return material;
    },
    getTexture_5: function() {
        const texture = this.loader.load('../assets/textures/color-textures/Texture_5.jpg')
        const material = new THREE.MeshPhysicalMaterial({
            map: texture,
            side: THREE.DoubleSide
        })
        material.map.name = "Texture_5"
        return material;
    },
    getTexture_6: function() {
        const texture = this.loader.load('../assets/textures/color-textures/Texture_6.jpg')
        const material = new THREE.MeshPhysicalMaterial({
            map: texture,
            side: THREE.DoubleSide
        })
        material.map.name = "Texture_6"
        return material;
    }

  }

export default function addPatternButtons() {
    
    texture1Button.addEventListener("click", () => {
        currentObject.material = patternTextures.getTexture_1()
    })

    texture2Button.addEventListener("click", () => {
        currentObject.material = patternTextures.getTexture_2()
    })

    texture3Button.addEventListener("click", () => {
        currentObject.material = patternTextures.getTexture_3()
    })

    texture4Button.addEventListener("click", () => {
        currentObject.material = patternTextures.getTexture_4()
    })

    texture5Button.addEventListener("click", () => {
        currentObject.material = patternTextures.getTexture_5()
    })

    texture6Button.addEventListener("click", () => {
        currentObject.material = patternTextures.getTexture_6()
    })

  }