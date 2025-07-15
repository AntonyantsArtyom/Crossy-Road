import { useMemo } from "react";
import { GRID_SIZE, forestNoise2D } from "./constants";
import { isRoad } from "./utils/isRoad";
import { Tree } from "../gameModels/Tree";
const TREE_THRESHOLD = 0.75;

export function Forest() {
  const trees = useMemo(() => {
    const list = [];

    for (let x = -GRID_SIZE / 2; x < GRID_SIZE / 2; x++) {
      for (let z = -GRID_SIZE / 2; z < GRID_SIZE / 2; z++) {
        if (isRoad(x, z)) continue;

        const value = (forestNoise2D(x * 0.2, z * 0.2) + 1) / 2;

        if (value > TREE_THRESHOLD) {
          list.push(<Tree key={`${x}-${z}`} position={[x, 0, z]} />);
        }
      }
    }

    return list;
  }, []);

  return <>{trees}</>;
}
