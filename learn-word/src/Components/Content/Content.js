import React from 'react';
 import style from './Content.module.sass'

function Content ({children}) {
    return (
    <section id="words">
            <h1>Нажміть на карточку щоб побачити переклад!</h1>
            <h3>У наступному блоці ви зможете додати нові слова, щоб розширити словник</h3>
            <div>{children}</div>
    </section>)
}

export default Content