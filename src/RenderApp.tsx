import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { App } from "./app";
import { App2 } from "./app2";

const RenderApp = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/a" element={<App2 />} />
			</Routes>
		</Router>
	);
};
export default RenderApp;
