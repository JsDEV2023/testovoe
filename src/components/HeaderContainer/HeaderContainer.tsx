import React from 'react';
import RB from '../../images/RB.png'
import style from './HeaderContainer.module.scss'
import { NavItem } from '../UI/NavItem/NavItem';

export const HeaderContainer: React.FC = () => {
    return (
        <header className={style.header__container}>
            <div className={style.header__block_logo}>
                
                <div className={style.header__logo}>
                    <div>
                        <a href="/">
                            <img src={RB} alt="RB" />
                        </a>
                    </div>
                    <div className={style.header__title}>
                        <a className={style.header__link} href="/"><strong>Электронная очередь в ДОУ</strong> Республики Башкортостан</a>
                    </div>
                </div>
            </div>
            <div className={style.header__block_nav}>
                <ul className={style.header__nav}>
                    <li><NavItem>Список ДОУ</NavItem></li>
                    <li><NavItem>Очередь</NavItem></li>
                    <li><NavItem>Вопросы</NavItem></li>
                    <li><NavItem>Инструкции</NavItem></li>
                    <li><NavItem>Контакты</NavItem></li>
                    <li><NavItem>Информация о сертификате дошкольника</NavItem></li>
                    <li><NavItem>Подача заявления на сертификат</NavItem></li>
                </ul>
            </div>  
        </header>
    )
}