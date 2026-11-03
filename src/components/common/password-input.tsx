
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function PasswordInput({
    id = "password",
    label = "Şifrə",
    placeholder = "Şifrənizi daxil edin",
    name = "password",
    required = false,
    className,
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="space-y-2">
            <Label htmlFor={id}>{label}</Label>

            <div className="relative">
                <Input
                    id={id}
                    name={name}
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    required={required}
                    className={`pr-12 ${className ?? ""}`}
                />

                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"
                    aria-label={showPassword ? "Şifrəni gizlət" : "Şifrəni göstər"}
                >
                    {showPassword ? (
                        <EyeOff size={18} />
                    ) : (
                        <Eye size={18} />
                    )}
                </Button>
            </div>
        </div>
    );
}
