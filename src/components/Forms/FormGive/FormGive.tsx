import { useEffect } from 'react';
import style from './FormGive.module.scss';
import { Checkbox } from '../../UI/Checkbox/Checkbox';
import { Button } from '../../UI/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { ValidationSlice } from '../../../store/Reducers/ValidationSlice';
import { AlerterSlice } from '../../../store/Reducers/AlerterSlice';

export const FormGive = () => {


    const validation = useAppSelector(state => state.validationReducer)
    const {falseValidation, trueValidation} = ValidationSlice.actions
    const {changeState} = AlerterSlice.actions
    const dispatch = useAppDispatch()

    /* ф-ция для проверки валидации 1 формы*/
    const checkAgremment = () => {

        for (let key in validation.formAgreement) {

            if (validation['formAgreement'][key] === false || validation['formAgreement'][key] === undefined) {
                dispatch(falseValidation({item:'form1', value: false}))
                return 
            }

            dispatch(trueValidation({item:'form1', value: true}))
        }    
    }

    useEffect(() => {
        checkAgremment()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [validation.formAgreement])


    return (
        <div className={style.give}>
            <p><strong>Перед заполнением заявления просим вас внимательно ознакомиться с условиями подачи заявления.</strong></p>
            <p>
                Если в заявлении указано наличие льгот, либо потребность по здоровью, 
                а также, если заявление было подано законным представителем 
                (за исключением подачи заявления от имени родителей), 
                то Вам необходимо обратиться в Ваш районный отдел образования с оригиналами документов, 
                подтверждающих право на льготы, потребность по здоровью, либо подтверждающих 
                право на представление интересов ребенка.
            </p>
            <p>
                Проверить статус заявления и место Вашего ребенка в очереди 
                можно по серии и номеру свидетельства о рождении ребенка.
            </p>
            <div className={style.main__alert}>
                <p>
                    Ваше место в очереди может меняться как в сторону понижения, так и 
                    в сторону повышения. Очередь смещается вниз, если в очередности появился 
                    ребенок, который сменил желаемое дошкольное образовательное учреждение 
                    в связи со сменой места жительства, а дата его постановки на очередь 
                    раньше Вашей (по решению представительного органа муниципального образования). 
                    Очередь смещается вверх, если из очереди в указанное дошкольное образовательное 
                    учреждение выбыл один из детей (например, ребенок получил место в детском саду, 
                    либо Заявитель отказался от получения услуги).
                </p>
            </div>

        
            {/* форма с кастомными чекбоксами */}
            <ul className={style.main__checkbox_items} >
                <li>
                    <Checkbox nameItemValidationForm={'agreement1'} form={'form1'} errorText={'Чтобы продолжить, выберите этот пункт.'}> С условиями подачи заявления согласен(на)</Checkbox>
                </li>
                <li>
                    <Checkbox nameItemValidationForm={'agreement2'} form={'form1'} errorText={'Чтобы продолжить, выберите этот пункт.'}>
                        Я согласен(на), что для получения электронной 
                        услуги мои персональные данные и персональные данные моего ребенка будут обработаны в 
                        ведомственных информационных системах с соблюдением требований закона РФ от 27.07.2006 №152-ФЗ 
                        "О персональных данных"
                    </Checkbox>
                </li>
                <li>
                    <Checkbox nameItemValidationForm={'agreement3'} form={'form1'} errorText={'Чтобы продолжить, выберите этот пункт.'}>
                        Об ответственности за предоставление заведомо ложных сведений, 
                        либо подложных документов, в соответствии 
                        с законодательством Российской Федерации предупрежден
                    </Checkbox>
                </li>
            </ul>
            <div onClick={e => {
                    // dispatch({type: 'changeState', payload: 'form1', value:  validation['form1'] ? false : true})
                    dispatch(changeState({item: 'form1', value: validation['form1'] ? false : true}))
                }}>
                <Button
                    color={'blue'} 
                    to={validation.form1 ? '/give/step2' : '/give'}
                >{validation.form1 ? 'Продолжить' : 'Заполнены не все поля'}</Button>
                </div>
        </div>
    )
}