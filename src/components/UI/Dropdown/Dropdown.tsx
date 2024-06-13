import React from 'react';
import './Dropdown.scss';
import { useOutsideAlerter } from '../../../hooks/useOutsideAlerter';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { OutputSlice } from '../../../store/Reducers/OutputSlice';


interface categoryDataTableItem {
    id: number;
    value: string;
}

interface Props {
    dataTableItem: categoryDataTableItem[];
    item: string;
    relatedDropdown?: number | string | undefined;
    width?: string;
    form: string;
    errorText?: string | undefined;
}


export const Dropdown: React.FC<Props> = ({dataTableItem, item, relatedDropdown, width, form, errorText}) => {


    const inputData = useAppSelector(state => state.inputDataReducer)
    const outputData = useAppSelector(state => state.outputDataReducer)
    const alerter= useAppSelector(state => state.alerterReducer)
    const { selectedItem } = OutputSlice.actions
    const dispatch = useAppDispatch()

    /* Кастомный хук для закрытие окна при нажатие вне области */
    const { ref, isShow, setIsShow } = useOutsideAlerter(false)
    
    let toggleClass = isShow ? ' active' : ''


    /* проверка связанности с другим инпутом и если связан получаем подмассив */
    
    let category: {id : number, value: string}[] | undefined | categoryDataTableItem = []
    category = relatedDropdown && outputData[relatedDropdown]['id'] !== 0 ? inputData[relatedDropdown].find(item => item.id === outputData[relatedDropdown]['id'])?.items : dataTableItem


     
    return (
        <div>
            <div className={'relative ' + width}  ref={ref}>

            <div className={`dropdown ${toggleClass}`} onClick={() => setIsShow((prev:boolean) => !prev)}>
            <div className="dropdown__placeholder">
                {outputData[item]['value']}
            </div>
            <div className={`dropdown__btn ${toggleClass}`}></div>
            </div>


            <div className={`dropdown__content ${toggleClass}`}>
            {   
                category?.map((i:{id : number, value: string}) => {
                    return (

                        <div key={i.value} className='dropdown__item' onClick={(e: any) =>  {
                                // dispatchOutputData({type: 'selectedItem', payload: [item],  value: e.target.textContent, id: i.id})
                                dispatch(selectedItem({item: item, value: e.target.textContent}))
                                setIsShow(false)
                            }}>
                        {i.value}
                        </div>

                    )
                })
            }
            </div>
            </div>
            {alerter[form] && !outputData[item]['value']   ? <div className={'text-sm text-red-500 pl-5 mb-5 absolute'}>{errorText}</div>: ''}
        </div>
    )
}