import React from 'react'
import style from './Article.module.sass'

function Article() {
    return (
        <article id="title">
                <div className={style.wrap}>
                    <h1  className={style.header} style={{color: 'white' , fontSize: '68px'}}>This website created for self-development</h1>
                        <p className={style.descr}>Feel free to learn new words and add new</p>
            </div>
        </article>
    )
}

export default Article