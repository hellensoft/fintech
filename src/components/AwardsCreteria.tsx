import { FC } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import awardList from "../data/awards.json";

interface IAwardsCreteria {}

const AwardsCreteria: FC<IAwardsCreteria> = () => {
	return (
		<SectionWrapper>
			<div className="mb-24" id="awardsCategories">
				<h2 className="text-3xl text-bluePrimary font-semibold text-center">
					AWARD CATEGORIES
				</h2>
				<div className="grid grid-cols-4 gap-8 mt-12">
					{awardList.map((award, index) => (
						<div
							key={index}
							className="rounded-lg shadow-lg border p-6 flex flex-col justify-between min-h-[250px]"
						>
							<h3 className="text-xl text-blackPrimary font-semibold">
								{award.title}
							</h3>
							<Link
								className="self-end text-greenPrimary hover:text-bluePrimary duration-200"
								to={`/awards/${index}`}
							>
								Learn more
							</Link>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
};

export default AwardsCreteria;
