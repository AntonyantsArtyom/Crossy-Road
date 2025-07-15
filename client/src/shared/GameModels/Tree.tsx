import { forwardRef } from "react";
import type { Group } from "three";
import type { Vector3 } from "@react-three/fiber";

interface TreeProps {
  position?: Vector3;
}

export const Tree = forwardRef<Group, TreeProps>(({ position = [0, 0, 0] }, ref) => {
  return (
    <group ref={ref} position={position}>
      <mesh rotation={[0, 0, 0]}>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>

        {/* Крона */}
        <mesh position={[0, 1.3, 0]}>
          <coneGeometry args={[0.5, 1, 8]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </mesh>
    </group>
  );
});
