export interface AuthLeftProps {
    title: string;
    description: string;
    features: string[];
}

export interface AuthContext {
    setAuthContent: (content: AuthLeftProps) => void;
}

export type UserRole = "student" | "teacher";

export interface AuthTabsProps {
    role: UserRole;
    setRole: (newRole: UserRole) => void;
}
export interface RegisterField {
    id: string;
    label?: string;
    placeholder?: string;
    type: "text" | "tel" | "email" | "password" | "date-time" | "select";
    col?: number;
    options?: {
        label: string;
        value: string;
    }[];
}

export interface RegisterPageContent {
    title: string;
    description: string;
    registerText: string;
    fields: RegisterField[];
}

export interface RegisterPageProps {
    student: RegisterPageContent;
    teacher: RegisterPageContent;
}
