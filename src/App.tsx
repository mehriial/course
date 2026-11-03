import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "@/components/layout/AuthLayout";
import Login from "@/pages/login";

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/",
                element: <Login />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;