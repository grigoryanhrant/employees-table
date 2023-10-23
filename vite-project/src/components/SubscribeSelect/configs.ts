import {StylesConfig} from "react-select";

interface SubscribeOptionType {
    readonly value: string;
    readonly label: string;
}

export const options: SubscribeOptionType[] = [
    {value: 'subscribed', label: 'Subscribed'},
    {value: 'not subscribed', label: 'Not Subscribed'},
    {value: 'other', label: 'Other'}
]

export const selectStyles: StylesConfig = {
    control: styles => ({
        ...styles,
        backgroundColor: '#313131;',
        opacity: "1",
        outline: "none",
        boxShadow: "none",
        border: "1px solid #4A4A4A",
        fontSize: "13px",
        height: "41px",
        '&:hover': {
            border: "1px solid #4A4A4A",
        },
        cursor: "pointer",
    }),
    singleValue: styles => ({
        ...styles,
        color: '#E2E8E1'
    }),
    option: styles => ({
        ...styles,
        backgroundColor: "#313131",
        color: "#E2E8E1",
        cursor: "pointer",
        fontSize: "13px",
        '&:hover': {
            backgroundColor: "#E2E8E1",
            color: "#4A4A4A"
        }
    }),
    menu: styles => ({
        ...styles,
        backgroundColor: "#313131",
        border: "1px solid #4A4A4A",
        boxShadow: "none",
    }),
    dropdownIndicator: styles => ({
        ...styles,
        width: "30px",
        height: "40px",
        padding: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        color: "#E2E8E1",
        backgroundColor: '#595959',
        '&:hover': {
            color: "#E2E8E1"
        }
    })
};