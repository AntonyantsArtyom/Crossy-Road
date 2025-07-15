import { forwardRef } from "react";
import type { Group } from "three";

interface PlaneProps {
  x: number;
  y: number;
}

export const Plane = forwardRef<Group, PlaneProps>(({ x, y }, ref) => {
  return (
    <group ref={ref} position={[x, y, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="hsl(60, 100%, 50%)" />
      </mesh>
    </group>
  );
});
