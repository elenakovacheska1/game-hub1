import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Game from "./components/Game.tsx";
import SignUp from "./components/SignUp.tsx";
import Login from "./components/Login.tsx";

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
	{
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/login",
		element: <Login />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
