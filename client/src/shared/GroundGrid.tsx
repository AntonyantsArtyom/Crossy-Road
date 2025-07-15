import { Plane } from "./gameModels/Plane";
import alea from "alea";
import { createNoise2D } from "simplex-noise";

const SEED = "15t";
const GRID_SIZE = 20;
const MIN_ROAD_WIDTH = 4;
const MAX_ROAD_WIDTH = 8;

const seedFn = alea(SEED);
const noise2D = createNoise2D(seedFn);
const roadSeedFn = alea(SEED + "-road");
const roadWidth = Math.floor(roadSeedFn() * (MAX_ROAD_WIDTH - MIN_ROAD_WIDTH + 1)) + MIN_ROAD_WIDTH;
const ROAD_START_Z = -GRID_SIZE / 2;

function isRoad(x: number, z: number): boolean {
  return z >= ROAD_START_Z && z < ROAD_START_Z + roadWidth;
}

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
