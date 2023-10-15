import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "../context/auth_context";
import ProtectedRouter from "../router";


function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ProtectedRouter/>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
