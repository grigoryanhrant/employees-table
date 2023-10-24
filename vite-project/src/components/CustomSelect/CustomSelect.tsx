import Select from "react-select";
import styles from "./CustomSelect.module.scss";
import {createSelectStyles} from "./configs.ts";
import {useContext} from "react";
import {EmployeesContext, EmployeesContextType} from "../../context";

export interface SelectOptionsType {
    readonly value: string;
    readonly label: string;
}

type Props = {
    options: SelectOptionsType[];
    name: string;
    onChange: (selectedOption: unknown, name: string) => void;
    defaultValue: any;
}

const CustomSelect = ({options, name, onChange, defaultValue}: Props) => {

    const context = useContext<EmployeesContextType | null>(EmployeesContext);

    const dynamicStyles = createSelectStyles(context?.lightMode);

    return (
        <Select
            defaultValue={options[0]}
            value={defaultValue}
            options={options}
            className={styles.subscribeSelect}
            name={name}
            onChange={(evt) => onChange(evt, name)}
            styles={dynamicStyles} components={{
            IndicatorSeparator: () => null
        }}/>
    );
};

export default CustomSelect;