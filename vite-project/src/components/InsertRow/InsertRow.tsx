import {ChangeEvent, useContext, useState} from "react";
import Button from "../Button/Button";
import Toggler from "../Toggler/Toggler";
import InputWithButtons from "../InputWithButtons/InputWithButtons";
import CustomSelect from "../CustomSelect/CustomSelect.tsx";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import TextInput from "../TextInput/TextInput";
import styles from "./InsertRow.module.scss";
import {options} from "./constants.ts";
import {EmployeesContext, EmployeesContextType} from "../../context";
import toast, {Toaster} from "react-hot-toast";

export type FormValuesType = {
    name: string | null,
    age: number | null,
    subscribed: {
        value: string,
        label: string,
    } | null,
    employed: boolean,
    id: string | null,
}

const InsertRow = () => {
    const context = useContext<EmployeesContextType | null>(EmployeesContext);

    const emptyFormValues = {
        name: null,
        age: null,
        subscribed: options[0],
        employed: false,
        id: null,
    }

    const [formValues, setFormValues] = useState<FormValuesType>(emptyFormValues);

    const inputHandleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const {name, value, checked} = evt.target;
        setFormValues({
            ...formValues,
            [name]: evt.target.type === 'checkbox' ? checked : value
        });
    };

    const selectHandleChange = (selectedOption: unknown, name: string) => {
        setFormValues({
            ...formValues,
            [name]: selectedOption,
        });
    }

    const changeAgeHandler = (operation: string) => {
        if (operation === "increment") {
            setFormValues({
                ...formValues,
                age: Number(formValues.age) + 1,
            });
        }

        if (operation === "decrement" && (formValues.age !== null && formValues.age > 0)) {
            setFormValues({
                ...formValues,
                age: Number(formValues.age) - 1,
            });
        }
    }

    const insertNewColumn = () => {
        if (!formValues.name || !formValues.age || !formValues.subscribed) {
            toast('Fill in the name and age fields',
                {
                    icon: '👏',
                    style: {
                        borderRadius: '10px',
                        background: context?.lightMode ? "#595959" : "#979797",
                        color: '#fff',
                        fontSize: "14px",
                        boxShadow: "none",
                    },
                }
            );
            return;
        }

        context?.addNewEmployee(formValues)
        setFormValues(emptyFormValues)
    }

    return (
        <div className={context?.lightMode ? `${styles.insertRow} ${styles.insertRow_light}` : styles.insertRow}>

            <Toaster
                position="top-right"
                reverseOrder={true}
            />

            <span
                className={context?.lightMode ? `${styles.insertRowTitle} ${styles.insertRowTitle_light}` : styles.insertRowTitle}>Insert Row</span>

            <div className={styles.insertRowGroup}>
                <TextInput placeholder={"Name"} type={"text"} name={"name"} onChange={inputHandleChange}
                           value={formValues.name || ""}/>
            </div>

            <div className={styles.insertRowGroup}>
                <InputWithButtons placeholder={"Age"} type={"number"} name={"age"} onChange={inputHandleChange}
                                  changeAgeHandler={changeAgeHandler} value={formValues.age || ""}/>
            </div>

            <div className={styles.insertRowGroup}>
                <CustomSelect options={options} name={"subscribed"} onChange={selectHandleChange}
                              defaultValue={formValues.subscribed}/>
            </div>

            <div className={styles.insertRowGroup}>
                <CustomCheckbox name={"employed"} label={"Employee"} id="1" onChange={inputHandleChange}
                                checked={formValues.employed}/>
            </div>

            <div className={styles.insertRowGroup}>
                <Button text={"Insert"} onClick={insertNewColumn}/>
            </div>

            <div className={styles.insertRowGroup}>
                <div className={styles.formSeparator}/>
            </div>

            <div className={styles.insertRowGroup}>
                <Toggler label="Mode" id={"2"} checked={context?.lightMode || false} onChange={context?.onLightMode}/>
            </div>

            <div className={styles.insertRowGroup}>
                <Button text={"Delete"} onClick={context?.clearList}/>
            </div>
        </div>
    );
};

export default InsertRow;