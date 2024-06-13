import { useEffect} from 'react';
import style from './FormGiveStep2.module.scss';
import { Dropdown } from '../../UI/Dropdown/Dropdown';
import { Input } from '../../UI/Input/Input';
import { Button } from '../../UI/Button/Button';
import {  useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { AlerterSlice } from '../../../store/Reducers/AlerterSlice';
import { ValidationSlice } from '../../../store/Reducers/ValidationSlice';
import { dataFetch } from '../../../store/Reducers/ActionCreator';

export const FormGiveStep2 = () => {

    const inputData = useAppSelector(state => state.inputDataReducer)
    const validation = useAppSelector(state => state.validationReducer)
    const outputData= useAppSelector(state => state.outputDataReducer)
    const data= useAppSelector(state => state.dataReducer)
    const {changeState} = AlerterSlice.actions
    const {trueValidation, falseValidation} = ValidationSlice.actions
    const dispatch = useAppDispatch()


    // Проверка валидации формы номер 2
    const checkForm = () => {
        if (outputData.c_doctype.value !== '' && outputData.c_ser.value !== '' && 
            outputData.c_num.value !== ''  &&
            outputData.c_gdate.value !== '' &&   (outputData.c_doctype.value == 'Свидетельство рождения' ? outputData.c_serv.value !== '' : true)) {
            // dispatch({type: 'trueValidation', payload: 'form2', value: true})
            dispatch(trueValidation({item: 'form2', value: true}))
        } else {
            // dispatch({type: 'falseValidation', payload: 'form2', value: false})
            dispatch(falseValidation({item: 'form2', value: false}))
        }
    }

    useEffect(()=> {
        dispatch(dataFetch())
        console.log(data)
    }, [])
    
    useEffect(() => {
        checkForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [outputData.c_doctype, outputData.c_ser, outputData.c_num,  outputData.c_gdate, outputData.c_serv])

    return(
        <ul className={style.formStep2}>
            <li>
                <Dropdown 
                    dataTableItem={inputData.c_doctype} 
                    item={'c_doctype'} 
                    form={'form2'}
                    errorText={'Выберите вид документа!'}
                />
            </li>
            {
                outputData.c_doctype.value === 'Свидетельство рождения' ?
                <li className={style.custom__input}>
                    <Dropdown 
                        dataTableItem={inputData.c_ser}
                        item={'c_serv'}
                        width={'ssm:w-36 sssm:w-28'}
                        errorText={'Необходимо выбрать!'}
                        form={'form2'}
                    />
                    <div className={style.custom__input_split}></div>
                    <Input
                        title='Серия документа' 
                        maxLength={"2"} 
                        type={'text'}
                        item={'c_ser'}
                        form={'form2'}
                        errorText={'Поле не заполнено!'}
                        placeholderInput={'AA'}
                        custom={true}
                    />
                </li>
                :
                <li>
                    <Input
                        placeholderInput={''} 
                        title='Серия документа' 
                        maxLength={"10"} 
                        type={'number'}
                        item={'c_ser'}
                        form={'form2'}
                        errorText={'Поле не заполнено!'}
                    />
                </li>
            }
            <li>
                <Input
                    placeholderInput={'123456'} 
                    title='Номер документа' 
                    maxLength={"6"} 
                    type={'number'} 
                    max={6}
                    item={'c_num'}
                    form={'form2'} 
                    errorText={'Поле не заполнено!'}
                />
            </li>
            <li>
                <Input
                    placeholderInput={''} 
                    title='Дата выдачи' 
                    type={'date'} 
                    item={'c_gdate'}
                    form={'form2'}
                    errorText={'Поле не заполнено!'}
                />
            </li>

    
           <div className={style.input__buttons}>
                <div>
                    <Button color="grey" to={'/give'}>Назад</Button>
                </div>
                <div onClick={e => dispatch(changeState({item: 'form2', value: validation['form1'] ? false : true}))}>
                    <Button color="blue" 
                        to={validation.form2 ? '/give/step3' : '/give/step2'}
                    >{validation.form2 ? 'Продолжить' : 'Заполнены не все поля'}</Button>
                </div>
            </div>
        </ul>
    )
}