import type { InputHTMLAttributes } from "react";

export interface PasswordInputProps {
    id?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    value?: string;
    onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
}
export interface FormSelectProps {
    id?: string;
    name?: string;
    placeholder?: string;
    options?: {
        label: string;
        value: string;
    }[];
    value?: string;
    onValueChange?: (value: string) => void;
}
export interface DateTimePicker24hProps {
    id?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}


export interface AvatarProps {
    name: string;
}
