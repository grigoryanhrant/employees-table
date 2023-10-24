import styles from "./TextInput.module.scss";
import {ChangeEventHandler, useContext} from "react";
import {EmployeesContext, EmployeesContextType} from "../../context";

type Props = {
    placeholder: string;
    type: string;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string;
}

const TextInput = ({placeholder, type, name, value, onChange}: Props) => {

    const context = useContext<EmployeesContextType | null>(EmployeesContext);

    const inputClassname = context?.lightMode ? `${styles.input} ${styles.input_light}` : styles.input;

    return (
        <input placeholder={placeholder} className={inputClassname} type={type} name={name} onChange={onChange}
               value={value}/>
    )
};

export default TextInput;