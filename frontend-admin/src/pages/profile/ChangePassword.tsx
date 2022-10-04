import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ChangePasswordFormValues = {
    oldPassword: string;
    newPassword: string;
};

const ChangePassword: React.FC = () => {
    const { register, handleSubmit } = useForm<ChangePasswordFormValues>({
        defaultValues: { newPassword: "", oldPassword: "" },
    });

    const onSubmit: SubmitHandler<ChangePasswordFormValues> = (data) =>
        console.log(data);

    return (
        <>
            <h2 className={"text-2xl"}>Change password</h2>
            <form
                className={"flex flex-col gap-2"}
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type="password"
                    placeholder="Old password"
                    className={"input input-bordered text-lg border-2"}
                    {...register("oldPassword", {
                        minLength: 3,
                        required: true,
                    })}
                />
                <input
                    type="password"
                    className={"input input-bordered text-lg border-2"}
                    placeholder="New password"
                    {...register("newPassword", {
                        minLength: 1,
                        required: true,
                    })}
                />
                <button
                    type={"submit"}
                    className={"btn btn-primary mt-2 text-lg"}
                >
                    Change password
                </button>
            </form>
        </>
    );
};

export default ChangePassword;
