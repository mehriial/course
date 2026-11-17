import { NavLink } from "react-router-dom";
import {
    LogOut,
} from "lucide-react";
import HeaderLogo from "../common/logo";
import { menuItems } from "@/data/sidebar";
import { Button } from "../ui/button";
import AvatarComponents from "../common/avatar";

function Sidebar() {

    const userData = {
        name: 'Mehri Ali',
        role: "Müəllim"
    }

    return (
        <aside className="lg:flex hidden fixed left-0 top-0 z-40 h-screen w-64 flex-col border-r bg-white">
            <div className="flex h-16 items-center px-6">
                <HeaderLogo />
            </div>

            <nav className="flex-1 space-y-1 p-4">
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive
                                    ? "bg-primary/20 text-primary"
                                    : "text-gray-600 hover:bg-primary/10 hover:text-primary"
                                }`
                            }
                        >
                            <Icon size={19} />
                            <span>{item.title}</span>
                        </NavLink>
                    );
                })}
            </nav>

            <div className="p-4 space-y-2">
                <div className="flex items-center gap-3 rounded-lg p-2">
                  <AvatarComponents name={userData.name}/>


                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-gray-900">
                            {userData.name}
                        </p>
                        <p className="truncate text-xs text-gray-500">
                            {userData.role}
                        </p>
                    </div>
                </div>

                <Button
                    type="button"
                    className="text-sm font-semibold text-red-700 w-full justify-start pl-4 leading-1"
                    variant='outline'
                >
                    <LogOut size={19} className="rotate-180 mr-2" />
                    Çıxış
                </Button>
            </div>
        </aside>
    );
}

export default Sidebar;