import alea from "alea";
import { createNoise2D } from "simplex-noise";

export const SEED = "15t";
export const GRID_SIZE = 20;
export const MIN_ROAD_WIDTH = 4;
export const MAX_ROAD_WIDTH = 8;

export const seedFn = alea(SEED);
export const noise2D = createNoise2D(seedFn);
export const roadSeedFn = alea(SEED + "-road");
export const roadWidth = Math.floor(roadSeedFn() * (MAX_ROAD_WIDTH - MIN_ROAD_WIDTH + 1)) + MIN_ROAD_WIDTH;
export const ROAD_START_Z = -GRID_SIZE / 2;
