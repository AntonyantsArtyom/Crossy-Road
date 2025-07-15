import { useState, useEffect } from "react";

export const useUserControl = (initialPosition: [number, number, number], initialRotation: number): [[number, number, number], number] => {
  const [targetPosition, setTargetPosition] = useState(initialPosition);
  const [targetRotation, setTargetRotation] = useState(initialRotation);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          setTargetPosition((prev) => [prev[0] - 1, prev[1], prev[2]]);
          setTargetRotation(Math.PI / 2);
          break;
        case "ArrowRight":
          setTargetPosition((prev) => [prev[0] + 1, prev[1], prev[2]]);
          setTargetRotation(-Math.PI / 2);
          break;
        case "ArrowUp":
          setTargetPosition((prev) => [prev[0], prev[1], prev[2] - 1]);
          setTargetRotation(0);
          break;
        case "ArrowDown":
          setTargetPosition((prev) => [prev[0], prev[1], prev[2] + 1]);
          setTargetRotation(Math.PI);
          break;
        default:
          return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return [targetPosition, targetRotation];
};
