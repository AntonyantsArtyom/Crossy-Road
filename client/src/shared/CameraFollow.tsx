import { useThree, useFrame } from "@react-three/fiber";
import type { RefObject } from "react";
import type { Group } from "three";

interface CameraFollowProps {
  targetRef: RefObject<Group | null>;
}

export const CameraFollow = ({ targetRef }: CameraFollowProps) => {
  const { camera } = useThree();

  useFrame(() => {
    if (targetRef!.current) {
      const targetPos = targetRef.current.position.clone();
      targetPos.y += 8;
      targetPos.z += 1;
      camera.position.lerp(targetPos, 1);
      camera.lookAt(targetRef.current.position);
    }
  });

  return null;
};
