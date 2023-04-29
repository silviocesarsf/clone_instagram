import { createContext, useState } from "react";

export const ContextProvider = createContext();

export const Context = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<ContextProvider.Provider value={{ isLoading, setIsLoading }}>
			{children}
		</ContextProvider.Provider>
	);
};
