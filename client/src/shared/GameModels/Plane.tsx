import { forwardRef } from "react";
import type { Group } from "three";

interface PlaneProps {
  x?: number;
  y?: number;
  z?: number;
  color?: string;
}

export const Plane = forwardRef<Group, PlaneProps>(({ x = 0, y = 0, z = 0, color = "hsl(60, 100%, 50%)" }, ref) => {
  return (
    <group ref={ref} position={[x, y, z]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
});
