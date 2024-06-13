import { interfaceModelObject } from "../../types/interfaceModelObject";
import { createSlice } from "@reduxjs/toolkit";

const initialState: interfaceModelObject[] = [
    {form: {
        title: 'информация о доу',
        items: [
            {
                title: 'Муниципалитет',
                type: 'dropdown',
                item: 'municipality',
                relatedInput: 0,
                required: 1,
                width: 'w-96',
                errorText: 'Не выбран муниципалитет',
                form: 'form3'
            },
            {
                title: 'Желаемый ДОУ',
                type: 'dropdown',
                item: 'desired_kindergarten_id',
                relatedDropdown: 'municipality',
                required: 1,
                errorText: 'Не выбран желаемый ДОУ',
                form: 'form3'
            },
            {
                title: 'Группа по языку',
                type: 'dropdown',
                item: 'lgroup',
                relatedDropdown: 0,
                required: 1,
                width: 'w-60',
                errorText: 'Не выбрана группу языка',
                form: 'form3'
            },
            {
                title: 'Желаемая дата поступления',
                type: 'dropdown',
                item: 'wdate',
                relatedDropdown: 0,
                required: 1,
                width: 'w-60',
                errorText: 'Не выбрана дата',
                form: 'form3'
            },
            {
                title: 'Согласие на временную путевку',
                type: 'dropdown',
                item: 'wrem',
                relatedDropdown: 0,
                required: 1,
                width: 'w-36',
                errorText: 'Не выбрано согласие на временную путевку',
                form: 'form3'
            },
            {
                title: 'Право на преимущественное зачисление',
                type: 'dropdown',
                item: 'privilege',
                relatedDropdown: 0,
                required: 1,
                width: 'w-36',
                errorText: 'Не выбрано право на преимущественное зачисление',
                form: 'form3'
            },
            
        ]
    }
    },
    {form: {
        title: 'информация о ребенке',
        items: [
            {
                title: 'СНИЛС',
                type: 'text',
                item: 'c_snils',
                maxLength: '11',
                width: '330px'
            },
            {
                title: 'Фамилия',
                type: 'input',
                item: 'c_fam',
                maxLength: '11',
                required: 1,
                width: '330px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Имя',
                type: 'input',
                item: 'c_name',
                required: 1,
                width: '330px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Отчество',
                type: 'input',
                item: 'c_otch',
                width: '330px'
            },
            {
                title: 'Дата рождения',
                type: 'date',
                item: 'c_bdate',
                required: 1,
                width: '240px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Пол ребенка',
                type: 'dropdown',
                item: 'c_sex',
                relatedDropdown: 0,
                required: 1,
                width: 'w-36',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Гражданство',
                type: 'dropdown',
                item: 'c_citizenship',
                relatedDropdown: 0,
                required: 1,
                width: 'w-80',
                errorText: 'Не выбрано гражданство!',
                form: 'form3'
            },
            {
                title: 'Потребность по здоровью',
                type: 'dropdown',
                item: 'p1',
                relatedDropdown: 0,
                required: 1,
                width: 'w-3/4',
                errorText: 'Не выбрана потребность по здоровью',
                form: 'form3'
            },
            {
                title: 'Направленность',
                type: 'dropdown',
                item: 'p2',
                relatedDropdown: 0,
                required: 1,
                width: 'w-80',
                errorText: 'Не выбрана направленность',
                form: 'form3'
            },
            {
                title: 'Режим',
                type: 'dropdown',
                item: 'p3',
                relatedDropdown: 0,
                required: 1,
                width: 'w-3/4',
                errorText: 'Не выбран режим',
                form: 'form3'
            },
            {
                form_title: 'none',
                value: 'Согласие на группу присмотра и ухода',
                type: 'checkbox',
                item: 'agroup',
            },
            {
                form_title: 'none',
                value: 'Согласие на группу полного дня',
                type: 'checkbox',
                item: 'agroup_fd',
            },
        ]
    }
    },
    {form: {
        title: 'свидетельство о рождении ребенка',
        items: [
            {
                title: 'Номер актовой записи',
                type: 'input',
                item: 'c_actnum',
                maxLength: '11',
                width: '320px',

            },
            {
                title: 'Серия документа',
                type: 'input',
                item: 'c_ser',
                required: 1,
                disabled: true,
                width: '320px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Номер документа',
                type: 'input',
                item: 'c_num',
                required: 1,
                disabled: true,
                width: '320px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Дата выдачи',
                type: 'input',
                item: 'c_gdate',
                required: 1,
                disabled: true,
                width: '320px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Кем выдано',
                type: 'date',
                item: 'c_docissuer',
                required: 1,
                width: '200px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Скан-файл свидетельства',
                type: 'file',
                item: 'c_scan',
                required: 1,
                errorText: 'Не загружен файл!',
                form: 'form3'
            },
            
        ]
    }
    },
    {form: {
        title: 'Адрес проживания ребенка',
        items: [
            {
                title: 'Почтовы индекс',
                type: 'input',
                item: 'c_index',
                maxLength: '11',
                required: 1,
                width: '240px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Населенный пункт',
                type: 'input',
                item: 'c_locality',
                required: 1,
                width: '240px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Улица',
                type: 'input',
                item: 'c_street',
                required: 1,
                width: '240px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Дом',
                type: 'input',
                item: 'c_hnum',
                required: 1,
                width: '240px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Корпус',
                type: 'input',
                item: 'c_corp',
                required: 0,
                width: '240px',
            },
            {
                title: 'Квартира',
                type: 'input',
                item: 'c_flat',
                required: 0,
                width: '240px',
            },
            
        ]
    }
    },
    {form: {
        title: 'информация о представители',
        items: [
            {
                title: 'Представитель',
                type: 'input',
                item: 'd_repres',
                maxLength: '11',
                required: 1,
                width: '320px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'СНИЛС',
                type: 'input',
                item: 'd_snils',
                required: 0,
                width: '320px',
            },
            {
                title: 'Фамилия',
                type: 'input',
                item: 'd_fam',
                required: 1,
                width: '320px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Имя',
                type: 'input',
                item: 'd_name',
                required: 1,
                width: '320px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Отчество',
                type: 'input',
                item: 'd_otch',
                required: 0,
                width: '320px',
            },
            {
                title: 'Почтовый индекс',
                type: 'input',
                item: 'd_ind',
                required: 1,
                width: '240px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Населенный пункт',
                type: 'input',
                item: 'd_locality',
                required: 1,
                width: '240px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Улица',
                type: 'input',
                item: 'd_street',
                required: 1,
                width: '240px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Дом',
                type: 'input',
                item: 'd_hnum',
                required: 1,
                width: '240px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Корпус',
                type: 'input',
                item: 'd_corp',
                required: 0,
                width: '240px',
            },
            {
                title: 'Квартира',
                type: 'input',
                item: 'd_flat',
                required: 0,
                width: '240px',
            },
        ]
    }
    },
    {form: {
        title: 'Документ удостоверяющий линость',
        items: [
            {
                form_title: 'none',
                type: 'dropdown',
                item: 'd_doctype',
                relatedDropdown: 0,
                required: 0,
            },
            {
                title: 'Серия документа',
                type: 'input',
                item: 'd_ser',
                required: 0,
                width: '240px',
            },
            {
                title: 'Номер документа',
                type: 'input',
                item: 'd_num',
                required: 1,
                width: '240px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Дата выдачи',
                type: 'input',
                item: 'd_date',
                required: 1,
                width: '240px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Место выдачи документа, подтверждающего личность',
                type: 'input',
                item: 'd_locdoc',
                required: 0,
                width: '240px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: 'Скан-файл документа удостоверяющего личность',
                type: 'file',
                item: 'd_scandoc',
                required: 0,
            },
            {
                title: 'Отпечаток электронной подписи документа (при наличии)',
                type: 'file',
                item: 'd_print',
                required: 0,
            },
        ],
    }
    },
    {form: {
        title: 'Контактные данные',
        items: [
            {
                title: 'Мобильный телефон',
                type: 'input',
                item: 'd_tel',
                required: 1,
                width: '240px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: '',
                type: 'addInput',
                item: 'd_tel2',
                required: 0,
                value: '+Добавить сотовый телефон',
                width: '240px',
            },
            {
                title: 'E-mail',
                type: 'input',
                item: 'd_mail',
                required: 1,
                width: '320px',
                errorText: 'Не заполнено поле!',
                form: 'form3'
            },
            {
                title: '',
                type: 'addInput',
                item: 'd_mail2',
                required: 0,
                value: '+Добавить email',
                width: '320px',
            },
        ],
    }
    },
    {form: {
        title: 'Преимущественное право',
        items: [
            {
                form_title: 'none',
                title: '',
                type: 'radio',
                item: 'law',
                required: 0,

            },
            {   
                // form_title: 'none',
                title: 'ФИО брата или сестры (если несколько, вводить через запятую)',
                type: 'input',
                item: 'fam',
                relatedInput: 'law',
                required: 0,
            },
        ],
    }
    }
]


export const objectRepSlice = createSlice({
    name: 'model',
    initialState,
    reducers:{

    }
})

export default objectRepSlice.reducer