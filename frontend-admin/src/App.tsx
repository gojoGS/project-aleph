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
    ROUTE_PROFILE_CHANGE_PASSWORD,
    ROUTE_PROFILE_LOGOUT,
    ROUTE_PROFILE_SETTINGS,
    ROUTE_TAGS,
} from "./routes/routes";
import Login from "./pages/Login";
import Profile from "./pages/profile/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Module from "./pages/module/Module";
import Redirect from "./pages/Redirect";
import Lesson from "./pages/lesson/Lesson";
import Graveyard from "./pages/Graveyard";
import ChangePassword from "./pages/profile/ChangePassword";
import LogOut from "./pages/profile/LogOut";
import NavBar from "./components/NavBar";
import Settings from "./pages/profile/Settings";

function App() {
    return (
        <div className="w-full min-h-screen bg-base-200">
            <NavBar />
            <Routes>
                <Route path={ROUTE_LOGIN} element={<Login />} />

                <Route path={ROUTE_PROFILE} element={<Profile />}>
                    <Route
                        path={ROUTE_PROFILE_CHANGE_PASSWORD}
                        element={<ChangePassword />}
                    />
                    <Route
                        path={ROUTE_PROFILE_SETTINGS}
                        element={<Settings />}
                    />
                    <Route path={ROUTE_PROFILE_LOGOUT} element={<LogOut />} />
                </Route>

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
