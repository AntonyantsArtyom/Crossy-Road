import { useFrame } from "@react-three/fiber";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Vector3, type Group } from "three";

interface ChickenProps {
  targetPosition: [number, number, number];
  targetRotation: number;
}

export const Chicken = forwardRef<Group, ChickenProps>(({ targetPosition, targetRotation }, ref) => {
  const innerRef = useRef<Group>(null!);
  useImperativeHandle(ref, () => innerRef.current);

  useFrame(() => {
    if (!innerRef.current) return;
    innerRef.current.position.lerp(new Vector3(...targetPosition), 0.1);
    const currentY = innerRef.current.rotation.y;
    let delta = targetRotation - currentY;
    delta = ((delta + Math.PI) % (2 * Math.PI)) - Math.PI;
    innerRef.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={innerRef}>
      <group rotation={[0, Math.PI, 0]}>
        {/* Ноги */}
        <mesh position={[-0.15, 0.1, 0]}>
          <boxGeometry args={[0.1, 0.2, 0.1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position={[0.15, 0.1, 0]}>
          <boxGeometry args={[0.1, 0.2, 0.1]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Туловище */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.6, 0.6, 0.8]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* Крылья */}
        <mesh position={[-0.35, 0.5, 0]}>
          <boxGeometry args={[0.1, 0.4, 0.4]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0.35, 0.5, 0]}>
          <boxGeometry args={[0.1, 0.4, 0.4]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* Голова */}
        <mesh position={[0, 0.95, 0.3]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* Глаза */}
        <mesh position={[-0.12, 1.0, 0.5]}>
          <boxGeometry args={[0.08, 0.08, 0.01]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0.12, 1.0, 0.5]}>
          <boxGeometry args={[0.08, 0.08, 0.01]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Клюв */}
        <mesh position={[0, 0.95, 0.55]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Серёжки под клювом */}
        <mesh position={[-0.05, 0.85, 0.45]}>
          <boxGeometry args={[0.05, 0.1, 0.05]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[0.05, 0.85, 0.45]}>
          <boxGeometry args={[0.05, 0.1, 0.05]} />
          <meshStandardMaterial color="red" />
        </mesh>

        {/* Гребешок */}
        <mesh position={[0, 1.15, 0.25]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[0.1, 1.15, 0.25]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[-0.1, 1.15, 0.25]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="red" />
        </mesh>

        {/* Куриный хвост (короткий) */}
        <mesh position={[0, 0.6, -0.45]}>
          <boxGeometry args={[0.1, 0.3, 0.2]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </group>
  );
});
