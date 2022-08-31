import React from "react";

export interface InputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    register?: any;
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <input
            {...props}
            {...props.register}
            className={`input input-bordered text-lg border-2 [&:not(:focus):not(:placeholder-shown):invalid]:border-error [&:not(:focus):not(:placeholder-shown):valid]:border-success ${props.className}`}
        />
    );
};

export default Input;
