import { FC } from "react";
import SectionWrapper from "./SectionWrapper";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

interface IFooter {}
const year = new Date().getFullYear();
const Footer: FC<IFooter> = () => {
	return (
		<div className="bg-bluePrimary">
			<SectionWrapper>
				<div className="py-8 md:space-y-0 flex-col-reverse md:flex-row flex items-center justify-between">
					<p className="text-sm mt-4 md:mt-0 text-center md:text-start md:text-base text-white">
						© {year}{" "}
						<span className="font-semibold">
							Fintech Festival Tanzania 2023
						</span>
						, All rights Reserved. Experienced by{" "}
						<span className="font-semibold">HELLENSoft</span>
					</p>
					<div className="flex  items-center space-x-6">
						<Link to="#">
							<FaTwitter className="text-white h-5 w-5" />
						</Link>
						<Link to="#">
							<FaLinkedinIn className="text-white h-5 w-5" />
						</Link>
						<Link to="#">
							<FaFacebook className="text-white h-5 w-5" />
						</Link>
						<Link to="#">
							<FaInstagram className="text-white h-5 w-5" />
						</Link>
					</div>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default Footer;
