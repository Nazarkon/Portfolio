import React from 'react';
import style from './Footer.module.sass'
import { Link} from 'react-scroll'
import {UpCircleOutlined} from '@ant-design/icons';
function Footer ({ firstOption ,urlForLinked ,author }) {
    return (
        <footer>
            <div className={style.footerWrapper}>
            <a href={urlForLinked} className={style.linkedText}>
                {author}
            </a>
            <nav>
                <ul>
                    <li><Link to="header" spy={true} smooth={true} duration={500}><UpCircleOutlined /></Link></li>
                </ul>
            </nav>
            </div>
        </footer>
    )
}

export default Footer