import Arrow from "../Icons/Arrow.tsx";
import styles from "./InputWithButtons.module.scss";
import {ChangeEventHandler, useContext} from "react";
import {EmployeesContext, EmployeesContextType} from "../../context";

type Props = {
    placeholder: string;
    type: string;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    changeAgeHandler: any;
    value: string | number;
}

const InputWithButtons = ({ placeholder, type, name, onChange, changeAgeHandler, value }: Props) => {
    const context = useContext<EmployeesContextType | null>(EmployeesContext);


    const inputWithButtons = context?.lightMode ? `${styles.inputWithButtons} ${styles.inputWithButtons_light}` : styles.inputWithButtons;
    const inputClassname = context?.lightMode ? `${styles.input} ${styles.input_light}` : styles.input;
    const buttonClassname = context?.lightMode ? `${styles.settings} ${styles.settings_light}` : styles.settings;

    return (
        <div className={inputWithButtons}>
            <input placeholder={placeholder} className={inputClassname} type={type} name={name} onChange={onChange} value={value}/>
            <div className={buttonClassname} onClick={() => changeAgeHandler('decrement', name)}>
                <Arrow fill={"#E2E8E1"}/>
            </div>

            <div className={`${buttonClassname} ${styles.rotate}`} onClick={() => changeAgeHandler('increment', name)}>
                <Arrow fill={"#E2E8E1"}/>
            </div>
        </div>
    );
};

export default InputWithButtons;