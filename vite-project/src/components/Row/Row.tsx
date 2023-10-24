import {useContext} from "react";
import {EmployeesContext, EmployeesContextType} from "../../context";
import styles from "./Row.module.scss";
import Remove from "../Icons/Remove.tsx";

type Props = {
    name: string | null;
    age: number | null;
    subscribed: string | undefined;
    employed: string;
    id: string | null;
}

const Row = ({name, age, subscribed, employed, id}: Props) => {

    const context = useContext<EmployeesContextType | null>(EmployeesContext);

    const imageClassname = context?.lightMode ? `${styles.image} ${styles.image_light}` : styles.image;

    return (
        <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{subscribed}</td>
            <td>{employed}</td>
            <td>
                <div className={imageClassname} onClick={() => context?.removeEmployee(id || "")}>
                    <Remove/>
                </div>
            </td>
        </tr>
    );
};

export default Row;