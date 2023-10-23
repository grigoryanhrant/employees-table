import {useState} from "react";
import Button from "../Button/Button.tsx";
import Toggler from "../Toggler/Toggler.tsx";
import "./InsertRow.module.scss";
import styles from "./InsertRow.module.scss";
import InputWithButtons from "../InputWithButtons/InputWithButtons.tsx";
import SusbcribeSelect from "../SubscribeSelect/SusbcribeSelect.tsx";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox.tsx";
import TextInput from "../TextInput/TextInput.tsx";

const InsertRow = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        age: "",
        subscribed: "",
        employed: false,
    });
    console.log(formValues, setFormValues);

    return (
        <div className={styles.insertRow}>
            <span className={styles.insertRowTitle}>Insert Row</span>

            <div className={styles.insertRowGroup}>
                <TextInput />
            </div>

            <div className={styles.insertRowGroup}>
                <InputWithButtons />
            </div>

            <div className={styles.insertRowGroup}>
                <SusbcribeSelect />
            </div>

            <div className={styles.insertRowGroup}>
                <CustomCheckbox />
            </div>

            <div className={styles.insertRowGroup}>
                <Button text={"Insert"} onClick={() => 'void'}/>
            </div>

            <div className={styles.insertRowGroup}>
                <div className={styles.formSeparator}/>
            </div>

            <div className={styles.insertRowGroup}>
                <Toggler label="Mode" onChange={() => {}}/>
            </div>

            <div className={styles.insertRowGroup}>
                <Button text={"Delete"} onClick={() => 'void'}/>
            </div>
        </div>
    );
};

export default InsertRow;