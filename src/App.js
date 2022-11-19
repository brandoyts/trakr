import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import AuthPage from "./routes/AuthPage";
import ErrorPage from "./routes/ErrorPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					index
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Home />
						</ProtectedRoute>
					}
				/>
				<Route path="/auth" element={<AuthPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
