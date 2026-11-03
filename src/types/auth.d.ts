export interface AuthLeftProps {
    title: string;
    description: string;
    features: string[];
}

export interface AuthContext {
    setAuthContent: (content: AuthLeftProps) => void;
}

type UserRole = 'student' | 'teacher';

declare interface AuthTabsProps {
    role: string;
    setRole: (newRole: UserRole) => void;
}