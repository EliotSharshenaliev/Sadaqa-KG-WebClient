import React from 'react';
import {Route, Routes} from "react-router-dom"
import {useAuth} from "../context/auth_context";
import { createRoot } from "react-dom/client";


const HomePage = React.lazy(() => import("../pages/HomePage"))
const LoginPage = React.lazy(() => import("../pages/Login"))


const Router = () => {
    const {isAuthenticated, user} = useAuth();

    if (isAuthenticated && user?.id ) {
        return (
            <Routes>
                <Route path="/:username" element={<HomePage />} />
            </Routes>
        )
    }

    return (
        <Routes>
            {
                isAuthenticated && (
                    <>
                        <Route path="/:username" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<LoginPage/>}/>
                    </>
                )


            }
        </Routes>
    )
}

export default Router
