import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { ButtonCustom } from "../../../../components/ButtonCustom";
import { CodeContent } from "../CodeContent";
import { Connect } from "../Connect";
import { LoadingGame } from "../LoadingGame";
import { Winner } from "../Winner";
import { Error } from "../Error";
import { INFO_URL } from "../../../../constants/routes";
import { createRandomGame, createGameWithAi } from "../../../../store/GameCreate/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header as Header1,
  Image,
  List,
  Menu,
  Segment,
  Icon,
  Card,
  Input as Input1,
} from 'semantic-ui-react'

const RightContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  align-items: stretch;
`;

const Wrapper = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentMainBoard = (setSearchType, searchType, history, gameId) => {
  const [opponent, setOpponent] = useState({})
  const [code, setCode] = useState('')

  switch (searchType) {
    case "Code":
      return <CodeContent gameId={gameId} setSearchType={setSearchType} />;

    case "Random":
      return (
        <LoadingGame
          gameId={gameId}
          setSearchType={setSearchType}
          text="Ожидание случайного соперника"
          setOpponent={setOpponent}
          searchType={searchType}
          />
      );

    case "CodeEnter":
      return (
        <LoadingGame
          gameId={gameId}
          setSearchType={setSearchType}
          setOpponent={setOpponent}
          code={code}
          text="Ожидание второго игрока"
          searchType={searchType}
        />
      );

    case "ConnectRandom":
      return (
        <Connect
          history={history}
          opponent={opponent}
          setSearchType={setSearchType}
          text="Противник найден!"
        />
      );

    case "ConnectCode":
      return (
        <Connect
          history={history}
          opponent={opponent}
          setSearchType={setSearchType}
          text="Игрок подключился!"
        />
      );

    case "Win":
      return <Winner setSearchType={setSearchType} />;

    case "Error":
      return (
        <Error
          error="Не удалось подключиться к запрашиваемой игре"
          setSearchType={setSearchType}
        />
      );

    default:
  }
};

export const Content = ({ history, searchType, setSearchType }) => {
  const dispatch = useDispatch();
  const gameId = useSelector(state => state.createGame.id);

  useEffect(async ()=>{
    if (searchType === "Random") await dispatch(createRandomGame())
    if (searchType === "WithAi") await dispatch(createGameWithAi())
  }, [searchType])

  return (
    <Wrapper>
      {!searchType ? (
        <>
        <Header1 size='huge' className="c-w">Выберите свой путь!</Header1>
        <Card.Group>
        {gameId === null ? (
          <>
          <Card
            image='https://ecrypto.ru/wp-content/uploads/2018/07/77eff0b7fd470707792920db2988602f.jpg'
            header='Игра с ИИ'
            description='Сыграйте с супер крутым соперником, у которого невозможно выйграть!'
            onClick={() => setSearchType("WithAi")}
          />
          <Card
              image='https://trashbox.ru/files/572455_1e5a5e/aed82cd7web-china-game-go-1-cc.jpg'
              header='Игра со случайным соперником'
              description='Сыграйте с таким же странником, как и вы!'
              onClick={() => setSearchType("Random")}
          />
          <Card    
              image='https://api.живуспортом.рф/imagecache/full/editor/68/67366/5d28a82f0ea22.jpeg'
              header=' Закрытая игра'
              description='Если вас ждут!'
              onClick={() => setSearchType("Code")} 
          />
          </>
          ) : (<Card    
            image='https://infanoj.ru/upload/uf/199/199fe36b48c2762aeeefa96fa2f18edc.jpg'
            header='Продолжить игру'
            description='Лучше ужасный конец, чем ужас без конца.'
            onClick={() =>  history.push('/gameBoard')} 
        />)}
        </Card.Group>
        
       
          



          {/* <ButtonCustom mb={30} onClick={() => history.push('/gameBoard')} disabled={gameId === null}>
            Продолжить игру
          </ButtonCustom>
          <ButtonCustom mb={30} onClick={() => setSearchType("Random")} disabled={gameId !== null}>
            Игра со случайным соперником
          </ButtonCustom>
          <ButtonCustom mb={30} onClick={() => setSearchType("WithAi")} disabled={gameId !== null}>
            Игра с ИИ
          </ButtonCustom>
          <ButtonCustom onClick={() => setSearchType("Code")} mb={30} disabled={gameId !== null}>
            Закрытая игра
          </ButtonCustom> */}
        </>
      ) : null}
      {ContentMainBoard(setSearchType, searchType, history, gameId)}
    </Wrapper>
  );
};
