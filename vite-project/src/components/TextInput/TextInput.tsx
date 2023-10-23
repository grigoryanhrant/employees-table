import styles from "./TextInput.module.scss";

const TextInput = () => {
    return (
        <>
            <input placeholder="Name" className={styles.input} type="text" name="name"/>
        </>
    );
};

export default TextInput;