import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "@/components/layout/AuthLayout";
import Login from "@/pages/login";
import Register from "@/pages/register";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/home";

export const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
        ],
    },
]);