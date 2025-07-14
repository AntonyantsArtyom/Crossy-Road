import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Chicken() {
  // Простая курочка из блоков (кубов)
  return (
    <group position={[0, 0.5, 0]}>
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[1, 0.5, 1]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
      <mesh position={[0, 0.75, 0.4]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </group>
  );
}

function Tree() {
  return (
    <group position={[-3, 0, -3]}>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 2, 12]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
}

function Road() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[10, 4]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 5, 9], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <Road />
      <Chicken />
      <Tree />
      <OrbitControls />
    </Canvas>
  );
}
