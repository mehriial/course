import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import type { FormSelectProps } from "@/types/components";

function FormSelect({
    id,
    name,
    placeholder = "Seçin",
    options = [],
    value,
    onValueChange,
}: FormSelectProps) {
    return (
        <Select
            name={name}
            value={value}
            onValueChange={(value) => onValueChange?.(value ?? "")}
        >
            <SelectTrigger id={id} className="w-full h-11!">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
                {options.map((option) => (
                    <SelectItem
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default FormSelect;