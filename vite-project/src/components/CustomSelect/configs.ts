import {StylesConfig} from "react-select";

export function createSelectStyles(lightMode?: boolean) {

    const controlBackgroundColor = lightMode ? "#ccc" : "#313131";
    const dropdownIndicatorBackgroundColor = lightMode ? "#4CAF50" : "#595959";
    const controlBorderColor = lightMode ? "rgb(128, 128, 128)" : "#4A4A4A";

    const styles: StylesConfig = {
        control: styles => ({
            ...styles,
            backgroundColor: controlBackgroundColor,
            opacity: "1",
            outline: "none",
            boxShadow: "none",
            border: `1px solid ${controlBorderColor}`,
            fontSize: "13px",
            height: "41px",
            '&:hover': {
                border: `1px solid ${controlBorderColor}`,
            },
            cursor: "pointer",
            transition: "none",
            overflow: "hidden",
        }),
        singleValue: styles => ({
            ...styles,
            color: "#E2E8E1;",
        }),
        option: styles => ({
            ...styles,
            backgroundColor: controlBackgroundColor,
            color: "#E2E8E1",
            cursor: "pointer",
            fontSize: "13px",
            "&:hover": {
                backgroundColor: controlBackgroundColor,
                color: "#4A4A4A"
            }
        }),
        menu: styles => ({
            ...styles,
            backgroundColor: controlBackgroundColor,
            border: "1px solid #4A4A4A",
            boxShadow: "none",
        }),
        dropdownIndicator: styles => ({
            ...styles,
            width: "30px",
            height: "39px",
            padding: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#E2E8E1",
            backgroundColor: dropdownIndicatorBackgroundColor,
            "&:hover": {
                color: "#E2E8E1;"
            }
        })
    };

    return styles;
}
