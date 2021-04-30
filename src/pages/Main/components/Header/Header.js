import styled from "styled-components";
import Logo from "../../../../assets/img/logo.png";
import AvatarImage from "../../../../assets/img/avatar.png";
import { MAIN_URL, PROFILE_URL } from "../../../../constants/routes";
import { ButtonCustom } from "../../../../components/ButtonCustom";
import { Input } from "../../../../components/InputCustom";
import React from 'react'
import { INFO_URL } from "../../../../constants/routes";
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
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 35px;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  width: 100%;
  top: 0;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: auto;
  flex-shrink: 1;
`;
const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const RightContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const RightSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: no-wrap;
  cursor: pointer;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Logotype = styled.img`
  width: 405px;
  height: auto;
  margin-right: 14px;
`;

const Name = styled.p`
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
`;

const ScoreWrapper = styled.div`
  display: flex;
`;

const Pts = styled.p`
  font-size: 20px;
  line-height: 23px;
  color: #5b5b5b;
`;

const Avatar = styled.img`
  border-radius: 100px;
  margin-left: 20px;
  width: 115px;
`;

const Search = styled.img`
  border-radius: 100px;
  margin-left: 20px;
  width: 115px;
`;

export const Header = ({
  history,
  setSearchType,
  searchType,
  nickname,
  pts,
  winrate,
  avatar,
  profile,
  setNicknameFunc
}) => (
    <Menu fixed='top' inverted>
      
      {!profile ? (
        <Container>
          <RightContent>
              <Menu.Item as='a' onClick={() => history.push('/liders')} ><Icon name='trophy' size='big' />Рейтинг игроков</Menu.Item>
              <Menu.Item as='a' onClick={() => {
                    history.push(INFO_URL);
                    setSearchType("");
                  }}><Icon name='info' size='big' />Информация для участников</Menu.Item>
                  <Menu.Item as='a' header  onClick={() => {
                if (searchType !== "ConnectRandom" && searchType !== "ConnectCode") {
                  history.push(PROFILE_URL);
                  setSearchType("");
                }}}>  
                  {nickname || ""}
                  <Image size='mini' src={avatar} style={{ marginLeft: '1.5em' }} />
              </Menu.Item>
            </RightContent>
        </Container>

        ) : (
          <Container>
          <RightSearch>
              <Input1
                icon={{ name: 'search', circular: true, link: true }}
                onChange={(e, data) => {setNicknameFunc(data.value); console.log( data)}}
                width="500px"
                // textAlign="left"
                placeholder='Введите ник или номер игрока'/>
            
            <Menu.Item as='a' onClick={() => {
              history.push(MAIN_URL)
              setSearchType("")}} >
                Меню
              
              </Menu.Item>
            </RightSearch>
            </Container>
      )}
      
    </Menu>






  // <Wrapper>
  //   {!profile ? (
  //     <Right>
        // <RightContent onClick={() => {
        //   if (searchType !== "ConnectRandom" && searchType !== "ConnectCode") {
        //     history.push(PROFILE_URL);
        //     setSearchType("");
        //   }
        // }}>
  //         <Info>
  //           <Name>{nickname || ""}</Name>
  //           <ScoreWrapper>
  //             <Pts style={{ marginRight: 16 }}>{pts || 0}pts</Pts>
  //             <Pts>{winrate || ""}</Pts>
  //           </ScoreWrapper>
  //         </Info>
  //         <Avatar alt="avatar" src={avatar} />
  //       </RightContent>
  //     </Right>
  //   ) : (
  //     <RightSearch>
  //       <Input
  //         onChange={(e) => setNicknameFunc(e)}
  //         width="500px"
  //         mr={40}
  //         textAlign="left"
  //         placeholder="Введите ник или номер игрока"
  //       />
  //       <ButtonCustom width="auto" onClick={() => {
  //         history.push(MAIN_URL)
  //         setSearchType("")
  //       }} padding="0 20px">
  //         Меню
  //       </ButtonCustom>
  //     </RightSearch>
  //   )}
  // </Wrapper>
);
