import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import styled from "styled-components";
import { ButtonCustom } from "../../../../components/ButtonCustom";
import { Input } from "../../../../components/InputCustom";
import { clearGameId, createGameCode, joinGameWithCode } from "../../../../store/GameCreate/actions";
import { client, token } from "../../../../Socket";
import {Container, Divider, Dropdown, Grid, Header as Header1, Button, Image, List, Menu, Segment, Icon, Card, Input as Input1,} from 'semantic-ui-react'

const Text = styled.p`
  font-size: 15px;
  // line-height: 42px;
  text-align: center;
`;

const CustomCodeContent = ({ setSearchType, setContentType }) => (
  <>
    <Card> 
      <Card.Content className=" h">
        <Image  className=" h" src='https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/114594/area14mp/image-20160310-31867-ivdtan.jpg' fluid />
      </Card.Content>
      <Card.Content className="Align-t">
        <Card.Header>«Закрытая игра» </Card.Header>
      </Card.Content>
      <Card.Content>
        <Button className="button-green" inverted color='green' onClick={() => setContentType("CreateGame")}> Создать игру </Button>
        <Button className="button-green" inverted color='blue' onClick={() => setContentType("JoinGame")}> Присоединиться </Button>
        <Button className="button-green" inverted color='orange' onClick={() => setSearchType("")}> Отмена </Button>
      </Card.Content>
    </Card>
  </>
);

const CreateGame = ({ setSearchType, cancelGame, code }) => (
  <Card> 
    <Card.Content className=" h">
      <Image  className=" h" src='https://thumbs.dreamstime.com/b/и-ет-старт-пробе-а-игры-оски-игры-55157412.jpg' fluid />
    </Card.Content>
    <Card.Content className="Align-t">
      <Card.Header> Создание закрытой игры </Card.Header>
    </Card.Content>
    <Card.Content>
      <Text>Код вашей игры:</Text>
      <Input value={code || 'Ожидайте'} textAlign="center" disabled />
      <Button className="button-green" inverted color='green' onClick={() => setSearchType("CodeEnter")}> Начать игру </Button>
      <Button className="button-green" inverted color='orange' onClick={() => cancelGame()}> Отмена </Button>
    </Card.Content>
  </Card>
);

const JoinGame = ({ setSearchType, cancelGame, code, setCode }) => (
  <>
    <Card> 
      <Card.Content className=" h">
        <Image  className=" h" src='https://thumbs.dreamstime.com/b/и-ет-старт-пробе-а-игры-оски-игры-55157412.jpg' fluid />
      </Card.Content>
      <Card.Content className="Align-t">
        <Card.Header> Подключение к приватной игре</Card.Header>
      </Card.Content>
      <Card.Content>
        <Text>Укажите код игры:</Text>
        <Input onChange={setCode} name="code" />
        <Button className="button-green" inverted color='green' disabled={!code} 
        onClick={() => code && setSearchType("CodeEnter")}> Присоединиться </Button>
        <Button className="button-green" inverted color='orange' onClick={() => cancelGame()}> Отмена </Button>
      </Card.Content>
    </Card>
  </>
);

export const CodeContent = ({ gameId, setSearchType }) => {
  const [code, setCode] = useState("");
  const [contentType, setContentType] = useState("");
  const dispatch = useDispatch();
  const codeGame = useSelector(state => state.createGame.code);

  useEffect(() => {
    if (contentType === "CreateGame") {
      dispatch(createGameCode());
    }
  }, [contentType]);

  const getGameId = async (val) => {
    if (val === "CodeEnter") {
      if (code) {
        await dispatch(joinGameWithCode(code));
      }
    } else {
      setSearchType(val)
    }
  }

  const cancelGame = async () => {
    client.send(JSON.stringify([7, "go/game", {command: "resign", token: token, game_id: gameId}]));
    await dispatch(clearGameId())
    setSearchType("")
  }

  return (
    <>
      {!contentType ? (
        <CustomCodeContent
          setSearchType={setSearchType}
          setContentType={setContentType}
        />
      ) : null}
      {contentType === "CreateGame" ? (
        <CreateGame cancelGame={()=>cancelGame()} setSearchType={setSearchType} code={codeGame} />
      ) : null}
      {contentType === "JoinGame" ? (
        <JoinGame cancelGame={()=>cancelGame()} setSearchType={(val) => getGameId(val)} code={code} setCode={(val) => setCode(val)} />
      ) : null}
    </>
  );
};
