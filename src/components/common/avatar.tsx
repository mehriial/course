import type { AvatarProps } from "@/types/components";
import { Avatar, AvatarFallback } from "../ui/avatar";

export default function AvatarComponents({
    name
}: AvatarProps) {

    const text = name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()

    return (
        <>
            <Avatar className="size-9 rounded-full bg-secondary">
                <AvatarFallback className="rounded-full bg-secondary text-xs font-semibold text-green-dot">
                    {text}
                </AvatarFallback>
            </Avatar>
        </>
    )
}
