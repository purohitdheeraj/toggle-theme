import { createGlobalStyle } from "styled-components";
import Toggler from "./Toggler";
import { useTheme } from "./ThemeContext";

const GlobalStyles = createGlobalStyle`
body{
  background: ${(props) =>
		props.darkMode ? "#334" : "#eef"};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")}
}
`;

function App() {
	const { darkMode } = useTheme();

	return (
		<div>
			<GlobalStyles darkMode={darkMode} />
			<h3>{darkMode ? "Dark Mode" : "Light Mode"}</h3>
			<Toggler />
		</div>
	);
}

export default App;
