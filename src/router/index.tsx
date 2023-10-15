import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom"
import {useAuth} from "../context/auth_context";
import { createRoot } from "react-dom/client";


const HomePage = React.lazy(() => import("../pages/HomePage"))
const LoginPage = React.lazy(() => import("../pages/Login"))


const ProtectedRouter = () => {
    const {isAuthenticated, user} = useAuth();
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={"*"} element={<Navigate to={"/"}/>}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/register" element={<LoginPage/>}/>
            <Route path={"*"} element={<Navigate to={"/"}/>}/>
        </Routes>
    )
}

export default ProtectedRouter
