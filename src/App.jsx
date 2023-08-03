import { Canvas } from "@react-three/fiber";
import { TrackballControls } from "@react-three/drei";

import "./App.css";
import { LinearToneMapping } from "three";
import Model from "./Model";

function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 2] }}
        gl={{ toneMapping: LinearToneMapping, toneMappingExposure: 2 }}
      >
        <ambientLight intensity={40} />
        <Model />
        <TrackballControls target={[0, 0, 0]} minDistance={1} maxDistance={3} noPan/>
      </Canvas>
    </>
  );
}

export default App;
