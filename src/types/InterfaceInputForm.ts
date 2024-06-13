export interface intDataTable {
    [key: string]: {
            id: number;
            value: string;
            checked?: string;
            items?: {
                id: number;
                value: string;
            }[]
        }[]
}

export type ActionInputForm = {
    type: any;
}