import { FC } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";

interface ITakeTheStage {}

const TakeTheStage: FC<ITakeTheStage> = () => {
	return (
		<div className="bg-bluePrimary">
			<SectionWrapper>
				<div className="max-w-3xl py-24 text-center mx-auto">
					<h1 className="text-white text-2xl sm:text-3xl font-semibold">
						TAKE THE STAGE
					</h1>
					<h2 className="text-gray-200 text-md md:text-xl my-2">Apply to become a speaker today.</h2>
					<p className="text-gray-300 text-sm md:text-base mb-8">
					Are you interested and passionate about Fintech? Click below to apply
					</p>
					<Link
						className="font-medium bg-greenPrimary border border-greenPrimary hover:bg-bluePrimary duration-300 py-2 px-12 text-white"
						to="/enquiry"
					>
						Apply Now
					</Link>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default TakeTheStage;
