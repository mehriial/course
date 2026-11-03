import type { AuthLeftProps } from "@/types";

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
        title: "Tədris prosesini asanlıqla idarə edin.",
        description:
            "Şagirdlərinizi, dərs vaxtlarını və tədris məlumatlarını vahid paneldən idarə edin.",
        features: [
            "Şagird siyahılarının idarəsi",
            "Dərs vaxtlarının planlaşdırılması",
            "Şəxsi profil idarəsi",
        ],
    },
};