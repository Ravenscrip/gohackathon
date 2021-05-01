import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonCustom } from "../../../../components/ButtonCustom";
import { useSelector } from "react-redux";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header as header1,
  Image,
  Button,
  List,
  Menu,
  Segment,
  Icon,
  Table,
  Card,
  Input as Input1,
} from 'semantic-ui-react'
const Text = styled.p`
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`;

const ScoreText = styled.p`
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  display: flex;
  margin-top: 15px;
`;

const Enemy = styled.div`
  margin-bottom: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.p`
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
`;

const Score = styled.span`
  font-size: 18px;
`;
const ScoreAfter = styled(Score)`
  color: #ffc164; 
`;
const ScoreBefore = styled(Score)`
  color: #dd3f65;
`;

const ScoreWrapper = styled.div`
  display: flex;
`;

const Pts = styled.p`
  font-size: 20px;
  color: #c1c1c1;
`;

const Avatar = styled.img`
  border-radius: 100px;
  width: 150px;
`;

export const Winner = ({setSearchType}) => {
  const [player, setPlayer] = useState({})

  const userId = useSelector((state) => state.profile.userProfile.user.id);
  const winner = useSelector((state) => state.board.winner);
  const loser = useSelector((state) => state.board.loser);

  if(!winner) {
    setSearchType('')
  }

  useEffect(()=>{
    if (winner?.id === userId) {
      setPlayer(winner)
    } else {
      setPlayer(loser)
    }
  },[winner, loser])

  return (
    <>
      <Segment className="Segment-width">
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
          <Card>
            <Image src={player?.avatar} wrapped ui={false} />
            <Card.Content className="Align-t">
              <Card.Header>{player?.nickname}</Card.Header>
              <Card.Description>
                {player?.position+'th'}
              </Card.Description>
            </Card.Content>
          </Card>
          </Grid.Column>
          <Grid.Column>
            <Table definition>
              <Table.Body>
                <Table.Row>
                  <Table.Cell width={2}>Статус игры</Table.Cell>
                  <Table.Cell>{winner?.id === userId ? 'Победил!' : 'Проиграл!'}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Счет</Table.Cell>
                  <Table.Cell><ScoreAfter>{player?.finalScore}</ScoreAfter>/ <ScoreBefore>10</ScoreBefore></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Очки по подсказкам</Table.Cell>
                  <Table.Cell>{player?.hintScore}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Итоговые очки</Table.Cell>
                  <Table.Cell>{player?.rpScore}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>PTS</Table.Cell>
                  <Table.Cell>{player?.pts}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Button className="button-green" inverted color='green' onClick={()=>setSearchType("")}>
             Играть еще
            </Button>
            <Button className="button-green" inverted color='orange' onClick={()=>setSearchType("")}>
              В меню
            </Button>
          </Grid.Column>
        </Grid>
        <Divider vertical>0</Divider>
      </Segment>
    </>
  );
};
