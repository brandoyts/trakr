import React from "react";
import { Navigate } from "react-router-dom";
import useAppStore from "../store";

export default function ProtectedRoute({ children }) {
	const user = useAppStore((state) => state.user);

	if (!user) return <Navigate to="/auth" replace={true} />;

	return children;
}
