import React from "react";
import { Navigate } from "react-router-dom";

export interface RedirectProps {
    to: string;
}

const Redirect: React.FC<RedirectProps> = ({ to }) => {
    return <Navigate to={to} replace />;
};

export default Redirect;
