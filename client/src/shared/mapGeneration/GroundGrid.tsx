import { Plane } from "../gameModels/Plane";
import { noise2D, GRID_SIZE } from "./constants";
import { isRoad } from "./utils/isRoad";

function getGrassColor(x: number, z: number): string {
  if (isRoad(x, z)) return "hsl(0, 0%, 40%)";

  const noiseValue = noise2D(x * 0.1, z * 0.1);
  const normalized = (noiseValue + 1) / 2;
  const hue = 100 + normalized * 20;
  const lightness = 35 + normalized * 15;
  return `hsl(${hue}, 60%, ${lightness}%)`;
}

export function GroundGrid() {
  const tiles = [];

  for (let x = -GRID_SIZE / 2; x < GRID_SIZE / 2; x++) {
    for (let z = -GRID_SIZE / 2; z < GRID_SIZE / 2; z++) {
      const color = getGrassColor(x, z);
      tiles.push(<Plane key={`${x}-${z}`} x={x} z={z} color={color} />);
    }
  }

  return <>{tiles}</>;
}
