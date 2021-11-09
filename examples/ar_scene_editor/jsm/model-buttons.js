export default function addModelButtons() {
    ////////////////////// Add Models1 Buttons ///////////////////////////
    
     suzanneButton.addEventListener("click", function () {
        objectToPlace = "model"
         modelPath = 'suzanne.glb'
         modelName = "Monkey"
         modelScale = [0.2, 0.2, 0.2]
        placeObject = true;
     })
    
    benchButton.addEventListener("click", function () {
        objectToPlace = "model"
        modelPath = 'bench1.glb'
        modelName = "Bench"
        modelScale = [0.25, 0.4, 0.4]
        placeObject = true;
     })
    
    
}