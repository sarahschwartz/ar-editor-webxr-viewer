export default function initializeLight(engine) {
    engine.addAmbientLight();
    engine.addDirectionalLight();

    engine.addAxesHelper([0,0,0], [0.2,0.2,0.2]);
}