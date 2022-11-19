import React, { useEffect } from "react";
import useStore from "../store";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
	const isLoggedIn = useStore((state) => state.isLoggedIn);

	if (!isLoggedIn) return <Navigate to="/auth" replace />;

	return children;
}
