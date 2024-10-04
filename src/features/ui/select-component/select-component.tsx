"use client";
import { useReminderStore } from "@/store/reminder.store";
import { Tag } from "@chakra-ui/react";
import React, { ComponentProps, useState } from "react"

type CustomSelectProps = ComponentProps<"select">;

interface ReminderProps {
    options: string[];
    ismultiple?: boolean;
    isvalue?: string | string[];
}

type CombinedProps = ReminderProps & CustomSelectProps;

export default function SelectComponent({ options, name, onChange, isvalue, ismultiple }: CombinedProps) {

    const { tags, selectPriority, addTags, removeTags, setPriority } = useReminderStore(); // Obtener estado y funciones del store

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;

        if (ismultiple) {
            if (!tags.includes(selectedValue)) {
                addTags(selectedValue);
            } else {
                removeTags(selectedValue);
            }
        } else {
            setPriority(selectedValue);
        }
    };
    return (
        <div>
            <select
                id={name}
                name={name}
                value={ismultiple ? undefined : selectPriority}
                onChange={handleChange}
                className="p-1 py-2 text-black outline-none rounded"
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {ismultiple ? (
                <div>
                    <h3>Etiquetas Seleccionadas:</h3>
                    <ul className="space-y-2">
                        {tags.map((tag, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <Tag p={2} m={1} bgColor={'yellowgreen'} className="text-white">
                                    {tag}
                                </Tag>
                                <button className="bg-red-500 rounded p-1 text-white" onClick={() => removeTags(tag)}>Eliminar</button>
                            </div>
                        ))}
                    </ul>

                </div>

            ) : (
                <div>
                    <h3>Prioridad Seleccionada: {selectPriority}</h3> {/* Muestra la prioridad desde el store */}
                </div>
            )}
        </div>
    )
}