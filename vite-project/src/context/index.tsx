import {createContext, useEffect, useState} from "react";
import {FormValuesType} from "../components/InsertRow/InsertRow.tsx";

export type EmployeesContextType = {
    employees: FormValuesType[];
    addNewEmployee: (newEmployee: FormValuesType) => void;
    clearList: () => void;
    lightMode: boolean;
    onLightMode: () => void;
    removeEmployee: (id: string) => void;
};

export const EmployeesContext = createContext<EmployeesContextType | null>(null);

export function EmployeesProvider({children}: { children: any }) {

    const initialState = {
        employees: localStorage.getItem("employees"),
        lightMode: localStorage.getItem("lightMode"),
    }

    const initialEmployees = initialState.employees && JSON.parse(initialState.employees);

    const initialLightMode = initialState.lightMode && JSON.parse(initialState.lightMode);

    const [employees, setEmployees] = useState<FormValuesType[]>(initialEmployees);

    const [lightMode, setLightMode] = useState<boolean>(initialLightMode);

    const addNewEmployee = (newEmployee: FormValuesType) => {
        setEmployees((prev) => [...prev, {...newEmployee, id: Math.random().toString(16).slice(2)}])
    }

    const removeEmployee = (id: string) => {
        const filteredEmployees = employees.filter((employee) => employee.id !== id)
        setEmployees(filteredEmployees);
    }

    const onLightMode = () => setLightMode((prev) => !prev);

    const clearList = () => setEmployees([]);

    useEffect(() => {
        localStorage.setItem("employees", JSON.stringify(employees));
        localStorage.setItem("lightMode", JSON.stringify(lightMode));
    }, [lightMode, employees])

    return (
        <EmployeesContext.Provider
            value={{employees, addNewEmployee, clearList, lightMode, onLightMode, removeEmployee}}>
            {children}
        </EmployeesContext.Provider>
    );
}