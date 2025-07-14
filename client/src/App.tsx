import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Chicken } from "./shared/GameModels/Chicken";
import { useEffect, useRef, useState, type MutableRefObject } from "react";
import type { Group } from "three";
import * as THREE from "three";

interface CameraFollowProps {
  targetRef: MutableRefObject<THREE.Object3D | null>;
}

function CameraFollow({ targetRef }: CameraFollowProps) {
  const { camera } = useThree();

  useFrame(() => {
    if (targetRef!.current) {
      const targetPos = targetRef.current.position.clone();
      targetPos.y += 8;
      targetPos.z -= 4;
      camera.position.lerp(targetPos, 0.1);
      camera.lookAt(targetRef.current.position);
    }
  });

  return null;
}

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
