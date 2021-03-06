export const HEATMAP_FULL = 13;
export const HEATMAP_ZONE_QUARTER = 22;
export const HEATMAP_QUARTER_1 = 24;
export const HEATMAP_QUARTER_2 = 25;
export const HEATMAP_QUARTER_3 = 26;
export const HEATMAP_QUARTER_4 = 27;
export const HEATMAP_4X4 = 30;
export const BEST_MOVES = 1;
export const BEST_MOVES_ENEMY = 5;
export const SHOW_BEST = 15;
export const SHOW_BEST_ENEMY = 20;
export const SCORE_WINNER = 31;
export const SCORE_SUPERIORITY = 32;

const defaultMapClass = 'redstone';
const defaultMapSize = 'size-70';


const getZone = (rangeAlpha, digitRange, type = 'circle', color = defaultMapClass, size = defaultMapSize) =>
{
  let mapStones = {}
  let classNamesMapStones = {}
  let alpha = rangeAlpha.toUpperCase().split('')
  let digits = digitRange.split(',')

  alpha.map((char) => {
    digits.map((digit) => {
      mapStones[`${char}${digit}`] = type
      classNamesMapStones[`${char}${digit}`] = `${size} ${color}`
    })
  })

  return {mapStones, classNamesMapStones};
}
export const MAP_QUARTERS = {
  '1': getZone('GHJKLMN', '7,8,9,10,11,12,13'),
  '2': getZone('ABCDEFG', '7,8,9,10,11,12,13'),
  '3': getZone('ABCDEFG', '1,2,3,4,5,6,7'),
  '4': getZone('GHJKLMN', '1,2,3,4,5,6,7'),
}

export const MAP_HALF = {
  '1': getZone('ABCDEFGGHJKLMN', '7,8,9,10,11,12,13'),
  '2': getZone('ABCDEFGGHJKLMN', '1,2,3,4,5,6,7'),
}