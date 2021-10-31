const loader = new THREE.TextureLoader();

function getTexture_1() {

    const texture = loader.load('../assets/textures/random-texture.jpg')
  
    const material = new THREE.MeshPhongMaterial({
        map: texture,
        side: THREE.DoubleSide
    })

    material.map.name = "Texture1"
  
    return material;
}

function getWhiteMarbleTexture() {
    const baseTexture = loader.load('../assets/textures/white-marble-texture/baseColor.jpg')
    const glossTexture = loader.load('../assets/textures/white-marble-texture/glossiness.jpg')
    const normalTexture = loader.load('../assets/textures/white-marble-texture/normal.jpg')
    const roughTexture = loader.load('../assets/textures/white-marble-texture/roughness.jpg')
    const specularTexture = loader.load('../assets/textures/white-marble-texture/specular.jpg')
  
    const material = new THREE.MeshPhongMaterial({
        map: baseTexture,
        side: THREE.DoubleSide
    })

    material.map.name = "WhiteMarble"
    material.normalMap = normalTexture
    material.specularMap = specularTexture
    material.roughnessMap = roughTexture
    material.metalnessMap = glossTexture

  
    return material;
}
  
export { getTexture_1, getWhiteMarbleTexture }