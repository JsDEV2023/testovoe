import React from 'react';
import style from './NavItem.module.scss'

type Props = {
    children: string,
};
  

export const NavItem: React.FC<Props> = ({children}: Props) => {
    return (
        <div className={style.nav__item}>
            <a href="/" className={style.nav__item_link}>
                {children}
            </a>
        </div>
    )
} 