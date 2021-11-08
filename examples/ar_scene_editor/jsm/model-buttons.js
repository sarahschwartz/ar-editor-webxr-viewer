export default function addModelButtons() {
    ////////////////////// Add Models1 Buttons ///////////////////////////
    
     susanButton.addEventListener("click", function () {
        objectToPlace = "model"
         modelPath = 'susan.glb'
         modelName = "Monkey"
         modelScale = [0.2, 0.2, 0.2]
        placeObject = true;
     })
    
    ////////////////////// Add Benches Buttons ///////////////////////////
    
    bench1Button.addEventListener("click", function () {
        objectToPlace = "model"
        modelPath = 'bench1.glb'
        modelName = "Bench1"
        modelScale = [0.3, 0.3, 0.3]
        placeObject = true;
     })
    
    
}