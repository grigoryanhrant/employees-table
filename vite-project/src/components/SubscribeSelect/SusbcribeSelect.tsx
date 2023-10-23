import Select from "react-select";
import {options, selectStyles} from "./configs.ts";
import styles from "./SubscribeSelect.module.scss";

const SusbcribeSelect = () => {
    return (
        <Select
            defaultValue={options[0]}
            options={options}
            className={styles.subscribeSelect}
            name="subscribed"
            styles={selectStyles} components={{
            IndicatorSeparator: () => null
        }}/>
    );
};

export default SusbcribeSelect;