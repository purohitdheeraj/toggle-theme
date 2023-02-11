import React, { useContext, useState } from "react";

const ThemeContext = React.createContext({});


const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((oldTheme) => !oldTheme);
	};

	return (
		<ThemeContext.Provider
			value={{ darkMode, toggleDarkMode }}
		>
			{children}
		</ThemeContext.Provider>
	);
};

// to reduce the import wala part
// everytime we need ThemeContext to fetch the context
// we can say its our own hook

const useTheme = () => {
	return useContext(ThemeContext);
};

export { useTheme, ThemeProvider };
