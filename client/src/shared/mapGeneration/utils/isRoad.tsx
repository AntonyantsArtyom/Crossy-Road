import { ROAD_START_Z, roadWidth } from "../constants";

export const isRoad = (x: number, z: number): boolean => {
  return z >= ROAD_START_Z && z < ROAD_START_Z + roadWidth;
};
