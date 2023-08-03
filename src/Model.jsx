import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";

export default function Model() {
  const url = "./models/paricutin.glb"
  const gltf = useGLTF(url);
  console.log(gltf);
  return (
    <Suspense>
      <primitive
        object={gltf.scene}
        position={[0, -0.29, 0]}
        scale={[10, 10, 10]}
      />
    </Suspense>
  );
}
