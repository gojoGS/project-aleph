export const ROUTE_ROOT = "/";

export const ROUTE_LOGIN = "/login";
export const ROUTE_LOGOUT = "/logout";

export const ROUTE_PROFILE = "/profile";
export const ROUTE_PROFILE_SETTINGS = ROUTE_PROFILE + "/settings";
export const ROUTE_PROFILE_CHANGE_PASSWORD = ROUTE_PROFILE + "/change-password";
export const ROUTE_PROFILE_LOGOUT = ROUTE_PROFILE + "/logout";

export const ROUTE_MODULES = "/module";
export const ROUTE_MODULE = ROUTE_MODULES + "/:moduleId";
export const ROUTE_MODULE_LESSON = ROUTE_MODULE + "/lessons/:lessonId";

export const ROUTE_LESSONS = "/lesson";

export const ROUTE_TAGS = "/tag";
export const ROUTE_TAG = ROUTE_TAGS + "/:id";
export const ROUTE_TAG_NEW = ROUTE_TAGS + "/new";

export const ROUTE_GRAVEYARD = "SADASDOMASOFNOANFAOJKMDAOKSDMASDKMAOSKDMAS";

export const routeModuleFactory = (moduleId: number) => {
    return ROUTE_MODULE.replace(":moduleId", moduleId.toString());
};

export const routeModuleLessonFactory = (
    moduleId: number,
    lessonId: number
) => {
    return ROUTE_MODULE_LESSON.replace(
        ":moduleId",
        moduleId.toString()
    ).replace(":lessonId", lessonId.toString());
};
