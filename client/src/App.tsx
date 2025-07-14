import { Canvas } from "@react-three/fiber";
import { Chicken } from "./shared/gameModels/Chicken";
import { useRef, useState } from "react";
import type { Group } from "three";
import { CameraFollow } from "./shared/CameraFollow";

export default function App() {
  const chickenRef = useRef<Group>(null);
  const [position] = useState<[number, number, number]>([0, 0, 0]);

  return (
    <Canvas style={{ height: "400px" }} camera={{ position: [0, 5, 9], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <Chicken ref={chickenRef} position={position} />
      <CameraFollow targetRef={chickenRef} />
    </Canvas>
  );
}
