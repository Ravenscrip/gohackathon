import React from "react";
import styled from "styled-components";
import Players from "../GameInfo/components/Players/Players";
import {
    BEST_MOVES,
    BEST_MOVES_ENEMY, HEATMAP_4X4,
    HEATMAP_FULL, HEATMAP_QUARTER_1, HEATMAP_QUARTER_2, HEATMAP_QUARTER_3, HEATMAP_QUARTER_4,
    HEATMAP_ZONE_QUARTER, SHOW_BEST, SHOW_BEST_ENEMY,
} from "./types";

const Wrapper = styled.div`
  width: 46%;
  position: relative;
  z-index: 3;
  margin-left: 25px;
  margin-top: 30px;
`;

const HelpWrapper = styled.div`
  margin-top: 23px;
  max-height: 508px;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const HelpItem = styled.div`
  width: 48%;
  margin-bottom: 10px;
  background: ${(props) => (props.active ? "#D8AD63" : "#f6f6f6")};
  padding: 10px;
  cursor: pointer;
`;

const Help = ({
    enemyPass,
    stepColor,
    yourColor,
    you,
    opponent,
    stepMain,
    stepTwo,
    handleHelp,
    activeHelpId,
    scores,
    times
  }) => {
  return (
    <Wrapper>
      <Players
        enemyPass={enemyPass}
        opponent={opponent}
        you={you}
        stepColor={stepColor}
        yourColor={yourColor}
        stepMain={stepMain}
        stepTwo={stepTwo}
        times={times}
      />
      <HelpWrapper>
        <HelpItem
          active={activeHelpId === 1}
          onClick={() =>
            scores && handleHelp({ type: "single", id: BEST_MOVES, count: 1 })
          }
        >
          Лучший ход
        </HelpItem>
        <HelpItem
          active={activeHelpId === 5}
          onClick={() =>
            scores && handleHelp({ type: "single", id: BEST_MOVES_ENEMY, count: 1 })
          }
        >
          Лучший ход врага
        </HelpItem>
        <HelpItem
          active={activeHelpId === HEATMAP_FULL}
          onClick={() =>
            scores && handleHelp({ type: "map", id: HEATMAP_FULL })
          }
        >
          Тепловая карта всей доски. Детализированная
        </HelpItem>
        <HelpItem
          active={activeHelpId === HEATMAP_4X4}
          onClick={() =>
            scores && handleHelp({ type: "map", id: HEATMAP_4X4 })
          }
        >
            В каком квадрате 4 на 4 сейчас лучший ход?
        </HelpItem>
        <HelpItem
          active={activeHelpId === SHOW_BEST}
          onClick={() =>
            scores &&
            handleHelp({ type: "multiple", multipleHandleCount: 4, id: SHOW_BEST })
          }
        >
          Показать лучший из заданных 3 ходов
        </HelpItem>
        <HelpItem
          active={activeHelpId === SHOW_BEST_ENEMY}
          onClick={() =>
            scores &&
            handleHelp({ type: "multiple", multipleHandleCount: 4, id: SHOW_BEST_ENEMY })
          }
        >
          Показать лучший из заданных 3 ходов врага
        </HelpItem>
        <HelpItem
          active={activeHelpId === HEATMAP_ZONE_QUARTER}
          onClick={() =>
            scores && handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER })
          }
        >
          В какой четверти доски сейчас лучший ход?
        </HelpItem>
        <HelpItem
          active={activeHelpId === 34}
          onClick={() => scores && handleHelp({ type: "score", id: 34 })}
        >
          Кто побеждает на данный момент?
        </HelpItem>
        <HelpItem
          active={activeHelpId === HEATMAP_QUARTER_1}
          onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_QUARTER_1, quarter: 1 })}
        >
          Тепловая карта 1 четверти
        </HelpItem>
        <HelpItem
          active={activeHelpId === HEATMAP_QUARTER_2}
          onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_QUARTER_2, quarter: 2 })}
        >
          Тепловая карта 2 четверти
        </HelpItem>
        <HelpItem
          active={activeHelpId === HEATMAP_QUARTER_3}
          onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_QUARTER_3, quarter: 3 })}
        >
          Тепловая карта 3 четверти
        </HelpItem>
        <HelpItem
          active={activeHelpId === HEATMAP_QUARTER_4}
          onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_QUARTER_4, quarter: 4 })}
        >
          Тепловая карта 4 четверти
        </HelpItem>
      </HelpWrapper>
    </Wrapper>
  );
};

export default Help;
