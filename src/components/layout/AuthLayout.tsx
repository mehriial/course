import { Columns2 } from "lucide-react";
import { Outlet } from "react-router-dom";
import { loginContent } from "../../data/auth-data";
import { useState } from "react";
import type { AuthLeftProps } from "../../types/auth";
import AuthLeft from "../base/auth-left";

function AuthLayout() {
    const [authContent, setAuthContent] = useState<AuthLeftProps>(
        loginContent.student
    );

    return (
        <div className="flex items-center h-screen bg-main-bg">
            <div className="w-[28%] bg-secondary h-full px-14 py-8 text-white flex flex-col justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center bg-primary p-2 rounded-md">
                        <Columns2 />
                    </div>
                    <h1 className="font-bold">Tədris Paneli</h1>
                </div>

               <div>
                 <AuthLeft {...authContent} />
               </div>

                <p className="text-gray-400 text-sm">
                    © 2026 Tədris Paneli
                </p>
            </div>

            <div className="flex-1">
                <Outlet context={{ setAuthContent }} />
            </div>
        </div>
    );
}

export default AuthLayout;