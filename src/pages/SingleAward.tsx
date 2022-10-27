import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { HiCheck } from "react-icons/hi";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";
import awardList from "../data/awards.json";

interface ISingleAward {}

const SingleAward: FC<ISingleAward> = () => {
	const lastAward = awardList.length - 1;
	const { id } = useParams();
	const awardIndex = parseInt(id as string);
	const award = awardList[awardIndex];

	return (
		<div>
			<PageIntro
				title={award.title}
				description=""
				backLink="/awards#awardsCategories"
				backText="Awards"
				currentText={award.title}
			/>
			<SectionWrapper>
				<div className="py-32 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 content-center items-center">
					<div className="space-y-6">
						<h1 className="text-bluePrimary text-center text-2xl lg:text-3xl font-semibold">
							{award.title}
						</h1>
						<p className="text-[#52576a] font-medium">
							{award.description}
						</p>
					</div>
					<div>
						<img
							src="/images/fintech.png"
							className="rounded-tl-[50px] rounded-br-[50px]"
							alt="fintech"
						/>
					</div>
				</div>
				<div className="my-24">
					<h3 className="text-bluePrimary text-center text-2xl lg:text-3xl font-semibold">
						Award Createria
					</h3>
					<div className="space-y-4 ml-8 mt-16">
						{award.createria.map((create, index) => (
							<div
								key={index}
								className="flex items-center space-x-2"
							>
								<HiCheck className="text-greenPrimary h-5 w-5" />
								<p className="text-grayText font-medium">
									{create}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex items-center justify-center my-6 mb-12 space-x-4">
					{awardIndex > 0 && (
						<Link
							className="font-medium bg-bluePrimary hover:bg-greenPrimary duration-300 py-2 px-6 rounded-md text-white"
							to={`/awards/${awardIndex - 1}`}
						>
							Previous
						</Link>
					)}
					{awardIndex < lastAward && (
						<Link
							className="font-medium bg-bluePrimary hover:bg-greenPrimary duration-300 py-2 px-6 rounded-md text-white"
							to={`/awards/${awardIndex + 1}`}
						>
							Next
						</Link>
					)}
				</div>
			</SectionWrapper>
		</div>
	);
};

export default SingleAward;
