import { FC } from "react";
import SectionWrapper from "./SectionWrapper";
import statistics from "../data/statics.json";

interface IStatistics {}

const Statistics: FC<IStatistics> = () => {
	return (
		<div className="bg-bluePrimary">
			<SectionWrapper>
				<div className="py-24">
					{/* <h2 className="text-white font-semibold text-center mb-20 text-3xl">The Heading to be given by Francis</h2> */}
					<div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-12 xs:gap-8 sm:gap-0 md:gap-12">
						{statistics.map((data, index) => (
							<div
								className="flex flex-col items-center"
								key={index}
							>
								<h2 className="text-white font-semibold text-4xl">
									{data.number}
								</h2>
								<p className="text-[#fffe] font-medium text-xl mt-2">
									{data.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default Statistics;
