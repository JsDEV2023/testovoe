import React, { useState } from 'react';
import './Input.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { OutputSlice } from '../../../store/Reducers/OutputSlice';

interface Props {
    placeholderInput?: string;
    title?: string;
    maxLength?: string;
    type: string;
    max?: number;
    disabled?: boolean;
    id?: string;
    name?: string;
    value?: string;
    width?: string;
    errorText?: string;
    form?: string;
    custom?: boolean;
    item: string;
}

export const Input: React.FC<Props> = ({placeholderInput, title, maxLength, type, max, item, disabled, id, name, value, width, errorText, form, custom}) => {

    const [errorMessage, setErrorMessage] = useState('')

    const outputData = useAppSelector(state => state.outputDataReducer)
    const alerter= useAppSelector(state => state.alerterReducer)
    const { selectedItem } = OutputSlice.actions
    const dispatch = useAppDispatch()

    /* ф-ия для ограничения вводимых символов в инпут с типом number */
    let maxChars: number = max || 999;
    const keyUpDown = (e:any) => {
        if (e.target.value.length >= maxChars) {
            e.target.value = e.target.value.substr(0, maxChars)
        }
    }

    const validateDate = (type: string, year: number, month: number, day: number) => { 
        if (type === 'date') {
            if (year > new Date().getFullYear() ) { 
                setErrorMessage('Неккоректная дата, выбранный год больше текущего')
            } else if ( month > new Date().getMonth()+1 && year <= new Date().getFullYear()) {
                setErrorMessage('Неккоректная дата, выбранный месяц больше текущего')
            } else if(day > new Date().getDate() &&  month > new Date().getMonth()+1 && year <= new Date().getFullYear()) {
                setErrorMessage('Неккоректная дата, выбранный день больше текущего')
            } 
        }
      }

    return (
        <div className={disabled ? 'input__body disabled' : 'input__body'} style={type === 'radio' ? {width: '20px'} : {width: width}}>
            <span className={custom ? 'absolute sssm:-left-40 ssm:-left-48 -top-7 ' : 'absolute left-0 -top-7'} >{title}</span>

            {/*Компоменент возвращается инпут в зависимости от типа */}
            { (() => {
                if (type === 'file' || type === 'radio') {
                    
                    return (
                            <div>
                                <input 
                                    name={name}
                                    id={id}
                                    className={type === 'file' ? 'border-0' : 'radio'} 
                                    defaultChecked={value === 'Нет' ? true : false}
                                    type={type} 
                                    value={value}
                                    onChange={e => {
                                        
                                        // dispatchOutputData({type: 'selectedItem', payload: [item], value: value})
                                        dispatch(selectedItem({item: item, value: value}))
                                    }}
                                    
                                    >
                                </input>
                                {alerter[String(form)] && !outputData[item]['value']   ? <div className={'text-sm text-red-500 pl-5 mb-5'}>{errorMessage}</div>: ''}
                            </div>
                    )
                } else {
                    return (
                        <div className='h-full'>
                            <input
                            id={id}
                            disabled={disabled}
                            className={disabled ? 'input disabled' : 'input'} 
                            placeholder={placeholderInput} 
                            maxLength={Number(maxLength)} 
                            type={type}
                            onKeyDown={e => keyUpDown(e)}
                            onKeyUp={e => keyUpDown(e)}
                            value={String(outputData[item]['value'])}
                            onChange={e => {
                                // dispatchOutputData({type: 'selectedItem', payload: [item], value: e.target.value})
                                dispatch(selectedItem({item: item, value: e.target.value}))
                            
                                validateDate(e.target.type, Number(e.target.value.split('-')[0]), Number(e.target.value.split('-')[1]), Number(e.target.value.split('-')[2])) 
                            }}
                        >
                        </input>
                            {(alerter[String(form)]  && !outputData[item]['value']) || errorMessage ? <div className={'text-sm text-red-500 pl-5 mb-5 absolute'}>{errorMessage || errorText}</div>: <div className='hidden'></div>}
                        </div>
                    )
                }
            })()
                
            }
        </div>
    )
}
 