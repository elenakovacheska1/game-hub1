import React from "react";
import * as Sentry from "@sentry/react";
import App from "./App.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Game from "./components/Game.tsx";
import SignUp from "./components/SignUp.tsx";
import Login from "./components/Login.tsx";
import { render } from "react-dom";

Sentry.init({
	dsn:
		"https://fd9cb41f247a47a5a0d26d1126ea1018@o4504915258114049.ingest.sentry.io/4505160284766208",
	integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
	// Performance Monitoring
	tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

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

render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById("root")
);
