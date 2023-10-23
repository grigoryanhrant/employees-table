import EmployeesTable from "./components/EmployeesTable/EmployeesTable.tsx";
import InsertRow from "./components/InsertRow/InsertRow.tsx";
import "./main.scss";

const App = () => {
    return (
        <div className={"app"}>
            <InsertRow/>
            <EmployeesTable/>
        </div>
    );
};

export default App;