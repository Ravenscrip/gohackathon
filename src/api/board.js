import { GET } from "./base";
const CENTAUR_TOKEN = 'sDRRrRGhfGW7dW3e'

export const helpBestMoves = (token, game_id, count) => {
  return GET(`hints/best-moves?token=${token}&game_id=${game_id}&centaur_token=${CENTAUR_TOKEN}&count=${count}`, {}, token);
};

export const helpBestMovesEnemy = (token, game_id, count) => {
  return GET(`hints/best-moves-enemy?token=${token}&game_id=${game_id}&centaur_token=${CENTAUR_TOKEN}&count=${count}`, {}, token);
};

export const helpShowBest = (token, game_id, moves) => {
  return GET(`hints/show-best?game_id=${game_id}&moves=${moves}&centaur_token=${CENTAUR_TOKEN}&token=${token}`, {}, token);
};
export const helpShowBestEnemy = (token, game_id, moves) => {
  return GET(`hints/show-best-enemy?game_id=${game_id}&moves=${moves}&centaur_token=${CENTAUR_TOKEN}&token=${token}`, {}, token);
};

export const helpHeatmapFull = (token, game_id) => {
  return GET(`hints/heatmap-full?game_id=${game_id}&centaur_token=${CENTAUR_TOKEN}&token=${token}`, {}, token);
};

export const helpHeatmapZone = (token, game_id, is_quarter) => {
  return GET(`hints/heatmap-best-move-zone?game_id=${game_id}&centaur_token=${CENTAUR_TOKEN}&token=${token}&is_quarter=${is_quarter ? 1 : 0}`, {}, token);
};

export const helpHeatmapQuarter = (token, game_id, quarter) => {
  return GET(`hints/heatmap-quarter?game_id=${game_id}&centaur_token=${CENTAUR_TOKEN}&token=${token}&quarter=${quarter}`, {}, token);
};

export const scoresWinner = (token, game_id) => {
  return GET(`hints/winner?game_id=${game_id}&centaur_token=${CENTAUR_TOKEN}&token=${token}`, {}, token);
};

export const scoresSuperiority = (token, game_id) => {
  return GET(`hints/superiority?game_id=${game_id}&centaur_token=${CENTAUR_TOKEN}&token=${token}`, {}, token);
};
