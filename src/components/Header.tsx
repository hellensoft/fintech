import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import navigations from "../data/topNav.json";

interface IHeader {}

const Header: FC<IHeader> = () => {
	return (
		<div className="border-b">
			<SectionWrapper>
				<div className="flex items-center justify-between py-8">
					<div>
						<Link to="/">
							<img
								className="h-16 w-auto"
								src="/images/logo-words.png"
								alt="logo"
							/>
						</Link>
					</div>
					<div className="ml-auto space-x-8">
						{navigations.map((nav, index) => (
							<NavLink
								to={nav.link}
								className={({ isActive }) =>
									`text-greenPrimary font-medium hover:text-bluePrimary`
								}
							>
								{nav.name}
							</NavLink>
						))}
					</div>
					<Link
						className="ml-32 font-medium bg-bluePrimary hover:bg-greenPrimary duration-300 py-2 px-6 rounded-md text-white"
						to="/register"
					>
						Register
					</Link>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default Header;
