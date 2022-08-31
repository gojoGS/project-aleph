import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Modules from "./pages/module/Modules";
import {
    ROUTE_GRAVEYARD,
    ROUTE_LESSONS,
    ROUTE_LOGIN,
    ROUTE_MODULE,
    ROUTE_MODULE_LESSON,
    ROUTE_MODULES,
    ROUTE_PROFILE,
    ROUTE_TAGS,
} from "./routes/routes";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Module from "./pages/module/Module";
import Redirect from "./pages/Redirect";
import Lesson from "./pages/lesson/Lesson";
import Graveyard from "./pages/Graveyard";

function App() {
    return (
        <div className="w-full min-h-screen bg-base-200">
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
                                    className={
                                        "text-xl normal-case btn btn-ghost"
                                    }
                                >
                                    <FontAwesomeIcon icon={faUser} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Routes>
                <Route path={ROUTE_LOGIN} element={<Login />} />

                <Route path={ROUTE_PROFILE} element={<Profile />} />

                <Route path={ROUTE_MODULES} element={<Modules />} />
                <Route path={ROUTE_MODULE} element={<Module />} />
                <Route path={ROUTE_MODULE_LESSON} element={<Lesson />} />

                <Route path={ROUTE_LESSONS} element={<Modules />} />

                <Route path={ROUTE_TAGS} element={<Modules />} />

                <Route path={ROUTE_GRAVEYARD} element={<Graveyard />} />

                <Route path={"*"} element={<Redirect to={ROUTE_MODULES} />} />
            </Routes>
        </div>
    );
}

export default App;
