import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {EmployeesProvider} from "./context";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <EmployeesProvider>
            <App/>
        </EmployeesProvider>
    </React.StrictMode>,
)
