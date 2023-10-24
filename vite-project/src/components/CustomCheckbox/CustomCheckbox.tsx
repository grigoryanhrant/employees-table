import styles from "./CustomCheckbox.module.scss";
import {ChangeEventHandler, useContext} from "react";
import {EmployeesContext, EmployeesContextType} from "../../context";

type Props = {
    name: string
    label: string
    id: string
    onChange: ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
}

const CustomCheckbox = ({name, label, id, onChange, checked}: Props) => {

    const context = useContext<EmployeesContextType | null>(EmployeesContext);

    const inputClassname = context?.lightMode ? `${styles.customCheckbox} ${styles.customCheckbox_light}` : styles.customCheckbox;

    return (
        <>
            <input
                className={inputClassname}
                id={id}
                name={name}
                type="checkbox"
                onChange={onChange}
                checked={checked}
            />
            <label htmlFor={id} className={styles.customCheckboxLabel}>
                {label}
            </label>
        </>
    );
};

export default CustomCheckbox;