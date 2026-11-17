import { Outlet } from "react-router-dom";
import { loginContent } from "../../data/auth-data";
import { useState } from "react";
import type { AuthLeftProps } from "../../types/auth";
import AuthLeft from "../base/auth/auth-left";
import HeaderLogo from "../common/logo";

function AuthLayout() {
    const [authContent, setAuthContent] = useState<AuthLeftProps>(
        loginContent.student
    );

    return (
        <div className="flex items-center h-screen bg-main-bg">
            <div className="w-[28%] bg-secondary h-full px-14 py-8 text-white flex flex-col justify-between">
                <HeaderLogo />

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