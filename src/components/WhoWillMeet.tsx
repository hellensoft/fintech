import { FC } from "react";
import SectionWrapper from "./SectionWrapper";

interface IWhoWillMeet {}

const WhoWillMeet: FC<IWhoWillMeet> = () => {
	return (
		<SectionWrapper>
			<div className="py-24">
				<h1 className="text-2xl md:text-3xl text-center font-semibold text-blackPrimary">
					WHO WILL YOU MEET?
				</h1>
			</div>
		</SectionWrapper>
	);
};

export default WhoWillMeet;
