// const loader = new THREE.TextureLoader();

// function getTexture_1() {

//     const texture = loader.load('../assets/textures/color-textures/Texture_1.jpg')
  
//     const material = new THREE.MeshStandardMaterial({
//         map: texture,
//         side: THREE.DoubleSide
//     })

//     material.map.name = "Texture_1"
  
//     return material;
// }


const patternTextures = {
    loader: new THREE.TextureLoader(),
    getTexture_1: function() {
        const texture = this.loader.load('../assets/textures/color-textures/Texture_1.jpg')
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            side: THREE.DoubleSide
        })
        material.map.name = "Texture_1"
        return material;
    }
  }


export { patternTextures }