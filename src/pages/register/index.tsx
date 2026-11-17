
import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { registerContent } from "@/data/auth-data";
import type { AuthContext } from "@/types/auth";

import AuthTabs from "@/components/base/auth/auth-tabs";
import { registerPageContent } from "./template";

import PasswordInput from "@/components/common/password-input";
import { DateTimePicker24h } from "@/components/common/date-time";
import FormSelect from "@/components/common/form-select";

import ApiManager from "@/api/ApiManager";
import { toast } from "sonner";

type Role = "student" | "teacher";

interface RegisterFormData {
    name: string;
    time: string;
    parent_name: string;
    city: string;
    phone: string;
    email: string;
    grade: string;
    password: string;
    password_confirmation: string;
}

const initialFormData: RegisterFormData = {
    name: "",
    time: "",
    parent_name: "",
    city: "",
    phone: "",
    email: "",
    grade: "",
    password: "",
    password_confirmation: "",
};

type FormsData = Record<Role, RegisterFormData>;

function Register() {
    const [role, setRole] = useState<Role>("student");

    const [formData, setFormData] = useState<FormsData>({
        student: { ...initialFormData },
        teacher: { ...initialFormData },
    });

    const [loading, setLoading] = useState(false);

    const { setAuthContent } = useOutletContext<AuthContext>();
    const navigate = useNavigate();

    const content = registerPageContent[role];

    const currentFormData = formData[role];

    useEffect(() => {
        setAuthContent(registerContent[role]);
    }, [role, setAuthContent]);

    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [role]: {
                ...prev[role],
                [name]: value,
            },
        }));
    };

const handleRegister = async () => {
    const currentFormData = formData[role];

    if (
        currentFormData.password !==
        currentFormData.password_confirmation
    ) {
        toast.error("Şifrələr eyni deyil");
        return;
    }

    const payload =
        role === "student"
            ? {
                name: currentFormData.name,
                time: currentFormData.time,
                parent_name: currentFormData.parent_name,
                city: currentFormData.city,
                phone: currentFormData.phone,
                email: currentFormData.email,
                grade: currentFormData.grade,
                password: currentFormData.password,
                password_confirmation:
                    currentFormData.password_confirmation,
            }
            : {
                ...currentFormData,
            };

    try {
        setLoading(true);

        const endpoint =
            role === "student"
                ? "/student/register"
                : "/teacher/register";


        const response = await ApiManager(
            endpoint,
            "POST",
            payload
        );

        console.log("API RESPONSE:", response);

        toast.success("Qeydiyyat uğurla tamamlandı!");
        navigate("/");
    } catch (error) {
        console.error("REGISTER ERROR:", error);

        const apiError = error as {
            message?: string;
            data?: {
                message?: string;
                errors?: Record<string, string[]>;
            };
        };

        const validationErrors = apiError.data?.errors;

        if (validationErrors) {
            Object.values(validationErrors).forEach((messages) => {
                messages.forEach((message) => toast.error(message));
            });
        } else {
            toast.error(
                apiError.data?.message ||
                apiError.message ||
                "Qeydiyyat zamanı xəta baş verdi"
            );
        }
    } finally {
        setLoading(false);
    }
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void handleRegister();
};


    return (
        <div className="w-full max-w-4xl mx-auto bg-white p-5 sm:p-6 lg:px-8 rounded-xl">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="sm:mb-4">
                    <h2 className="text-2xl sm:text-3xl font-bold">
                        {content.title}
                    </h2>

                    <p className="text-muted-foreground mt-2 font-medium text-sm">
                        {content.description}
                    </p>
                </div>

                <div className="w-full sm:w-2/5">
                    <AuthTabs
                        role={role}
                        setRole={setRole}
                    />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5">
                    {content.fields.map((field) => (
                        <div
                            key={field.id}
                            style={{
                                gridColumn: `span ${field.col ?? 6} / span ${field.col ?? 6}`,
                            }}
                            className="space-y-2"
                        >
                            <Label htmlFor={field.id}>
                                {field.label}
                            </Label>

                            {field.type === "password" ? (
                                <PasswordInput
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    className="h-11!"
                                    value={currentFormData[field.id as keyof RegisterFormData] || ""}
                                    onChange={(e) =>
                                        handleChange(field.id, e.target.value)
                                    }
                                />
                            ) : field.type === "date-time" ? (
                                <DateTimePicker24h
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    value={currentFormData[field.id as keyof RegisterFormData] || ""}
                                    onChange={(value) =>
                                        handleChange(field.id, value)
                                    }
                                />
                            ) : field.type === "select" ? (
                                <FormSelect
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    options={field.options}
                                    value={currentFormData[field.id as keyof RegisterFormData] || ""}
                                    onValueChange={(value) =>
                                        handleChange(field.id, value)
                                    }
                                />
                            ) : (
                                <Input
                                    id={field.id}
                                    name={field.id}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="h-11!"
                                    value={currentFormData[field.id as keyof RegisterFormData] || ""}
                                    onChange={(e) =>
                                        handleChange(field.id, e.target.value)
                                    }
                                />
                            )}
                        </div>
                    ))}
                </div>

             <Button
    type="button"
    className="w-full"
    variant="default"
    size="lg"
    disabled={loading}
    onClick={() => void handleRegister()}
>
    {loading ? "Qeydiyyat aparılır..." : content.registerText}
</Button>

            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
                Artıq hesabın var?{" "}

                <Link
                    to="/"
                    className="text-primary font-semibold hover:underline"
                >
                    Daxil ol
                </Link>
            </p>
        </div>
    );
}

export default Register;
