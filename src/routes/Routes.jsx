import React from "react";
import { BrowserRouter, Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../assets/Page/Home/Home";

const Routes = () => {
	return (
		<>
			<BrowserRouter>
				<ReactDomRoutes>
					<Route path="/" element={<Home />} />
				</ReactDomRoutes>
			</BrowserRouter>
		</>
	);
};

export default Routes;
