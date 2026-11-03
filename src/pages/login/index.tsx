
import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { loginContent, loginPageContent } from "@/data/auth-data";
import type { AuthContext } from "@/types/auth";
import AuthTabs from "@/components/common/auth-tabs";
import { Checkbox } from "@/components/ui/checkbox";
import PasswordInput from "@/components/common/password-input";

function Login() {
    const [role, setRole] = useState<"student" | "teacher">("student");

    const { setAuthContent } = useOutletContext<AuthContext>();

    const content = loginPageContent[role];

    useEffect(() => {
        setAuthContent(loginContent[role]);
    }, [role, setAuthContent]);

    return (
        <div className="w-full max-w-md mx-auto bg-white p-6 px-8 rounded-xl">

            <AuthTabs
                role={role}
                setRole={setRole}
            />

            <div className="mb-8">
                <h2 className="text-3xl font-bold">
                    {content.title}
                </h2>

                <p className="text-muted-foreground mt-2">
                    {content.description}
                </p>
            </div>

            <form className="space-y-5">
                <div className="space-y-2">
                    <Label htmlFor="email">
                        {content.emailLabel}
                    </Label>

                    <Input
                        id="email"
                        type="email"
                        placeholder={content.emailPlaceholder}
                    />
                </div>

                <PasswordInput
                    id="password"
                    label={content.passwordLabel}
                    placeholder={content.passwordPlaceholder}
                    required
                />

                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="remember-me"
                            name="remember-me"
                            defaultChecked
                        />
                        <Label>Məni xatırla</Label>
                    </div>
                    <Link
                        to="/forgot-password"
                        className="text-sm hover:underline text-primary font-medium"
                    >
                        Şifrəni unutmusunuz?
                    </Link>
                </div>

                <Button type="submit" className="w-full" variant='default'>
                    Daxil ol
                </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
                Hesabınız yoxdur?{" "}

                <Link
                    to="/register"
                    state={{ role }}
                    className="text-primary font-semibold hover:underline"
                >
                    {content.registerText}
                </Link>
            </p>
        </div>
    );
}

export default Login;
