export interface interfaceModelObject {
    [key: string]: {
        title: string;
        items: {
            title?: string;
            type: string;
            item: string;
            relatedInput?: number | string;
            required?: number;
            errorText?: string;
            form?: string;
            width?: string;
            relatedDropdown?: string | number;
            maxLength?: string;
            form_title?: string;
            value?: string;
            disabled?: boolean;
        }[]
    }
}[]