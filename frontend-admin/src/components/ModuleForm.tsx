import React from "react";
import { Module } from "../model/module";

export interface ModuleFormProps {
    formTitle: string;
    onSave: (module: any) => void;
    onCancel: () => void;
    formData?: Module;
}

const ModuleForm: React.FC<ModuleFormProps> = ({
    formTitle,
    onSave,
    onCancel,
    formData,
}) => {
    return (
        <div className={"bg-base-300 flex flex-col gap-10 p-4"}>
            <h3 className="font-bold text-lg">{formTitle}</h3>

            <form className={"flex flex-col gap-4"}>
                <input
                    type="text"
                    className={"input"}
                    placeholder={"Title"}
                    value={formData?.title}
                />
                <textarea
                    className={"textarea resize-none "}
                    placeholder={"Description"}
                    value={formData?.description}
                />
            </form>

            <div className={"flex gap-2 justify-center"}>
                <button className={"btn btn-primary"} onClick={onSave}>
                    Create
                </button>
                <button className={"btn btn-warning"} onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ModuleForm;
