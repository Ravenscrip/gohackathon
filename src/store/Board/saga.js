import { all, takeLatest, call, put } from "redux-saga/effects";
import { getToken } from "../../helpers/session";
import {
  SINGLE_HELP,
  GET_HINT_BEST_MOVES,
  GET_HINT_SHOW_BEST,
  GET_HINT_HEATMAP_FULL,
  MAP_HELP,
  GET_HINT_HEATMAP_ZONE,
  SCORES_WINNER,
  GET_SCORES_WINNER, GET_HINT_BEST_MOVES_ENEMY, GET_HINT_HEATMAP_4X4
} from "./types";
import {
  helpBestMoves,
  helpShowBest,
  helpHeatmapFull,
  helpHeatmapZone,
  scoresWinner, helpBestMovesEnemy
} from "../../api/board";

function* fetchGetHintBestMoves_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(helpBestMoves, getToken(), payload.game_id, payload.count);
    if (res.hint) {
      let newObj = {};
      res.hint.forEach((key, i) => {
        newObj[key.move] = i+1
      })
      yield put({ type: SINGLE_HELP, payload: newObj})
    }
  } catch (e) {
    //throw e;
  }
}

function* fetchGetHintBestMovesEnemy_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(helpBestMovesEnemy, getToken(), payload.game_id, payload.count);
    if (res.hint) {
      let newObj = {};
      res.hint.forEach((key, i) => {
        newObj[key.move] = i+1
      })
      yield put({ type: SINGLE_HELP, payload: newObj})
    }
  } catch (e) {
    //throw e;
  }
}

function* fetchGetHintShowBest_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(helpShowBest, getToken(), payload.game_id, payload.moves);
    if (res.hint) {
      const newObj = {}
      newObj[res.hint] = 'circle'
      yield put({ type: SINGLE_HELP, payload: newObj})
    }
  } catch (e) {
    //throw e;
  }
}

function* fetchGetHintHeatmapFull_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(helpHeatmapFull, getToken(), payload.game_id);
    if (res.hint) {
      yield put({ type: MAP_HELP, payload: res.hint})
    }
  } catch (e) {
    //throw e;
  }
}

function* fetchGetHintHeatmapZone_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(helpHeatmapZone, getToken(), payload.game_id, payload.isQuarter);
    if (res.hint) {
      yield put({ type: MAP_HELP, payload: { zone: res.hint, isQuarter: payload.isQuarter}})
    }
  } catch (e) {
    //throw e;
  }
}

function* fetchGetHintHeatmap4X4_saga(action) {
  const { payload } = action;
  try {
    let res = yield call(helpHeatmapFull, getToken(), payload.game_id);
    if (res.hint) {
      let x = 0, y = 0, max_sum = 0;
      for (let i = 0; i < 13 - 4; i++)
        for (let j   = 0; j < 13 - 4; j++){
          let s = 0;
          for (let di = 0; di < 4; di++)
            for (let dj = 0; dj < 4; dj++)
              s += res.hint[i + di][j + dj];
          if (s > max_sum) {
            max_sum = s;
            x = i;
            y = j;
          }
        }

      for (let i = 0; i < 13; i++)
        for (let j = 0; j < 13; j++)
          res.hint[i][j] = (i - x >= 0 && i - x < 4 && j - x >= 0 && j - x < 4) ? 70 : 0;
      yield put({ type: MAP_HELP, payload: res.hint})
    }
  } catch (e) {
    //throw e;
  }
}

function* fetchGetHintScoresWinner_saga(action) {
  const { payload } = action;
  try {
    const res = yield call(scoresWinner, getToken(), payload.game_id);
    if (res.hint) {
      yield put({ type: SCORES_WINNER, payload: res.hint})
    }
  } catch (e) {
    //throw e;
  }
}

export function* boardSaga() {
  yield all([
    takeLatest(GET_HINT_BEST_MOVES, fetchGetHintBestMoves_saga),
    takeLatest(GET_HINT_BEST_MOVES_ENEMY, fetchGetHintBestMovesEnemy_saga),
    takeLatest(GET_HINT_SHOW_BEST, fetchGetHintShowBest_saga),
    takeLatest(GET_HINT_HEATMAP_FULL, fetchGetHintHeatmapFull_saga),
    takeLatest(GET_HINT_HEATMAP_ZONE, fetchGetHintHeatmapZone_saga),
    takeLatest(GET_HINT_HEATMAP_4X4, fetchGetHintHeatmap4X4_saga),
    takeLatest(GET_SCORES_WINNER, fetchGetHintScoresWinner_saga),
  ]);
}
