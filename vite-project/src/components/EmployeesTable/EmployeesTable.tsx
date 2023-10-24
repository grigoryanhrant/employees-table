import styles from "./EmployeesTable.module.scss";
import {useContext} from "react";
import {EmployeesContext, EmployeesContextType} from "../../context";
import Row from "../Row/Row.tsx";

const EmployeesTable = () => {
    const context = useContext<EmployeesContextType | null>(EmployeesContext);

    const tableWrapperStyles = context?.lightMode ? `${styles.tableWrapper} ${styles.tableWrapper_light}` : styles.tableWrapper;

    const rowsRender = context?.employees.map(
        ({name, age, subscribed, employed, id}, index) => {
            return (
                <Row
                    key={index}
                    name={name}
                    age={age}
                    subscribed={subscribed?.label}
                    id={id}
                    employed={employed ? "Employed" : "Unemployed"}/>
            )
        })

    return (
        <div className={tableWrapperStyles}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Subscription</th>
                    <th>Employment</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {rowsRender}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeesTable;