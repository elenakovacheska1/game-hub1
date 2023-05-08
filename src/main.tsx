import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Game from "./components/Game.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/:gameId",
		element: <Game />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
