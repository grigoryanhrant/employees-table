import styles from "./InputWithButtons.module.scss";
import Arrow from "../Icons/Arrow.tsx";

const InputWithButtons = () => {
    return (
        <div className={styles.inputWithButtons}>
            <input placeholder="Age" className={styles.input} type="number" name="age"/>
            <div className={styles.settings}>
                <Arrow/>
            </div>
            <div className={`${styles.settings} ${styles.rotate}`}>
                <Arrow/>
            </div>
        </div>
    );
};

export default InputWithButtons;