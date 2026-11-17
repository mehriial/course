import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

interface InputIconProps {
    id?: string;
    placeholder?: string;
    icon?: React.ElementType;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
}

function InputIcon({
    id,
    placeholder = "Axtar...",
    icon: Icon = Search,
    value,
    onChange,
    className,
}: InputIconProps) {
    return (
        <InputGroup className={className}>
            <InputGroupInput
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            />

            <InputGroupAddon align="inline-start">
                <Icon className="text-muted-foreground" />
            </InputGroupAddon>
        </InputGroup>
    );
}

export default InputIcon;