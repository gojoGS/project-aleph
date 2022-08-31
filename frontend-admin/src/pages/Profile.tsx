import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ChangePasswordFormValues = {
    oldPassword: string;
    newPassword: string;
};

const Profile: React.FC = () => {
    const { register, handleSubmit } = useForm<ChangePasswordFormValues>({
        defaultValues: { newPassword: "", oldPassword: "" },
    });

    const onSubmit: SubmitHandler<ChangePasswordFormValues> = (data) =>
        console.log(data);

    return (
        <div
            className={
                "absolute top-0 bottom-0 left-0 right-0 p-12 m-auto shadow-xl h-min w-fit bg-base-300 flex flex-col items-center gap-4"
            }
        >
            <h2 className={"text-2xl "}>Admin profile</h2>
            <h2>Change password</h2>
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
            <div className={"divider w-1/2 self-center"}></div>
            <button className={"btn btn-warning text-lg w-fit"}>Log out</button>
        </div>
    );
};

export default Profile;
