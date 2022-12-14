import { useLocation } from "react-router-dom";
import { FC, ReactNode, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

interface ILayout {
	children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="relative">
			<SideBar />
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
