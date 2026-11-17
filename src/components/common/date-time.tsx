
"use client";

import * as React from "react";
import { format, parseISO, isValid } from "date-fns";
import { Calendar1Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import type { DateTimePicker24hProps } from "@/types/components";

export function DateTimePicker24h({
    id,
    name,
    placeholder = "Tarix və saat seçin",
    value,
    onChange,
}: DateTimePicker24hProps) {
    const [date, setDate] = React.useState<Date>();

    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        if (!value) {
            setDate(undefined);
            return;
        }

        const parsedDate = parseISO(value);

        if (isValid(parsedDate)) {
            setDate(parsedDate);
        }
    }, [value]);

    const updateDate = (newDate: Date) => {
        setDate(newDate);

        onChange?.(format(newDate, "yyyy-MM-dd'T'HH:mm:ss"));
    };

    const handleDateSelect = (selectedDate: Date | undefined) => {
        if (!selectedDate) return;

        const newDate = date ? new Date(date) : selectedDate;

        newDate.setFullYear(
            selectedDate.getFullYear(),
            selectedDate.getMonth(),
            selectedDate.getDate()
        );

        updateDate(newDate);
    };

    const handleTimeChange = (
        type: "hour" | "minute",
        value: string
    ) => {
        const newDate = date ? new Date(date) : new Date();

        if (type === "hour") {
            newDate.setHours(Number(value));
        } else {
            newDate.setMinutes(Number(value));
        }

        updateDate(newDate);
    };

    return (
        <>
            {name && (
                <input
                    type="hidden"
                    id={id}
                    name={name}
                    value={value || ""}
                />
            )}

            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger
                    render={
                        <Button
                            type="button"
                            variant="outline"
                            className={cn(
                                "w-full justify-start text-left font-normal h-11!",
                                !date && "text-muted-foreground"
                            )}
                        />
                    }
                >
                    <Calendar1Icon className="mr-2 h-4 w-4" />

                    {date ? (
                        format(date, "dd.MM.yyyy HH:mm")
                    ) : (
                        <span>{placeholder}</span>
                    )}
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0">
                    <div className="sm:flex">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={handleDateSelect}
                        />

                        <div className="flex flex-col sm:flex-row sm:h-75 divide-y sm:divide-y-0 sm:divide-x">
                            <ScrollArea className="w-64 sm:w-auto">
                                <div className="flex sm:flex-col p-2">
                                    {Array.from(
                                        { length: 24 },
                                        (_, i) => i
                                    ).reverse().map((hour) => (
                                        <Button
                                            key={hour}
                                            type="button"
                                            size="icon"
                                            variant={
                                                date?.getHours() === hour
                                                    ? "default"
                                                    : "ghost"
                                            }
                                            className="sm:w-full shrink-0 aspect-square"
                                            onClick={() =>
                                                handleTimeChange(
                                                    "hour",
                                                    hour.toString()
                                                )
                                            }
                                        >
                                            {hour.toString().padStart(2, "0")}
                                        </Button>
                                    ))}
                                </div>

                                <ScrollBar
                                    orientation="horizontal"
                                    className="sm:hidden"
                                />
                            </ScrollArea>

                            <ScrollArea className="w-64 sm:w-auto">
                                <div className="flex sm:flex-col p-2">
                                    {Array.from(
                                        { length: 12 },
                                        (_, i) => i * 5
                                    ).map((minute) => (
                                        <Button
                                            key={minute}
                                            type="button"
                                            size="icon"
                                            variant={
                                                date?.getMinutes() === minute
                                                    ? "default"
                                                    : "ghost"
                                            }
                                            className="sm:w-full shrink-0 aspect-square"
                                            onClick={() =>
                                                handleTimeChange(
                                                    "minute",
                                                    minute.toString()
                                                )
                                            }
                                        >
                                            {minute.toString().padStart(2, "0")}
                                        </Button>
                                    ))}
                                </div>

                                <ScrollBar
                                    orientation="horizontal"
                                    className="sm:hidden"
                                />
                            </ScrollArea>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </>
    );
}
