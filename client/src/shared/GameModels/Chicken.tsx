import type { Group } from "three";

export const Chicken = ({ position, ref }: { position: [number, number, number]; ref?: React.Ref<Group> }) => {
  return (
    <group position={position} ref={ref}>
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
  );
};
