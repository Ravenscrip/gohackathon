import {
  SINGLE_HELP,
  MARKERS_CLEAR,
  MULTIPLE_HELP,
  WINNER_USER,
  LOSER_USER,
  GET_HINT_BEST_MOVES,
  GET_HINT_SHOW_BEST,
  GET_HINT_HEATMAP_FULL,
  GET_HINT_HEATMAP,
  GET_HINT_HEATMAP_ZONE,
  SET_BLOCKED,
  MAP_STONES,
  GET_SCORES_WINNER,
  GET_HINT_BEST_MOVES_ENEMY,
  GET_HINT_HEATMAP_4X4,
  GET_HINT_HEATMAP_QUARTER,
  GET_HINT_SHOW_BEST_ENEMY,
  GET_SCORES_SUPERIORITY,
  GET_INITIAL_HEATMAP_FULL
} from "./types";

export const hintHeatmapFull = (game_id) => ({
  type: GET_HINT_HEATMAP_FULL,
  payload: {game_id: game_id}
});

export const initialHeatmapFull = (game_id) => ({
  type: GET_INITIAL_HEATMAP_FULL,
  payload: {game_id: game_id}
});

export const singleHelp = () => ({
  type: SINGLE_HELP,
});

export const multipleHelp = () => ({
  type: MULTIPLE_HELP,
});

export const markersClear = () => ({
  type: MARKERS_CLEAR,
});

export const setWinnerUser = (winner) => ({
  type: WINNER_USER,
  payload: winner
});

export const setLoserUser = (loser) => ({
  type: LOSER_USER,
  payload: loser
});

export const setBlocked = (blocked) => ({
  type: SET_BLOCKED,
  payload: blocked
});

export const setMapStones = (stones) => ({
  type: MAP_STONES,
  payload: stones
});

export const setScoresWinner = (game_id) => ({
  type: GET_SCORES_WINNER,
  payload: {game_id}
});

export const setScoresSuperiority = (game_id) => ({
  type: GET_SCORES_SUPERIORITY,
  payload: {game_id}
});

export const hintBestMoves = (game_id, count) => ({
  type: GET_HINT_BEST_MOVES,
  payload: {game_id: game_id, count: count}
});

export const hintBestMovesEnemy = (game_id, count) => ({
  type: GET_HINT_BEST_MOVES_ENEMY,
  payload: {game_id: game_id, count: count}
});

export const hintShowBest = (game_id, moves) => ({
  type: GET_HINT_SHOW_BEST,
  payload: {game_id: game_id, moves: moves}
});

export const hintShowBestEnemy = (game_id, moves) => ({
  type: GET_HINT_SHOW_BEST_ENEMY,
  payload: {game_id: game_id, moves: moves}
});

export const hintHeatmap = (game_id) => ({
  type: GET_HINT_HEATMAP,
  payload: {game_id: game_id}
});

export const hintHeatmapZone = (game_id, isQuarter) => ({
  type: GET_HINT_HEATMAP_ZONE,
  payload: {game_id: game_id, isQuarter}
});

export const hintHeatmapQuarter = (game_id, quarter) => ({
  type: GET_HINT_HEATMAP_QUARTER,
  payload: {game_id: game_id, quarter: quarter}
});

export const hintHeatmap4X4 = (game_id) => ({
  type: GET_HINT_HEATMAP_4X4,
  payload: {game_id: game_id}
});


