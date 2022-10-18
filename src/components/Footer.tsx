import { FC } from "react";
import SectionWrapper from "./SectionWrapper";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface IFooter {}

const Footer: FC<IFooter> = () => {
	return (
		<div className="bg-bluePrimary">
			<SectionWrapper>
				<div className="py-8 flex items-center justify-between">
					<p className="text-white">
						© 2022{" "}
						<span className="font-semibold">
							FintechFestivalTanzania2022
						</span>
						, All rights Reserved. Experienced by{" "}
						<span className="font-semibold">HellenSOFT</span>
					</p>
					<div className="flex items-center space-x-6">
						<a href="#">
							<FaTwitter className="text-white h-5 w-5" />
						</a>
						<a href="#">
							<FaLinkedinIn className="text-white h-5 w-5" />
						</a>
					</div>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default Footer;
