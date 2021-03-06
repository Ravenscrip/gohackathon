# Команда DigitMasters
## Описание проекта GoHelper
Взяли базовое решение, сделали редизайн с помощью semantic ui, добавили подсказку самая выгодная зона 4х4, также добавили heatmap'ы и разбили подсказки на стадии игры. Добавили бесплатные подсказки, по долго-думству, и опасной територии, которую может быть бесмысленно защищать (использовали dfs) + первый heatmap.  
### Подсказки
#### Платные
Детализированная карта приоритетности ходов на всей карте
 В какой четверти доски сейчас лучший ход? 
В каком квадрате 4 на 4 сейчас лучший ход?
Карта приоритетности ходов на 1-й четверти 
 Карта приоритетности ходов на 2-й четверти  
Карта приоритетности ходов на 3-й четверти
 Карта приоритетности ходов на 4-й четверти 
 Лучший ход 
Лучший ход врага 
 Показать лучший из заданных 3-х ходов
 Показать лучший из заданных 3-х ходов врага 
Кто побеждает на данный момент?
 У кого сейчас преимущество?
#### бесплатные
Добавили бесплатные подсказки, по долго-думству(после 40 секунд ожидания хода, появится уведомление-напоминание о подсказках) , и опасной територии, которую может быть бесмысленно защищать (использовали dfs) + первый heatmap.

## Ссылка на видео демонстрацию
https://youtu.be/5UHiSqUr5Sg

## Структура проекта
index.js - Входная точка проекта 

routes.js - Роутинг,все роты приватные, выкидывают на логин, если нет токена

Папка src/api - содержит запросы для работы с сервером

Папка src/assests - Иконки, картинки 

Папка src/components -  Содержит компоненты, например кастомные кнопки и т.д

Папка src/constants -  константы проекта

Папка src/helpers - вспомогательные функции, которые используются на проекте

Папка src/pages - страницы проекта, могут содержать в себе компоненты, необходимые для страницы

Папка src/scss - Общие стили проекта

Папка src/store - Работа с тором проекта, используется redux + redux-saga, redux-saga используется для работы с api.

На проекте используется библиотека styled-components, предназначена для работы со стилями. 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment



This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
