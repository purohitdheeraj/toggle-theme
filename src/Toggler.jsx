import React from "react";
import styled from "styled-components";
import {
	MoonIcon,
	SunIcon,
} from "@heroicons/react/24/solid";
import { useTheme } from "./ThemeContext";
// import ThemeContext from "./ThemeContext";

const StyledLabel = styled.label`
	input {
		position: fixed;
		left: -9999px;
	}
	input ~ div {
		width: 30px;
		height: 16px;
		background: #334;
		border-radius: 8px;
		position: relative;
	}
	svg {
		height: 14px;
		color: #fff;
		background: #ccc;
		border-radius: 7px;
		position: absolute;
		top: 1px;
		left: 1px;
		transition: all 0.4s ease;
	}
	input:checked ~ div {
		background: #668;
		transition: all 0.4s ease;
		svg {
			background: #224;
			left: 15px;
		}
	}
`;

function Toggler() {
	const { darkMode, toggleDarkMode } = useTheme();

	return (
		<StyledLabel>
			<input
				type="checkbox"
				checked={darkMode}
				onChange={toggleDarkMode}
			/>
			<div>
				{darkMode ? <SunIcon /> : <MoonIcon />}
			</div>
		</StyledLabel>
	);
}

export default Toggler;
