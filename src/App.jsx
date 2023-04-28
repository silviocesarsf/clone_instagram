import React from "react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Sugestions from "./components/Sugestions/Sugestions";

const App = () => {
	return (
		<>
			<Sidebar />
			<Home />
			<Sugestions />
		</>
	);
};

export default App;
