import type { AuthLeftProps } from "@/types/auth";

export const loginContent: Record<string, AuthLeftProps> = {
    student: {
        title: "Şagirdlər və müəllimlər — bir paneldə.",
        description:
            "Dərs cədvəlinizi, qiymətlərinizi və şəxsi məlumatlarınızı vahid paneldən idarə edin.",
        features: [
            "Dərs cədvəlinə baxış",
            "Qiymət və davamiyyət məlumatları",
            "Şəxsi profil idarəsi",
        ],
    },

    teacher: {
        title: "Dərslərinizi və şagirdlərinizi bir yerdən idarə edin.",
        description:
            "Şagirdlərinizi, dərs vaxtlarını və tədris məlumatlarını vahid paneldən idarə edin.",
        features: [
            "Şagird siyahılarının idarəsi",
            "Dərs vaxtlarının planlaşdırılması",
            "Şəxsi profil idarəsi",
        ],
    },
};

export const loginPageContent = {
    student: {
        title: "Şagird girişi",
        description: "Email və şifrənizlə daxil olun.",
        emailLabel: "Email",
        emailPlaceholder: "sagird@example.com",
        passwordLabel: "Şifrə",
        passwordPlaceholder: "••••••••",
        registerText: "Qeydiyyatdan keç",
    },
    teacher: {
        title: "Müəllim girişi",
        description: "Email və şifrənizlə daxil olun.",
        emailLabel: "Email",
        emailPlaceholder: "muellim@example.com",
        passwordLabel: "Şifrə",
        passwordPlaceholder: "••••••••",
        registerText: "Qeydiyyatdan keç",
    },
};