import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./styles/global.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.jsx";
import { Context } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Context>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<App />
			</ThemeProvider>
		</Context>
	</React.StrictMode>
);
