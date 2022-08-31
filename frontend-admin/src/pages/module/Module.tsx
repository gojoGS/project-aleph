import React from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ROUTE_MODULES, routeModuleLessonFactory } from "../../routes/routes";
import { getModuleById } from "../../util/mock";
import Breadcrumbs from "../../components/Breadcrumbs";

const Module: React.FC = () => {
    const moduleIdParam = useParams().moduleId;
    const navigate = useNavigate();

    if (!moduleIdParam) {
        return <Navigate to={ROUTE_MODULES} />;
    }
    const moduleId = Number.parseInt(moduleIdParam);

    const module = getModuleById(moduleId);

    return (
        <div
            className={
                "m-auto h-min w-fit max-w-6xl flex flex-col gap-8 items-center p-4"
            }
        >
            <Breadcrumbs>
                <Link to={ROUTE_MODULES}> Modules </Link>
                <span>{module.title}</span>
            </Breadcrumbs>

            <div className={"flex flex-col items-center"}>
                <h1 className={"text-2xl"}>{module.title}</h1>
                <p>{module.description}</p>
            </div>

            <div className={"flex gap-4 justify-center"}>
                <button className={"btn"}>New</button>
            </div>

            <ul className={"flex flex-col gap-4"}>
                {module.lessons.map((lesson, index) => {
                    return (
                        <div
                            key={index}
                            className="collapse collapse-arrow rounded-box bg-base-300 text-base-content"
                        >
                            <div className="collapse-title text-xl font-medium">
                                <h3>
                                    {index + 1}. {lesson.title}
                                </h3>
                            </div>
                            <input type="checkbox" />
                            <div className="collapse-content">
                                <p>{lesson.description}</p>
                                <div
                                    className={
                                        "flex justify-end gap-3 items-end my-4"
                                    }
                                >
                                    <button
                                        onClick={() => {
                                            navigate(
                                                routeModuleLessonFactory(
                                                    moduleId,
                                                    index
                                                )
                                            );
                                        }}
                                        className={"btn btn-primary"}
                                    >
                                        Lesson Editor
                                    </button>
                                    <button className={"btn btn-secondary"}>
                                        Edit
                                    </button>
                                    <button className={"btn btn-warning"}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default Module;
