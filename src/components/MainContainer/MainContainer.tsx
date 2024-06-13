import { useState } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import style from './MainContainer.module.scss';
import { FormGive } from '../Forms/FormGive/FormGive'; 
import { FormGiveStep2 } from '../Forms/FormGiveStep2/FormGiveStep2';
import { FormGiveStep3 } from '../Forms/FormGiveStep3/FormGiveStep3';
import  '../../index.css'
import { useAppSelector } from '../../hooks/redux';


export const MainContainer = () => {
    const location = useLocation()

    const validation = useAppSelector(state => state.validationReducer)

    /** Определяем действующий класс для ссылок */
     const conditionalClassName = (path: any, form: any): any => {
         if (location.pathname === path) {
             return style.main__route_link_checked
         } else if (validation[form]) 
         {
             return style.main__route_link_valid 
         }
         return style.main__route_link
     }

    return (
        <div className={style.main__body}>
            <div className={style.main__content}>

                <div className={style.main__breadcrumb}>
                    <a href="/" className={style.main__breadcrumb_link}>Главная</a> <span> / Подача заявления</span>
                </div>
                <div className={style.main__block}>
                    <h4 className={style.main__title}>Подача заявления</h4>


                    {/* Ссылки на формы */}

                    <ul className={style.main__route} >

                        <li className={style.main__route_item} 
                            // onClick={e => setUpdate(1)}
                        >
                            <NavLink 
                                className={conditionalClassName('/give', 'form1')} 
                                to="/give" 
                            >1. Информация об услуге</NavLink>
                        </li>

                        <li className={style.main__route_item}
                            // onClick={e => setPathname(window.location.pathname)}
                        >
                            <NavLink 
                                className={conditionalClassName('/give/step2', 'form2')}
                                to='/give/step2' 
                                onClick={ !validation.form1 ? (e: any) => e.preventDefault() : (e:any) => ''}  
                            >2. Подтверждение факта подачи заявления впервые</NavLink>
                        </li>

                        <li className={style.main__route_item}
                            // onClick={e => window.location.pathname = '/give/step3'}
                        >
                            <NavLink 
                                className={conditionalClassName('/give/step3', 'form3')}
                                to='/give/step3'
                                onClick={ !validation.form2 ? (e:any) => e.preventDefault() : (e:any) => ''} 
                            >
                            3. Заяление на постановку в электронную очередь</NavLink>
                        </li>

                    </ul>

                    {/* Маршруты для странниц с формами */}

                    <Routes >
                        <Route path='/give' element={<FormGive />} />
                        <Route path='/give/step2' element={<FormGiveStep2 />} />
                        <Route path='/give/step3' element={<FormGiveStep3 />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}