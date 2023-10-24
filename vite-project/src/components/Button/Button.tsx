import styles from "./Button.module.scss";
import {useContext} from "react";
import {EmployeesContext, EmployeesContextType} from "../../context";

type Props = {
    text: string;
    onClick: (() => void) | undefined
}

const Button = ({text, onClick}: Props) => {

    const context = useContext<EmployeesContextType | null>(EmployeesContext);

    const className = context?.lightMode ? `${styles.button} ${styles.button_light}` : styles.button;

    return (
        <button type="button" className={className} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;