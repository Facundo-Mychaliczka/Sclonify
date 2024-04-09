import React from "react";
import { BrowserRouter, Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../assets/Page/Home/Home";
import Layout from "../components/Layout/Layout";
import Ejemplo from "../assets/Page/Ejemplo/Ejemplo";

const Routes = () => {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<ReactDomRoutes>
						<Route path="/" element={<Home />} />
						<Route path="/ejemplo" element={<Ejemplo />} />
					</ReactDomRoutes>
				</Layout>
			</BrowserRouter>
		</>
	);
};

export default Routes;
