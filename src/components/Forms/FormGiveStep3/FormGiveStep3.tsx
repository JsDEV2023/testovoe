//компонент получает данные objectRepresentationForm3 и отрисовывает поля, согласно условиям

import { useState, useEffect } from 'react';
import style from './FormGiveStep3.module.scss';
import { Input } from '../../UI/Input/Input';
import { Dropdown } from '../../UI/Dropdown/Dropdown';
import { Button } from '../../UI/Button/Button';
import { Checkbox } from '../../UI/Checkbox/Checkbox';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { OutputSlice } from '../../../store/Reducers/OutputSlice';
import { AlerterSlice } from '../../../store/Reducers/AlerterSlice';
import { dataFetch } from '../../../store/Reducers/ActionCreator';

export const FormGiveStep3 = () => {

    const { selectedItem } = OutputSlice.actions

    const inputData = useAppSelector(state => state.inputDataReducer)
    const validation = useAppSelector(state => state.validationReducer)
    const outputData = useAppSelector(state => state.outputDataReducer)
    const objectRepresentationForm3 = useAppSelector(state => state.modelReducer)
    const {changeState} = AlerterSlice.actions
    const dispatch = useAppDispatch()

    // состояние размер окна браузера, определяет размерность полей 
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    });

    useEffect(()=> {
        dispatch(dataFetch())
    }, [])

    useEffect(() => {
        window.onresize = () => {
          setWindowSize({
            width: window.innerWidth,
          });
        };
      }, []);



    //состояние для добавления ошибок при отправке на сервер
    const [indSend, setInfSend] = useState({})
 
    type typeAddInput = {
        d_email2: boolean;
        d_tel2: boolean;
    }

    //состояние для +добавить номер или емайл
    const [addInput, setAddInput] = useState<any>({
        d_email2: false,
        d_tel2: false
    })

    return (
        <div className={style.formStep3}>
            {
                objectRepresentationForm3.map((i, ind) => {
                    return (
                    <div className={style.formStep3__card} key={ind}>
                        <h6 className={style.card__title}>{i.form.title}</h6>
                        <div className={style.card__form}>
                        {
                        i.form.items.map ((d, ind) => {
                            //ф-ция скрывает и показывает поле в инпут с типом radio
                            let check = () => {
                                    if (d['relatedInput']) {

                                        if (outputData[d.relatedInput]['value'] === '') {

                                        // dispatch({type: 'selectedItem', payload: [d.relatedInput], value: 'Нет'})
                                        dispatch(selectedItem({item: d.relatedInput, value: 'Нет'}))

                                        return true
                                    } else if (outputData[d.relatedInput]['value'] === 'Нет') {
                                        return true
                                    }
                                } 
                                   
                                return false
                                
                            }
                                return (
                                    <div className={style.card__form_row} key={ind} >
                                        {/** Заголовок раздела форм*/}
                                        <div className={style.card__form_title} style={d.form_title || check() ? {display: 'none'} : {}}>
                                            {d.title}
                                            {d.required ? <span className={style.required}>*</span> : ''}
                                        </div>

                                            {
                                                (() => {
                                                    if (d.type === 'dropdown') {
                                                      return (
                                                        <div className={style.card__form_dropdown} key={d.item} >
                                                            
                                                            <Dropdown
                                                                width={windowSize.width > 768 ? d.width : ''} 
                                                                dataTableItem={inputData[d.item]}
                                                                item={d.item}
                                                                relatedDropdown={d?.relatedDropdown}
                                                                form={String(d.form)}
                                                                errorText={d?.errorText}
                                                            ></Dropdown>
                                                        </div>
                                                      )
                                                    } else if (d.type === 'checkbox') {
                                                      return (
                                                        <Checkbox nameItemOutput={d.item} >{d.value}</Checkbox>
                                                      )
                                                    } else if (d.type === 'addInput') {
                                                        return (
                                                            <div className={style.card__form_dropdown} >
                                                                {
                                                                    !addInput[d.item] ? 
                                                                    <div className={style.addInput}
                                                                        onClick={() => setAddInput((prev: typeAddInput) => ({...prev, [d.item]: true}))}>
                                                                        {d.value}</div>
                                                                    :
                                                                    <Input
                                                                        width={windowSize.width > 768 ? d.width : ''} 
                                                                        id={String(Math.random())}
                                                                        maxLength={d.maxLength}   
                                                                        type={d.type} 
                                                                        item={d.item}
                                                                        disabled={d.disabled}
                                                                        form={d.form}
                                                                        errorText={d.errorText}
                                                                    ></Input>
                                                                }
                                                            </div>
                                                        )
                                                    } else if (d.type === 'radio') {
                                                        return (
                                                            <div className={style.card__form_dropdown} >
                                                                {
                                                                    inputData[d.item].map((item, ind) => {
                
                                                                        return (
                                                                            <div className={style.input__radio} key={ind}>
                                                                                <Input
                                                                                    // defaultValue={outputData[d.item]['value']}
                                                                                    // checked={item.checked}
                                                                                    value={item.value}
                                                                                    name={d.item}
                                                                                    // key={ind}
                                                                                    id={item.value}
                                                                                    type={d.type} 
                                                                                    item={d.item}
                                                                                    width={windowSize.width > 768 ? d.width : ''} 
                                                                                ></Input>
                                                                                <label htmlFor={item.value}>{item.value}</label>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        )
                                                    } else {

                                                      return (
                                                        <div className={style.card__form_dropdown} style={check() ? {display: 'none'} : {}}>
                                                            <Input
                                                                width={windowSize.width > 768 ? d.width : ''} 
                                                                id={String(Math.random())}
                                                                maxLength={String(d.maxLength)}   
                                                                type={d.type} 
                                                                item={d.item}
                                                                disabled={d.disabled}
                                                                form={d.form}
                                                                errorText={d.errorText}
                                                            ></Input>
                                                        </div>
                                                      )
                                                    }
                                                  })()
                                            }
                                        
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>

                    )
                })
            }
            
            
            <div className={style.formStep3__buttons}>
                <div>
                    <Button color="grey" to={'/give/step2'}>Назад</Button>
                </div>
                <div onClick={e => {
                        // dispatch({type: 'changeState', payload: 'form3', value:  validation['form3'] ? false : true})
                        dispatch(changeState({item: 'form1', value: validation['form1'] ? false : true}))
                        }}>
                    <Button color="blue" 
                        to={validation.form3 ? '/give/step3' : '/give/step3'}
                        // onClick={() => validation.form3 ? sendOutputForm : ''}
                    >{validation.form3 ? 'Отправить' : 'Заполнены не все поля'}</Button>
                    </div>
            </div> 

        </div>
    )
}