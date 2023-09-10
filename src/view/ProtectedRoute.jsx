import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRouter(path, element) {
  const routerHandler = () => {
    let data = sessionStorage.getItem("user");
    const user = JSON.parse(data);

    if (!data) {
      return <Navigate to="/" replace />;
    }

    if (user.userId) {
      return <Outlet />;
    }
  };

  return <>{routerHandler()}</>;
}
