import { interfaceOutputForm } from "../../types/interfaceOutputForm";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState:interfaceOutputForm = {
    //информация о доу
    municipality: {id: 0, value: '', required: 1}, //  муниципалитет
    desired_kindergarten_id: {id: 0, value: '', required: 1}, // желаемый доу
    lgroup: {id: 0, value: '', required: 1}, //  группа по языку
    wdate: {id: 0, value: '', required: 1}, //  желаемая дата поступления
    wrem: {id: 0, value: '', required: 1}, //  согласие на временную путевку
    privilege: {id: 0, value: '', file: '', required: 1}, // право на преимущественное зачисление

    //информация о ребенке
    c_snils: {id: 0, value: '', required: 0}, //СНИЛС ребенка
    c_fam: {id: 0, value: '', required: 1}, //Фамилия ребенка
    c_name: {id: 0, value: '', required: 1}, //Имя ребенка
    c_otch: {id: 0, value: '', required: 0}, // Отчество ребенка
    c_bdate: {id: 0, value: '', required: 1}, // Дата рождения ребенка
    c_sex: {id: 0, value: '', required: 1}, // Пол ребенка
    c_citizenship: {id: 0, value: '', required: 1}, //Гражданство ребенка
    p1: {id: 0, value: '', required: 1}, // Потребность по здоровью
    p2: {id: 0, value: '', required: 1},//Направленность
    p3: {id: 0, value: '', required: 1},//Режим
    agroup: {id: 0, value: '', required: 0},//Согласие на группу присмотра и ухода
    agroup_fd: {id: 0, value: '', required: 0},//Согласие на группу полного дня

    //Свидетельство о рождении ребенка
    c_actnum: {id: 0, value: '', required: 0},//Номер актовой записи
    c_doctype: {id: 0, value: '', required: 1}, //Вид документа
    c_ser: {id: 0, value: '', required: 1}, // Серия документа
    c_num: {id: 0, value: '', required: 1}, //номер документа
    c_gdate: {id: 0, value: '', required: 1}, //  дата выдачи
    c_docissuer: {id: 0, value: '', required: 1}, //Кем выдано
    c_scan: {id: 0, value: '', required: 1},//Скан-файл свидетельства

    //Адрес проживания ребенка
    c_index: {id: 0, value: '', required: 1}, // Населенный пункт
    c_locality: {id: 0, value: '', required: 1}, // Населенный пункт
    c_street: {id: 0, value: '', required: 1},//Улица
    c_hnum: {id: 0, value: '', required: 1},//Дом
    c_corp: {id: 0, value: '', required: 0},//Корпус
    c_flat: {id: 0, value: '', required: 0},//Квартира

    //Информация о представители
    d_repres: {id: 0, value: '', required: 1}, // Представитель
    d_snils: {id: 0, value: '', required: 0}, //СНИЛС
    d_fam: {id: 0, value: '', required: 1}, //Фамилия
    d_name: {id: 0, value: '', required: 1},//Имя
    d_otch: {id: 0, value: '', required: 0},//Отчество
    d_ind: {id: 0, value: '', required: 1},//Почтовый индекс
    d_locality: {id: 0, value: '', required: 1}, //Населенный пункт
    d_street: {id: 0, value: '', required: 1},//Улица
    d_hnum: {id: 0, value: '', required: 1}, //Дом
    d_corp: {id: 0, value: '', required: 0}, // Корпус
    d_flat: {id: 0, value: '', required: 0}, // Квартира 

    //Документ удостоверющий личность
    d_doctype: {id: 0, value: '', required: 0},// Вид документа документа удостоверяющего личность
    d_ser: {id: 0, value: '', required: 0}, //Серия документа удостоверяющего личность
    d_num: {id: 0, value: '', required: 0}, //Номер документа удостоверяющего личность
    d_date: {id: 0, value: '', required: 1},//Дата выдачи документа удостоверяющего личность
    d_locdoc: {id: 0, value: '', required: 1},//Место выдачи документа, подтверждающего личность
    d_scandoc: {id: 0, value: '', required: 0},//Скан-файл документа удостоверяющего личность
    d_print: {id: 0, value: '', required: 0}, //Отпечаток электронной подписи документа (при наличии)

    // Контактные данные
    d_mail: {id: 0, value: '', required: 1}, // Email 
    d_mail2: {id: 0, value: '', required: 0}, // Email дополнительный
    d_tel: {id: 0, value: '', required: 1}, // Номер телефона
    d_tel2: {id: 0, value: '', required: 0}, // Номер телефона дополнительный

    // Преимещественное право
    law: {id: 0, value: '', required: 0}, // Имеет или не имеет преимущественное право
    fam: {id: 0, value: '', required: 0}, // Если имеет, тогда получаем ФИО брата или сестры
    c_serv: {id: 0, value: '', required: 0},
}

interface IOutputSlice {
    item: string | number;
    value: any;
}

export const OutputSlice = createSlice({
    name: 'outputData',
    initialState,
    reducers:{
        selectedItem(state, action: PayloadAction<IOutputSlice>) {
            state[action.payload.item]['value'] = action.payload.value
        },
        checkboxOutputForm(state, action: PayloadAction<string>) {
            state[action.payload]['value'] = !state[action.payload]['value']
        }
    }
})

export default OutputSlice.reducer