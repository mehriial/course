
import { Outlet } from "react-router-dom";
import Sidebar from "../common/sidebar";

function MainLayout() {
    return (
        <div className="flex min-h-screen bg-[#F4F5F7]">
            <Sidebar />

            <main className="ml-0 min-h-screen min-w-0 flex-1 p-4 sm:px-6 sm:py-2 lg:ml-64 lg:px-12">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;
