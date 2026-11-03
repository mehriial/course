import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import type { AuthContext } from "../../layout/AuthLayout";
import { loginContent } from "../../../data/auth-data";

function Login() {
    const [role, setRole] = useState<"student" | "teacher">("student");
    const [showPassword, setShowPassword] = useState(false);

    const { setAuthContent } = useOutletContext<AuthContext>();

    useEffect(() => {
        setAuthContent(loginContent[role]);
    }, [role, setAuthContent]);

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold">
                    Hesabınıza daxil olun
                </h2>
                <p className="text-muted-foreground mt-2">
                    Davam etmək üçün hesab növünüzü seçin.
                </p>
            </div>

            <Tabs
                value={role}
                onValueChange={(value) => setRole(value as "student" | "teacher")}
                className="mb-6"
            >
                <TabsList className="grid grid-cols-2 w-full">
                    <TabsTrigger value="student">Şagird</TabsTrigger>
                    <TabsTrigger value="teacher">Müəllim</TabsTrigger>
                </TabsList>
            </Tabs>

            <form className="space-y-5">
                <div className="space-y-2">
                    <Label htmlFor="email">E-poçt ünvanı</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="example@mail.com"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Şifrə</Label>

                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Şifrənizi daxil edin"
                            className="pr-10"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Link
                        to="/forgot-password"
                        className="text-sm text-secondary hover:underline"
                    >
                        Şifrəni unutmusunuz?
                    </Link>
                </div>

                <Button type="submit" className="w-full">
                    Daxil ol
                </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
                Hesabınız yoxdur?{" "}
                <Link
                    to="/register"
                    className="text-secondary font-semibold hover:underline"
                >
                    Qeydiyyatdan keçin
                </Link>
            </p>
        </div>
    );
}

export default Login;