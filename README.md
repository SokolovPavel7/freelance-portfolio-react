# Разработка сайта Freelancer portfolio на React.

## Использование готовой вёрски сайта и перенесение её в папку с установленным пакетом Create React App.

1. В папку src скопированы папки img и styles с файлами main.css и reset.css
2. Из основного файла index.html скопирована разметка и вставлена в компонент App. Переименованы атрибуты class на className, закрыты все теги img: такие манипуляции проделаны со всеv перенесенным кодом html.
3. Импортированы иконки и переписаны src ссылки на jsx-синтаксис.
4. Элементы основной страницы, которые будут повторяться на всех страницах сайта, вынесены в отдельные компоненты React: Header, Navbar и Footer. Также отдельные компоненты созданы для страниц сайта: Home, Project, Contacts, помещенные в папку pages.
5. На странице проектов компонента Projects есть повторяющиеся элементы - наши проекты, которые можно вывезти с помощью одного компонента Project, используя метод map.
6. Используем React-router для перемещения между страницами. Для этого с помощью команды:

- npm i react-router-dom - устанавливаем необходимый пакет.
- в компоненте App оборачиваем все компоненты в тег <Router>
- все маршруты берем в тег <Routes>
- сами маршруты <Route/> прописываем с помощью следующего синтаксиса <Route path="/" element={<Home />} />

7. Используем в проекте функцию ScrollToTop, которую вставляем внутри Router, чтобы при навигации по страницам скролл всегда находился в верхнем положении.
8. Используем компонент NavLink из react-router-dom в компоненте Project
9. Используем хуки useState и useEffect в компоненте BtnDarkMode для смены темы сайта со светлой на темную, а также с помощью хука useRef менять стиль самой кнопки.
10. Использование кастомного хука useLocalStorage для сохранения в истории браузера, на какой теме (светлая или темная) мы завершили просмотр сайта, т.е. мы храним состояние компонента в localstorage. Кастомный компонент взят с сайта webcademy.ru/blog/949/. Файл с кодом помещаем в папку utils. Кастомный хук импортируется в кнопку - компонент BtnDarkMode.
11. Используем системные настройки браузера по-умолчанию, т.е. если в настойках браузера стоит темная тема, то сайт будет открытваться с темной темой. Код прописан в папке utils файл detectDarkMode и импортирован в компонент BtnDarkMode.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
