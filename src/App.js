import { Route, Routes } from 'react-router-dom';
import AppOverlay from './components/AppOverlay';
import AuthPage from './routes/AuthPage';
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/Home';
import ProtectedRoute from './routes/ProtectedRoute';
import useAppStore from './store';

function App() {
	const isModalOpen = useAppStore((state) => state.isModalOpen);
	const user = useAppStore((state) => state.user);
	return (
		<div className="App">
			{isModalOpen && <AppOverlay />}
			<Routes>
				<Route
					exact
					path="/"
					element={
						<ProtectedRoute user={user}>
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
