import React, { Component, useState } from "react";
import styled from "styled-components";
import Players from "../GameInfo/components/Players/Players";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header as header1,
  Image,
  List,
  Menu,
  Segment,
  Icon,
  Message,
  Button,
  Input as Input1,
} from 'semantic-ui-react'
import {
    BEST_MOVES,
    BEST_MOVES_ENEMY, HEATMAP_4X4,
    HEATMAP_FULL, HEATMAP_QUARTER_1, HEATMAP_QUARTER_2, HEATMAP_QUARTER_3, HEATMAP_QUARTER_4,
    HEATMAP_ZONE_QUARTER, SCORE_SUPERIORITY, SCORE_WINNER, SHOW_BEST, SHOW_BEST_ENEMY,
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
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
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
    times,
    hintMessage,
    hintMessageVisible,
    setHintMessageVisible,
  }) => {

    function handleMessage(){
      setHintMessageVisible(true);
      setTimeout(()=>setHintMessageVisible(false), 5000);
    }
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
        <Button icon='question circle outline' onClick={() => handleMessage()} content='Получить совет'/>
        {hintMessageVisible ? (
        <Message
          info
          header='Was this what you wanted?'
          content={hintMessage}
        /> ) : (<></>)}
        <ul class=" w100" uk-accordion="multiple: true">
          <li>
              <a class="uk-accordion-title" href="#">Подсказки в начале</a>
              <div class="uk-accordion-content">
                <Button className="l" inverted color='green' active={activeHelpId === HEATMAP_FULL} onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_FULL })}> Детализированная карта приоритетности ходов на всей карте (-2) </Button>
                <Button className="l" inverted color='green' active={activeHelpId === HEATMAP_ZONE_QUARTER} onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_ZONE_QUARTER })}> В какой четверти доски сейчас лучший ход? (-1) </Button>
                <Button className="l" inverted color='green' active={activeHelpId === HEATMAP_QUARTER_1} onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_QUARTER_1, quarter: 1 })}> Карта приоритетности ходов на 1-й четверти (-1) </Button>
                <Button className="l" inverted color='green' active={activeHelpId === HEATMAP_QUARTER_2} onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_QUARTER_2, quarter: 2 })}> Карта приоритетности ходов на 2-й четверти (-1)</Button>
                <Button className="l" inverted color='green' active={activeHelpId === HEATMAP_QUARTER_3} onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_QUARTER_3, quarter: 3 })}> Карта приоритетности ходов на 3-й четверти (-1) </Button>
                <Button className="l" inverted color='green' active={activeHelpId === HEATMAP_QUARTER_4} onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_QUARTER_4, quarter: 4 })}> Карта приоритетности ходов на 4-й четверти (-1)</Button>
              </div>
          </li>
          <li>
              <a class="uk-accordion-title w100" href="#">Подсказки в середине</a>
              <div class="uk-accordion-content">
                <Button className="l" inverted color='green' active={activeHelpId === HEATMAP_4X4} onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_4X4 })}> В каком квадрате 4 на 4 сейчас лучший ход? (-2) </Button>
                <Button className="l" inverted color='green' active={activeHelpId === HEATMAP_QUARTER_1} onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_QUARTER_1, quarter: 1 })}> Карта приоритетности ходов на 1-й четверти (-1) </Button>
                <Button className="l" inverted color='green' active={activeHelpId === HEATMAP_QUARTER_2} onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_QUARTER_2, quarter: 2 })}> Карта приоритетности ходов на 2-й четверти (-1)</Button>
                <Button className="l" inverted color='green' active={activeHelpId === HEATMAP_QUARTER_3} onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_QUARTER_3, quarter: 3 })}> Карта приоритетности ходов на 3-й четверти (-1) </Button>
                <Button className="l" inverted color='green' active={activeHelpId === HEATMAP_QUARTER_4} onClick={() => scores && handleHelp({ type: "map", id: HEATMAP_QUARTER_4, quarter: 4 })}> Карта приоритетности ходов на 4-й четверти (-1)</Button>
              </div>
          </li>
          <li>
              <a class="uk-accordion-title w100" href="#">Подсказки в конце</a>
              <div class="uk-accordion-content">
                <Button className="l" inverted color='green' active={activeHelpId === 1} onClick={() => scores && handleHelp({ type: "single", id: BEST_MOVES, count: 1 })}> Лучший ход (-3) </Button>
                <Button className="l" inverted color='green' active={activeHelpId === 5} onClick={() => scores && handleHelp({ type: "single", id: BEST_MOVES_ENEMY, count: 1 })}> Лучший ход врага (-3) </Button>
                <Button className="l" inverted color='green' active={activeHelpId === SHOW_BEST} onClick={() => scores && handleHelp({ type: "multiple", multipleHandleCount: 4, id: SHOW_BEST })}> Показать лучший из заданных 3-х ходов (-3) </Button>
                <Button className="l" inverted color='green' active={activeHelpId === SHOW_BEST_ENEMY} onClick={() => scores && handleHelp({ type: "multiple", multipleHandleCount: 4, id: SHOW_BEST_ENEMY })}> Показать лучший из заданных 3-х ходов врага (-3) </Button>
                <Button className="l" inverted color='green' active={activeHelpId === SCORE_WINNER} onClick={() => scores && handleHelp({ type: "score", id: SCORE_WINNER })}> Кто побеждает на данный момент? (-1) </Button>
                <Button className="l" inverted color='green' active={activeHelpId === SCORE_SUPERIORITY} onClick={() => scores && handleHelp({ type: "score", id: SCORE_SUPERIORITY })}> У кого сейчас преимущество? (-1) </Button>
              </div>
          </li>
      </ul>
      </HelpWrapper>
    </Wrapper>
  );
};

export default Help;
