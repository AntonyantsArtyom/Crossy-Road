import { Canvas } from "@react-three/fiber";
import { Chicken } from "./shared/gameModels/Chicken";
import { useEffect, useRef, useState } from "react";
import { type Group } from "three";
import { CameraFollow } from "./shared/CameraFollow";
import { useUserControl } from "./shared/useUserControl";
import { GroundGrid } from "./shared/mapGeneration/GroundGrid";
import { socket } from "./socket";
import { Forest } from "./shared/mapGeneration/Forest";

export default function App() {
  const chickenRef = useRef<Group>(null);
  const [targetPosition, targetRotation] = useUserControl([0, 0, 0], 0);
  const [players, setPlayers] = useState<Record<string, { x: number; y: number; rotation: number }>>({});

  useEffect(() => {
    const handlePlayerPosition = (player: { id: string; x: number; y: number; rotation: number }) => {
      setPlayers((prev) => ({
        ...prev,
        [player.id]: { x: player.x, y: player.y, rotation: player.rotation },
      }));
    };

    const handlePlayerDisconnected = ({ id }: { id: string }) => {
      setPlayers((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    };

    socket.on("playerPosition", handlePlayerPosition);
    socket.on("playerDisconnected", handlePlayerDisconnected);

    return () => {
      socket.off("playerPosition", handlePlayerPosition);
      socket.off("playerDisconnected", handlePlayerDisconnected);
    };
  }, []);

  useEffect(() => {
    socket.emit("position", { x: targetPosition[0], y: targetPosition[2], rotation: targetRotation });
  }, [targetPosition]);

  return (
    <Canvas style={{ height: "400px" }} camera={{ position: [0, 5, 9], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <Chicken ref={chickenRef} targetPosition={targetPosition} targetRotation={targetRotation} />
      {Object.entries(players).map(([id, data]) => (
        <Chicken key={id} targetPosition={[data.x, 0, data.y]} targetRotation={data.rotation} />
      ))}
      <GroundGrid />
      <Forest />
      <CameraFollow targetRef={chickenRef} />
    </Canvas>
  );
}
