export interface interfaceAlerter {
    [key: string]: boolean;
}

interface falseState {
    type: 'falseState';
    payload: string;
    value: boolean;
}

interface changeState {
    type: 'changeState';
    payload: string;
    value: boolean;
}

export type actionAlerter = falseState | changeState