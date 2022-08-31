import { ErrorMessage } from "@hookform/error-message";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Login.module.css";

type FormValues = {
    username: string;
    password: string;
};

const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: { username: "", password: "" },
    });
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

    return (
        <div
            className={`${styles.techBg} absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center h-full w-full`}
        >
            <div
                className={`p-2 rounded-md shadow-xl h-min w-fit bg-primary-content/60 backdrop-blur-lg`}
            >
                <form
                    autoComplete={"off"}
                    className="flex flex-col gap-4 p-8 md:p-16"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h2 className="text-4xl font-medium leading-tight text-center text-primary">
                        Login
                    </h2>
                    <input
                        type="text"
                        {...register("username", {
                            minLength: 1,
                            required: true,
                        })}
                        placeholder="Username"
                        className="w-full max-w-sm input input-bordered input-primary text-lg border-2"
                    />
                    <input
                        type="password"
                        {...register("password", {
                            minLength: 1,
                            required: true,
                        })}
                        placeholder="Password"
                        className="w-full max-w-sm input input-bordered input-primary text-lg border-2"
                    />

                    <ErrorMessage
                        name={"password"}
                        errors={errors}
                    ></ErrorMessage>

                    <button type="submit" className="text-lg btn btn-primary">
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
