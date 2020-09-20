import React from 'react';
import style from './Header.module.sass'
import ReactLogo from '../../logo.svg'
import { Link} from 'react-scroll'

function Header (props) {
    const { firstOption , secondOption , thirdOption } = props
    return (
        <header id="header">
            <div className={style.headerWrapper}>
            <div className={style.logo}>
                <img src={ReactLogo} alt="logo"/>
            </div>
            <nav>
                <ul>
                    <li><Link to="title" spy={true} smooth={true} duration={500}><p>{firstOption}</p></Link></li>
                    <li><Link to="words" spy={true} smooth={true} duration={500}><p>{secondOption}</p></Link></li>
                    <li><Link to="input" spy={true} smooth={true} duration={500}><p>{thirdOption}</p></Link></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header