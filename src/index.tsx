import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CSSReset from "./styling/cssReset";
import Variables from "./styling/variables";
import GlobalStyles from "./styling/globalStyles";

ReactDOM.render(
	<React.StrictMode>
		<CSSReset />
		<Variables />
		<GlobalStyles />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
