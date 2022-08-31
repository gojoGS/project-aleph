import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { ROUTE_MODULES, routeModuleFactory } from "../routes/routes";

const Breadcrumbs: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="text-lg breadcrumbs">
            <ul>
                {React.Children.map(children, (child) => {
                    return <li>{child}</li>;
                })}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
