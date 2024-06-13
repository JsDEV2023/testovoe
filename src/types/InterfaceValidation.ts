export interface agr {
    [key: string]: boolean
}

export interface interfaceValidation  {
    form1: boolean;
    form2: boolean;
    form3: boolean;
    formAgreement: agr
}

interface falseValidation {
    type: 'falseValidation';
    payload: string;
    value: boolean;
}

interface trueValidation {
    type : 'trueValidation';
    payload: string;
    value: boolean;
}

interface checkboxToggle {
    type: 'checkboxToggle';
    payload: 'formAgreement';
    agreement: string;
}

export type actionTypeValidation = falseValidation | trueValidation | checkboxToggle