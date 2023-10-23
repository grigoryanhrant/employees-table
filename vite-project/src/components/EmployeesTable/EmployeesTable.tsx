import styles from "./EmployeesTable.module.scss";

const EmployeesTable = () => {
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Subscription</th>
                    <th>Employment</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John Smith</td>
                    <td>32</td>
                    <td>Subscribed</td>
                    <td>Employed</td>
                </tr>
                <tr>
                    <td>John Smith</td>
                    <td>32</td>
                    <td>Subscribed</td>
                    <td>Employed</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EmployeesTable;