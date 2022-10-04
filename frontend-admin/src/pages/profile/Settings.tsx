import React from "react";

const Settings: React.FC = () => {
    return (
        <div className={"w-full flex flex-col items-center"}>
            <h1 className={"text-2xl"}>Editor settings</h1>
            <label className="label cursor-pointer w-1/2">
                <span className="label-text text-lg">Auto-Save</span>
                <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    onChange={(event) => {
                        console.log(event.target.checked);
                    }}
                />
            </label>
        </div>
    );
};

export default Settings;
