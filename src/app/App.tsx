import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ModalProvider} from "../context/profile_modal";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "../context/auth_context";
import Router from "../router";


function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ModalProvider>
                    <Router/>
                </ModalProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
