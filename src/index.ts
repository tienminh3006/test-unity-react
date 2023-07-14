import ReactDOM from "react-dom/client";
import { createElement } from "react";
import { App } from "./app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	createElement(App)
);
