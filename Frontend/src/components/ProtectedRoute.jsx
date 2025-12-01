// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
    const token = localStorage.getItem("token");

    if (!token) return <Navigate to="/admin/login" replace />;

    try {
        const payload = JSON.parse(atob(token.split(".")[1])); // decode JWT payload
        if (role && payload.role !== role) return <Navigate to="/admin/login" replace />;
    } catch (err) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
