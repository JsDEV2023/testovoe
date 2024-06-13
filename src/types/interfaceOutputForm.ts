export interface interfaceOutputForm {
    [key: string]: {
        id: number;
        value: string | boolean;
        required: number;
        file?: string;
    }
}

interface selectedItem {
    type: 'selectedItem';
    payload: string;
    id: number ;
    value: string ;
}

interface checkboxOutputForm {
    type: 'checkboxOutputForm';
    payload: any;

}

export type actionType = selectedItem | checkboxOutputForm