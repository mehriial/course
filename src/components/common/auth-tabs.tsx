import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { AuthTabsProps } from "@/types/auth";

export default function AuthTabs({
    role,
    setRole
}: AuthTabsProps) {
    return (
        <div>
            <Tabs
                value={role}
                onValueChange={(value) =>
                    setRole(value as "student" | "teacher")
                }
                className="mb-6 w-full"
            >
                <TabsList className="h-12! w-full! p-1.5!">
                    <TabsTrigger
                        value="student"
                        className="h-9! text-base!"
                    >
                        Şagird
                    </TabsTrigger>

                    <TabsTrigger
                        value="teacher"
                        className="h-9! text-base!"
                    >
                        Müəllim
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}
