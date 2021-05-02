import React from "react";
import styled from "styled-components";
import Players from './components/Players/Players'
import Info from './components/Info/Info'
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
import {initialHeatmapFull} from "../../../../store/Board/actions";
import {useDispatch} from "react-redux";
const Wrapper = styled.div`
  width: 46%;
  margin-left: 25px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;


const HelpWrapper = styled.div`
  margin-top: 23px;
  max-height: 620px;
  position:relative;
  height: 150px;  
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.8)
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
`;

const GameInfo = ({ stepColor, enemyPass, yourColor, you, opponent, turns, stepMain, stepTwo, times,  hintMessage, hintMessageVisible, setHintMessageVisible, handleHelp}) => {
    return (
    <Wrapper>
      <Players enemyPass={enemyPass} opponent={opponent} you={you} stepColor={stepColor} yourColor={yourColor} stepMain={stepMain} stepTwo={stepTwo} times={times} />
      <HelpWrapper>
      <Button icon='question circle outline' onClick={() => setHintMessageVisible(true)} content='Получить совет'/>
      <Button onClick={() => handleHelp({type:'heat'})} content='Как правиль начать)'/>
          {hintMessageVisible ? (
          <Message
            info
            header='Возможно это вам сможет помочь!'
            content={hintMessage}
          /> ) : (<></>)}
          
        </HelpWrapper>
      <Info turns={turns}/>
    </Wrapper>
  );
};

export default GameInfo;
