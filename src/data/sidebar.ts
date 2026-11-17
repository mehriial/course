import { GraduationCap, LayoutDashboard, User, Users } from "lucide-react";

export const menuItems = [
    {
        title: "Əsas səhifə",
        path: "/home",
        icon: LayoutDashboard,
    },
    {
        title: "Bütün şagirdlər",
        path: "/students",
        icon: Users,
    },
    {
        title: "Bütün müəllimlər",
        path: "/teachers",
        icon: GraduationCap,
    },
    {
        title: "Profil",
        path: "/profile",
        icon: User,
    },
];
