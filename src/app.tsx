import { Fragment, useState } from "react";
import { UnityTest } from "./unity-test";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useScript } from "./useScript";

function App() {
	const [isMounted, setIsMounted] = useState(false);
	const [repaintCounter, setRepaintCounter] = useState(0);

	function handleClickToggleMount() {
		setIsMounted(!isMounted);
	}

	// useScript("/public/unity-build/script.js");

	const navigate = useNavigate();
	return (
		<Fragment>
			<h1>React Unity WebGL Test</h1>
			<button onClick={handleClickToggleMount}>
				{isMounted ? "Unmount" : "Mount"} Unity App
			</button>
			<button
				style={{ marginLeft: "20px" }}
				onClick={() => {
					navigate("/a");
				}}
			>
				Navigate
			</button>
			<canvas id="unity-canvas"></canvas>

			<button onClick={() => setRepaintCounter((i) => i + 1)}>
				Force Repaint App ({repaintCounter})
			</button>
			{isMounted && <UnityTest />}
			{/* <div dangerouslySetInnerHTML={{ __html: myhtml }}></div> */}
		</Fragment>
	);
}

export { App };
