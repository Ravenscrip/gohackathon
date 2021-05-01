import React from "react";
import styled from "styled-components";
import { ButtonCustom } from "../../components/ButtonCustom";
import { MAIN_URL } from "../../constants/routes";
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
  Button,
  Input as Input1,
} from 'semantic-ui-react'
const Wrapper = styled.div`
  position: relative;
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  align-items: left;
  max-width: 1210px;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 0 auto;
  padding: 40px;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
`;

const Content = styled.div`
  margin-top: 26px;
  margin-bottom: 42px;
  height: auto;
`;
const Text = styled.p`
  font-size: 15px;
  line-height: 32px;
`;

const Info = ({history}) => {
  return (
    <Wrapper>
      <Title>Информация для участников</Title>
      <Content>
        <Text>
          <h4 style={{marginBottom: 10}}>1. Ссылка на репозиторий с базовым решением</h4>
          <a
            href="https://gitlab.com/gochamp1/gohackathon-base-client-instance">https://gitlab.com/gochamp1/gohackathon-base-client-instance</a>
          <p style={{marginBottom: 15}}></p>
          <h4 style={{marginBottom: 10}}>2. Описание задачи</h4>
          <p>Необходимо разработать интерфейс, с помощью которого игрок в Го может взаимодействовать с ИИ в ходе игры.
            Следует придумать способ эффективного донесения информации до пользователя с целью победы с максимумом
            набранных очков. Участники сами решают, как и какая информация будет сообщаться пользователю и придумывают
            дополнительные функции и механики, которые можно реализовать, используя аналитику от Leela Zero. Во
            избежание ситуации прямого получения человеком подсказки от ИИ создана система биллинга. Система биллинга
            учитывает запросы к ИИ на подсказки и штрафует за это. Повторюсь, необходимо за меньшее количество подсказок
            победить в игре. Выбор хода в любом случае остаётся за человеком. Хакатон по фронтенд разработке, генерации
            и реализации пользовательских фич на основе, заранее созданной технической базы. Данная постановка задачи
            приближена к процессам разработки в индустрии. Участники выступают в ролях: разработчиков интерфейсов,
            продуктовых аналитиков, проектных и продуктовых менеджеров. Ниже приводится описание технической базы на
            основе которой будет создаваться участниками хакатона приложение</p>
          <p style={{marginBottom: 15}}></p>
          <h4 style={{marginBottom: 10}}>3. Описание токенов для создания своего клиента на базе базового решения</h4>
          <ol>
            <li>1.Токен (аргумент token), получаемый участником при регистрации. Он уникален для каждого пользователя и
              не изменяется при повторных аутентификациях. Потребуется для взаимодействия с большинством методов API и в
              процессе общения с сервером через веб-сокет.
            </li>
            <li>2. Кентавр-токен (аргумент centaur_token). Выдается каждой команде, потребуется для запроса подсказок от
              сервера по API.
            </li>
          </ol>
          <p style={{marginBottom: 15}}></p>
          <h4 style={{marginBottom: 10}}>4. Ссылка с подписью на документацию Swagger и объяснение, что там можно
            проверить запросы</h4>
          <a href="https://go-backend-denis.ambersoft.llc/api/doc">https://go-backend-denis.ambersoft.llc/api/doc</a>
          <p style={{marginBottom: 15}}></p>
          Удобная Swagger-документация к API. Там вы сможете не только познакомиться со всеми доступными методами, но и
          протестировать их. Для этого раскройте нужную вам вкладку с описанием и в правом верхнем углу нажмите “Try it
          out”. Далее, после заполнения тела запроса, нажмите “Execute”. Ответ сервера не заставит себя долго ждать!
          <p style={{marginBottom: 15}}></p>
          Какие есть аргументы запросов:
          <ol>
            <li>token - токен при регистрации</li>
            <li>code - код закрытой игры</li>
            <li>id (game) - id игры</li>
            <li>id (user) - id пользователя</li>
            <li>game_id - номер игры</li>
            <li>centaur_token - токен кентавра</li>
            <li>count - кол-во запрашиваемых ходов</li>
            <li>move - пример: moves=j1,k2,l3,m4</li>
            <li>quarter - четверть, например: quarter=2</li>
            <li>quarters- четверти, например: quarters=1,4</li>
            <li>is_quarters - is_quarters=0 - False, is_quarters=1 - True</li>
            <li>email - email адрес</li>
            <li>nickname - имя игрока</li>
            <li>password - пароль</li>
          </ol>

          <p style={{marginBottom: 15}}></p>
          Доска представлена в виде матрицы:
          <ol>
            <li>0 - свободная для хода позиция</li>
            <li>1 - позиция занята чёрным камнем</li>
            <li>-1 - позиция занята белым камнем</li>
          </ol>
          <p style={{marginBottom: 15}}></p>
          <h4 style={{marginBottom: 10}}>5. Описание сокета</h4>
          При авторизации на сервере одновременно открывается непрерывное соединение через веб-сокет<p
          style={{marginBottom: 15}}></p>
          ws://172.104.137.176:41239/.


          Описание данных, передаваемых по сокетам
          - От пользователя на сервер
          Для того, чтобы принимать или отправлять данные по сокету необходимо выполнить три шага (пример кода на js):

          <p style={{marginBottom: 15}}></p>
          Подключиться к сокету
          <pre>{`
          import { w3cwebsocket as W3CWebSocket } from "websocket";
          

          // Подключение к сокету
          export const client = new W3CWebSocket('ws://172.104.137.176:41239');
`}</pre>
          Подписаться на топик go/game
          <pre>{`
          client.send(JSON.stringify([5, 'go/game']))
          (Отправляем строку “[5, 'go/game']”)`}
          </pre>

          Отправить сообщение авторизации
          <pre>{`
          client.send(JSON.stringify([
          7, // 7 - статус: отправка сообщения
          "go/game", // в какой топик отправляется сообщение
          {
            command: "auth",  // команда на авторизацию подключения
            token: localStorage.getItem('GoGameToken'), // токен игрока
            game_id: game_id // номер игры
          }
          ]));`}
          </pre>
          Отправка хода
          <pre>{`
          client.send(JSON.stringify([
          7,// 7 - статус: отправка сообщения
          "go/game", // в какой топик отправляется сообщение
          {
            command: "move", // команда на отправку хода
            token: token,  // токен игрока
            place: coord.toString().toLowerCase(),  // место куда сделать ход, формат: d13
            game_id: game_id // номер игры
          }
          ]));`}
          </pre>
          Отправка паса
          <pre>{`
          client.send(JSON.stringify([
          7,// 7 - статус: отправка сообщения
          "go/game", // в какой топик отправляется сообщение
          {
            command: "pass", // команда на отправку паса
            token: token, // токен игрока
            game_id: game_id // номер игры
          }
          ]));
          `}
          </pre>
          Отправка запроса “сдаться”
          <pre>{`
          client.send(JSON.stringify([
          7,// 7 - статус: отправка сообщения
          "go/game", // в какой топик отправляется сообщение
          {
            command: "resign", // команда на отправку запроса "сдаться"
            token: token, // токен игрока
            game_id: game_id // номер игры
          }
          ]));
          `}
          </pre>
          - От сервера пользователю
          Оповещение о нашем подключении к партии
          <pre>{`
          payload: {
          msg: "Dock has joined" // сообщение от сервера
          player: {
          avatar: "https://go-backend-denis.ambersoft.llc/uploads/608870de90735.png"
          nickname: "Dock"
          position: 123 // в рейтинге участников
          pts: -6.5 // итоговый рейтинг по очкам
          winrate: "44/37" // Побед/поражений
        }
          turn: "black" // чей ход сейчас
          type: "userConnected" // тип сообщения
          userId: 82 // id игрока, который присоединился
          time: 1619726498701 // время отправки в миллисекундах
        }
`}
          </pre>
          Оповещение после подключения игрока в партию
          <pre>{`
          payload: {
          currentMap: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],…] // текущее состояние поля
          opponent: { // данные опонента
          avatar: "https://go-backend-denis.ambersoft.llc/uploads/608870de90735.png"
          nickname: "Dock"
          position: 130
          pts: -109
          winrate: "19/64"
        }
          player: "w" // за какую сторону игрок
          turn: "black" // чей ход сейчас
          turnBlackEndedAt: 1619727099000 // время окончания хода черных в миллисекундах
          turnWhiteEndedAt: 1619727099000 // время окончания хода белых в миллисекундах
          type: "currentMap" // тип сообщения
          you: {
          avatar: "https://go-backend-denis.ambersoft.llc/uploads/608870de90735.png"
          nickname: "Dock"
          position: 123
          pts: -6.5
          winrate: "44/37"
        }
          time: 1619726498682 // время отправки в миллисекундах
        }`}
          </pre>

          Оповещение о сделанном ходе
          <pre>{`
          payload: {
          currentMap: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],…]
          move: "Dock(черные) сделал ход L6" //Сообщение в лог на фронте
          place: "L6" //ход
          turn: "white" //чей ход сейчас
          turnBlackEndedAt: 1619727100000
          turnWhiteEndedAt: 1619727179000
          type: "newTurn"
          time: 1619726576627 // время отправки в миллисекундах
        }`}
          </pre>

          Оповещение об окончании игры
          <pre>{`
          payload: {
          finalScore: 7 //итоговый счет
          loserPlayer: {
          avatar: "https://go-backend-denis.ambersoft.llc/uploads/608870de90735.png"
          finalScore: -7 //счет проигравшего
          hintScore: 0 //потраченные на подсказки очки
          id: 82
          nickname: "Dock"
          position: 124 //позиция в рейтинге
          pts: -13.5 //итоговые птс
          rpScore: -7 //итоговый счет за партию
          winrate: "44/38" //винрейт
        }
          type: "endGame"
          winner: "b"
          winnerPlayer: {
          avatar: "https://go-backend-denis.ambersoft.llc/uploads/608870de90735.png"
          finalScore: 10
          hintScore: 3
          id: 77
          nickname: "Dock"
          position: 130
          pts: -105
          rpScore: 4
          winrate: "20/64"
        }
          time: 1619727530011 // время отправки в миллисекундах
        }`}
          </pre>


          <h4 style={{marginBottom: 10}}>5. Таблица со стоимостями базовых методов и система биллинга</h4>
          Базовые методы представляют собой Тьюринг-полное пространство. С помощью базовых методов есть возможность
          создавать более сложные сценарии.

          Например: Сценарий “Выживание в углу”
          Используемые базовые методы:
          В какой 1/4 доски лучший ход
          Как будет развиваться игра на 2,3,4 хода вперед.

          <ol>
            <li>1. Лучший ход (стоимость - 3)</li>
            <li>2. 2 лучших хода (стоимость - 3)</li>
            <li>3. 3 лучших хода (стоимость - 3)</li>
            <li>4. 4 лучших хода (стоимость - 3)</li>
            <li>5. Лучший ход соперника (стоимость - 3)</li>
            <li>6. 2 лучших хода соперника (стоимость - 3)</li>
            <li>7. 3 лучших хода соперника (стоимость - 3)</li>
            <li>8. 4 лучших хода соперника (стоимость - 3)</li>
            <li>9. Развитие игры на 2 хода вперед (стоимость - 3)</li>
            <li>10. Развитие игры на 3 хода вперед (стоимость - 3)</li>
            <li>11. Развитие игры на 4 хода вперед (стоимость - 3)</li>
            <li>12. Плохой ход соперника (стоимость - 3)</li>
            <li>13. Тепловая карта всей доски. Детализированная (стоимость - 2)</li>
            <li>13. Тепловая карта всей доски. Менее детализированная (стоимость - 2)</li>
            <li>14. Показать лучший из заданных 2 ходов (стоимость - 2)</li>
            <li>15. Показать лучший из заданных 3 ходов (стоимость - 2)</li>
            <li>16. Показать лучший из заданных 4 ходов (стоимость - 2)</li>
            <li>17. В какой четверти доски будет лучший ход соперника? (стоимость - 2)</li>
            <li>18. В какой половине доски будет лучший ход соперника? (стоимость - 2)</li>
            <li>19. Показать лучший из заданных 2 ходов соперника (стоимость - 2)</li>
            <li>20. Показать лучший из заданных 3 ходов соперника (стоимость - 2)</li>
            <li>21. Показать лучший из заданных 4 ходов соперника (стоимость - 2)</li>
            <li>22. В какой четверти доски сейчас лучший ход? (стоимость - 1)</li>
            <li>23. В какой половине доски сейчас лучший ход? (стоимость - 1)</li>
            <li>24. Тепловая карта 1-й четверти доски (стоимость - 1)</li>
            <li>25. Тепловая карта 2-й четверти доски (стоимость - 1)</li>
            <li>26. Тепловая карта 3-й четверти доски (стоимость - 1)</li>
            <li>27. Тепловая карта 4-й четверти доски (стоимость - 1)</li>
            <li>28. Тепловая карта 1-й и 2-й четвертей доски (стоимость - 1)</li>
            <li>29. Тепловая карта 3-й и 4-й четвертей доски (стоимость - 1)</li>
            <li>30. Тепловая карта 1-й и 4-й четвертей доски (стоимость - 1)</li>
            <li>31. Тепловая карта 2-й и 2-й четвертей доски (стоимость - 1)</li>
            <li>31. Какой перевес в очках на данный момент? (стоимость - 1)</li>
            <li>31. Кто побеждает на данный момент? (стоимость - 1)</li>
          </ol>

          <p style={{marginBottom: 15}}></p>
          <h4 style={{marginBottom: 10}}>Задача игры: добиться наилучшего исхода игры при минимальном кол-ве баллов на
            базовые методы. </h4>
          Победитель партии определяется по формуле:
          <p></p>
          <img src="https://go-backend-denis.ambersoft.llc/uploads/summ.png" alt={"sum"}/>
          <ol>
              <li>RP – Итоговые очки за партию</li>
              <li>S – Дельта площадей со знаком (по правилам)</li>
              <li>N – Кол-во подсказок</li>
              <li>𝑖 – Номер подсказки</li>
              <li>𝑚_𝑖 − Номинал i-той подсказки (допустимые номиналы: 1,2,3)</li>
          </ol>

        </Text>
      </Content>
      <Button className="b-w1" inverted color='orange' onClick={() => {
          history.push(MAIN_URL);
        }}>
        В меню
      </Button>
      
    </Wrapper>
);
};

export default Info;
