import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";

//todo:
// зачем нужен комбайн редюсре ,что за  вложенные слайсы?
// посмотри как вызывается диспатч в обработчике событий

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

