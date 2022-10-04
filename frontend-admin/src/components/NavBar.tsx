import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_MODULES, ROUTE_PROFILE } from "../routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavBar: React.FC = () => {
    return (
        <header className={"sticky top-0 z-50"}>
            <nav className="flex-col navbar bg-primary text-primary-content sm:flex-row">
                <div className="flex-1">
                    <a className="text-xl normal-case btn btn-ghost">
                        Project Aleph
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="p-0 gap-0.5 menu menu-horizontal">
                        <li>
                            <Link
                                className="h-auto p-1 px-4 text-xl normal-case btn btn-ghost"
                                to={ROUTE_MODULES}
                            >
                                Modules
                            </Link>
                        </li>
                        <li>
                            <a className="h-auto p-1 px-4 text-xl normal-case btn btn-ghost">
                                Lessons
                            </a>
                        </li>
                        <li>
                            <a className="h-auto p-1 px-4 text-xl normal-case btn btn-ghost">
                                Tags
                            </a>
                        </li>
                        <li>
                            <Link
                                to={ROUTE_PROFILE}
                                className={"text-xl normal-case btn btn-ghost"}
                            >
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
