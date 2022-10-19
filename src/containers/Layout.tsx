import { useLocation } from "react-router-dom";
import { FC, ReactNode, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface ILayout {
	children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);  
	}, [location]);

	return (
		<div className="relative">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
