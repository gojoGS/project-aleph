import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
    ROUTE_PROFILE_LOGOUT,
    ROUTE_PROFILE_CHANGE_PASSWORD,
    ROUTE_PROFILE_SETTINGS,
} from "../../routes/routes";

const Profile: React.FC = () => {
    const tabs = [
        {
            route: ROUTE_PROFILE_CHANGE_PASSWORD,
            title: "Change Password",
        },
        {
            route: ROUTE_PROFILE_SETTINGS,
            title: "Settings",
        },
        {
            route: ROUTE_PROFILE_LOGOUT,
            title: "Logout",
        },
    ];

    const { pathname } = useLocation();
    const isCurrentPath = (path: string): boolean => {
        return path === pathname;
    };

    return (
        <div
            className={
                "absolute left-0 right-0 p-12 m-auto shadow-xl h-min mt-10 w-1/2 bg-base-300 flex flex-col items-center gap-4"
            }
        >
            <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-36">
                    <span className="text-3xl">Admin</span>
                </div>
            </div>
            <h2 className={"text-2xl"}>Profile</h2>

            <div className="my-8 tabs tabs-boxed gap-2">
                {tabs.map((tab) => (
                    <Link
                        className={`tab tab-lg tab-bordered ${
                            isCurrentPath(tab.route) ? "tab-active" : ""
                        }`}
                        to={tab.route}
                    >
                        {tab.title}
                    </Link>
                ))}
            </div>
            <Outlet />
        </div>
    );
};

export default Profile;
