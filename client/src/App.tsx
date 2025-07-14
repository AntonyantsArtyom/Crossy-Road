import { Canvas } from "@react-three/fiber";
import { Chicken } from "./shared/gameModels/Chicken";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";
import { CameraFollow } from "./shared/CameraFollow";

export default function App() {
  const chickenRef = useRef<Group>(null);
  const [targetPosition, setTargetPosition] = useState<[number, number, number]>([0, 0, 0]);
  const [targetRotation, setTargetRotation] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setTargetPosition((prev) => {
        let [x, y, z] = prev;
        let newRot = targetRotation;

        switch (e.key) {
          case "ArrowLeft":
            x -= 1;
            newRot = Math.PI / 2;
            break;
          case "ArrowRight":
            x += 1;
            newRot = -Math.PI / 2;
            break;
          case "ArrowUp":
            z -= 1;
            newRot = 0;
            break;
          case "ArrowDown":
            z += 1;
            newRot = Math.PI;
            break;
          default:
            return prev;
        }

        setTargetRotation(newRot);
        return [x, y, z];
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [targetRotation]);

  return (
    <Canvas style={{ height: "400px" }} camera={{ position: [0, 5, 9], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <Chicken ref={chickenRef} targetPosition={targetPosition} targetRotation={targetRotation} />
      <Chicken targetPosition={[0, 0, 0]} targetRotation={0} />
      <CameraFollow targetRef={chickenRef} />
    </Canvas>
  );
}
