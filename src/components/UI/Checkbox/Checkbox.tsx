import React from 'react';
import style from './Checkbox.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { OutputSlice } from '../../../store/Reducers/OutputSlice';
import { ValidationSlice } from '../../../store/Reducers/ValidationSlice';

type Props = {
    nameItemValidationForm?: string;
    nameItemOutput?: string;
    errorText?: string;
    form?: string | undefined;
    children?: string | undefined;
}

export const Checkbox: React.FC<Props> = ({children, nameItemValidationForm, nameItemOutput, errorText, form}) => {

    const {checkboxOutputForm} = OutputSlice.actions
    const {checkboxToggle, falseValidation} = ValidationSlice.actions

    const validation = useAppSelector(state => state.validationReducer.formAgreement)
    const outputData = useAppSelector(state => state.outputDataReducer)
    const alerter= useAppSelector(state => state.alerterReducer)
    const dispatch = useAppDispatch()

    /* применяем стиль при отметить/убрать при клике*/
    let activeChecked =  () => {
        if (nameItemOutput && !!outputData[nameItemOutput]['value'] === true) {
            return style.custom_checkbox_active
        } else if (validation[nameItemValidationForm!] === true) {
            return style.custom_checkbox_active
        }
        return style.custom_checkbox
    }


    /* ф-ция для переключения чекбокса отметит/убрать при клике */
    function toggle(e:any) {
        e.preventDefault()

        nameItemOutput ?
        dispatch(checkboxOutputForm(nameItemOutput))
        :
        // dispatch({type: 'checkboxToggle', payload: 'formAgreement', agreement: [nameItemValidationForm]})
        dispatch(checkboxToggle({item: 'formAgreement', agreement: nameItemValidationForm}))
    }

    const clickCheckbox = (e: any, bool: boolean) => {
        toggle(e)
        // dispatch({type: 'falseState', payload: form, value: bool})
        dispatch(falseValidation({item: form, value: bool}))
    }


    return (
        <div>
            <label className={style.checkbox} onClick={(e) => clickCheckbox(e, false)}>
                <input type="checkbox" className={style.checkbox__input} id={String(Math.random())} required/>
                <span className={activeChecked()}></span>
                <span className={style.text}>{children}</span>
            </label>
            {alerter[form!] && !validation[nameItemValidationForm!]   ? <div className={'text-sm text-red-500 pl-5 mb-2'}>{errorText}</div>: ''}
        </div>
    )
}