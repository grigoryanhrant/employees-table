import EmployeesTable from "./components/EmployeesTable/EmployeesTable.tsx";
import InsertRow from "./components/InsertRow/InsertRow.tsx";
import "./main.scss";
import {useContext} from "react";
import {EmployeesContext, EmployeesContextType} from "./context";

const App = () => {

    const context = useContext<EmployeesContextType | null>(EmployeesContext);

    const appClassname = context?.lightMode ? "app app-light" : "app";

    return (
        <div className={appClassname}>
            <div className={"container"}>
                <InsertRow/>
                <EmployeesTable/>
            </div>
        </div>
    );
};

export default App;