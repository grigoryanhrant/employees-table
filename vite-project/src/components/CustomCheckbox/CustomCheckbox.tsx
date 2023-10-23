import styles from "./CustomCheckbox.module.scss";

const CustomCheckbox = () => {
    return (
        <>
            <input
                className={styles.customCheckbox}
                id="myCheckbox"
                name="employed"
                type="checkbox"
            />
            <label htmlFor="myCheckbox" className={styles.customCheckboxLabel}>
                Employed
            </label>
        </>
    );
};

export default CustomCheckbox;