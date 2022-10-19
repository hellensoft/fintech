import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SponsorsExhibitors from "./pages/SponsorsExhibitors";

interface IApp {}

const App: FC<IApp> = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/sponsors-exhibitors" element={<SponsorsExhibitors />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
