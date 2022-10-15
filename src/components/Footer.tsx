import { FC } from "react";
import SectionWrapper from "./SectionWrapper";

interface IFooter {}

const Footer: FC<IFooter> = () => {
	return (
		<div className="bg-bluePrimary">
			<SectionWrapper>
				<div className='py-8'>
					<p className="text-white text-center">
						© 2022{" "}
						<span className="font-semibold">
							FintechFestivalTanzania2022
						</span>
						, All rights Reserved. Experienced by{" "}
						<span className="font-semibold">HellenSOFT</span>
					</p>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default Footer;
