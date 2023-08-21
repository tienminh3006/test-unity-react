// // Load Unity to canvas
// var canvas = document.querySelector("#unity-canvas");
// var buildUrl = "/public/unity-build";
// var loaderUrl = buildUrl + "communication-tests.loader.js";
// var config = {
// 	dataUrl: buildUrl + "communication-tests.data",
// 	frameworkUrl: buildUrl + "communication-tests.framework.js",
// 	codeUrl: buildUrl + "communication-tests.wasm",
// 	streamingAssetsUrl: "StreamingAssets",
// 	companyName: "DefaultCompany",
// 	productName: "hola-metaf",
// 	productVersion: "0.1",
// };
// var script = document.createElement("script");
// script.src = loaderUrl;
// function onUnityInstanceLoaded(unityInstance) {
// 	window.unityInstance = unityInstance;
// }

// script.onload = () => {
// 	createUnityInstance(canvas, config, (progress) => {
// 		console.log(progress);
// 	})
// 		.then((unityInstance) => {
// 			onUnityInstanceLoaded(unityInstance);
// 		})
// 		.catch((message) => {
// 			alert(message);
// 		});
// };

// document.body.appendChild(script);
