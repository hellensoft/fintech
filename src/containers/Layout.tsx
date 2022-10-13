import { FC, ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface ILayout {
	children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
