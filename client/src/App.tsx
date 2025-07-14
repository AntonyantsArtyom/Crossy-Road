import { Canvas } from "@react-three/fiber";
import { Chicken } from "./shared/gameModels/Chicken";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";
import { CameraFollow } from "./shared/CameraFollow";

export default function App() {
  const chickenRef = useRef<Group>(null);
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let newPos = [...position] as [number, number, number];
      let newRot = rotation;

      switch (e.key) {
        case "ArrowLeft":
          newRot = Math.PI / 2;
          newPos[0] -= 1;
          break;
        case "ArrowRight":
          newRot = -Math.PI / 2;
          newPos[0] += 1;
          break;
        case "ArrowUp":
          newRot = 0;
          newPos[2] -= 1;
          break;
        case "ArrowDown":
          newRot = Math.PI;
          newPos[2] += 1;
          break;
        default:
          return;
      }

      setPosition(newPos);
      setRotation(newRot);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [position, rotation]);

  return (
    <Canvas style={{ height: "400px" }} camera={{ position: [0, 5, 9], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <Chicken ref={chickenRef} position={position} rotation={rotation} />
      <Chicken position={[0, 0, 0]} rotation={0} />
      <CameraFollow targetRef={chickenRef} />
    </Canvas>
  );
}
