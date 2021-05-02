import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../../../../assets/img/logo_game.png";
import {MAIN_URL} from '../../../../constants/routes'
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
  Input as Input1,
} from 'semantic-ui-react'
const Wrapper = styled.div`
  display: flex;
  height: 66px;
  align-items: center;
  margin-bottom: 34px;
  padding-top: 29px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Logotype = styled.img`
`;
const Text = styled.p`
  font-size: 24px;
  line-height: 28px;
  margin-right: 32px;
  cursor: pointer;
`;
const TextHint = styled.p`

  color: ${(props) => (props.hint ? "#D8AD63" : "#fff")};
`;

const TextSdf = styled.p`
  font-size: 24px;
  line-height: 28px;
  cursor: pointer;
  color: #aaaaaa;
  &:hover {
    color: #000000;
  }
`;

const RightContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // cursor: pointer;
`;


const GameId = styled.p`
  font-size: 24px;
  line-height: 28px;
`;
const Timer = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: #767676;
`;

let timesCal = null;

export const Header = ({ history, gameId, setHint, hint, setResign, helpType, setPass, viewPass, view }) => {

  return (
    <Menu fixed='top' inverted>
        <Container>
          <RightContent>
              {viewPass && (
                <Menu.Item as='a' onClick={() => setPass()}>
                    Пас
                </Menu.Item>
              )}
              <Menu.Item as='a' onClick={() => setResign()}>Сдаться</Menu.Item>
              {view && (
                <Menu.Item as='a' onClick={() => setHint(!hint)}>
                 <TextHint  hint={hint}>Взять подсказку</TextHint>
                </Menu.Item>
              )}
            </RightContent>
        </Container>
    </Menu>
  );
};
