import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { delay, DelayLength } from "../../util/promise";
import { ROUTE_MODULES, routeModuleFactory } from "../../routes/routes";
import { getLessonById, getModuleById } from "../../util/mock";
import { truncate } from "../../util/text";
import Breadcrumbs from "../../components/Breadcrumbs";
import Preview from "../../components/Preview";
import MDEditor from "@uiw/react-md-editor";

const Lesson: React.FC = () => {
    const { lessonId: lessonIdParam, moduleId: moduleIdParam } = useParams();
    const [textAreaContent, setTextAreaContent] = useState("");
    const [rawMarkdown, setRawMarkdown] = useState("");
    const [markdown, setMarkdown] = useState("");

    const [lastSaved, setLastSaved] = useState("");

    useEffect(() => {
        const renderTimeOutId = setTimeout(
            () => setRawMarkdown(textAreaContent),
            1200
        );

        return () => clearTimeout(renderTimeOutId);
    }, [textAreaContent]);

    if (!lessonIdParam || !moduleIdParam) {
        return <Navigate to={ROUTE_MODULES} />;
    }

    const lessonId = Number.parseInt(lessonIdParam);
    const moduleId = Number.parseInt(moduleIdParam);

    const module = getModuleById(moduleId);
    const lesson = getLessonById(lessonId);

    const onSave = () => {
        toast.promise(
            delay(DelayLength.MEDIUM).then(() => {
                setLastSaved(textAreaContent);
            }),
            {
                pending: "Saving…",
                success: "Save successful",
                error: "Couldn't save changes",
            }
        );
    };

    const hasUnsavedChanges = () => {
        return textAreaContent !== lastSaved;
    };

    const hasTooMuchUnsavedChanges = () => {
        return Math.abs(textAreaContent.length - lastSaved.length) > 127;
    };

    const onInput: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        const newMarkdown = event.target.value;

        setTextAreaContent(newMarkdown);
    };

    return (
        <div className={"flex flex-col gap-4 items-center p-4"}>
            <Breadcrumbs>
                <Link to={ROUTE_MODULES}>Modules</Link>
                <Link to={routeModuleFactory(moduleId)}>{module.title}</Link>
                <span>{lesson.title}</span>
            </Breadcrumbs>
            <div
                className={
                    "flex flex-col md:flex-row w-full max-w-[1800px] gap-6 h-3/4"
                }
            >
                <MDEditor
                    value={markdown}
                    onChange={(value, event, state) => setMarkdown(value ?? "")}
                    height={"40rem"}
                    maxHeight={550}
                    className={
                        // "textarea text-lg resize-none md:w-1/2  h-[50vh] mx-2 overflow-scroll"
                        "md:w-full"
                    }
                />
                {/*<Preview*/}
                {/*    rawMarkdown={rawMarkdown}*/}
                {/*    className={"md:w-1/2 h-[50vh] mx-2"}*/}
                {/*/>*/}
            </div>

            <div
                className={
                    "flex mt-6 flex-col md:flex-row gap-4 items-center justify-center"
                }
            >
                <button
                    className={"btn btn-primary"}
                    onClick={onSave}
                    disabled={!hasUnsavedChanges()}
                >
                    Save
                </button>
                <button className={"btn btn-warn"}>Back</button>
            </div>

            {hasTooMuchUnsavedChanges() && (
                <div className="alert alert-warning shadow-lg max-w-4xl">
                    <div>
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <span>You have unsaved changes</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Lesson;
