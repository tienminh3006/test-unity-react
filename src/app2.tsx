import { Fragment, useState } from "react";
import { UnityTest } from "./unity-test";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

function App2() {
	const [isMounted, setIsMounted] = useState(false);
	const [repaintCounter, setRepaintCounter] = useState(0);

	function handleClickToggleMount() {
		setIsMounted(!isMounted);
	}
	const navigate = useNavigate();
	return (
		<Fragment>
			<h1>React Unity WebGL Test</h1>
			{/* <button onClick={handleClickToggleMount}>
				{isMounted ? "Unmount" : "Mount"} Unity App
			</button> */}
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				Navigate
			</button>
			<button onClick={() => setRepaintCounter((i) => i + 1)}>
				Force Repaint App ({repaintCounter})
			</button>
		</Fragment>
	);
}

export { App2 };
