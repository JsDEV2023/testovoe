import style from './FooterContainer.module.scss';
import goverment from '../../images/goverment.jpg';

export const FooterContainer = () => {
    return (
        <ul className={style.footer__container}>
            <li className={style.footer__container_item}>
                <a href="/" >
                    <img src={goverment} alt="goverment Resbuplic Bashkortostan" height={45} className={style.footer__container_img}/>
                </a>
            </li>
            <li className={style.footer__container_item}>
                <a href="/" className={style.footer__container_link}>
                    Политика ИБ по защите ПДн
                </a>
            </li>
            <li className={style.footer__container_item}>
                <a href="/" className={style.footer__container_link}>
                    © 2011-2024 Электронная очередь
                </a>
            </li>
            <li className={style.footer__container_item}>
                <a href="/" className={style.footer__container_link}>
                    Подсистема «Единая система учета детей и подростков Республики Башкортостан, 
                    нуждающихся и пользующихся услугами в сфере отдыха и оздоровления» государственной 
                    информационной системы «Единая электронная образовательная среда Республики Башкортостан»
                </a>
            </li>
            <li className={style.footer__container_item}>
                <a href="/" className={style.footer__container_link}>
                    Подсистема «Комплектование» государственной информационной системы 
                    «Единая электронная образовательная среда Республики Башкортостан»
                </a>
            </li>
            <li className={style.footer__container_item}>
                <a href="/" className={style.footer__container_link}>
                    Подсистема «Образование» государственной информационной системы «Единая электронная 
                    образовательная среда Республики Башкортостан»
                </a>
            </li>
        </ul>
    )
}