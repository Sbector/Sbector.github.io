import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Box(props) {
    const ref = useRef()
    useFrame((_,delta) => {
        ref.current.rotation.x += 1 * delta
    })

    return (
      <mesh {...props} ref = {ref}>
        <boxGeometry args={[0.76,0.76,0.76]}/>
        <meshBasicMaterial color={0x00ff00} wireframe />
      </mesh>
    )
  }