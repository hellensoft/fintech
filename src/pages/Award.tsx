import { FC } from "react";
import { Link } from "react-router-dom";
import AboutFintech from "../components/AboutFintech";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";
import teamMembers from "../data/teamMember.json";

interface IAwards {}

const Awards: FC<IAwards> = () => {
	return (
		<div>
			<PageIntro
				title="AI Awards 2023"
				description="Know someone who deserves to be honoured for their achievements year, 2023?"
			/>
			<SectionWrapper>
				<div className="py-32 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 content-center items-center">
					<div>
						<img
							src="/images/fintech.png"
							className="rounded-tl-[50px] rounded-br-[50px]"
							alt="fintech"
						/>
					</div>
					<div className="space-y-6">
						<h1 className="text-bluePrimary text-center text-2xl lg:text-3xl font-semibold">
							THE AWARDS
						</h1>
						<p className="text-[#52576a] font-medium">
							For the past 15 years, Africa's FinTech and AI
							ecosystems have helped the financial services sector
							to achieve operational efficiency with remarkable
							financial inclusion. The FinTech and AI growth in
							Africa undeniably will continue to be driven by the
							65% of the young population under the age of 35 that
							continue to be more tech-savvy. Not only FinTech and
							AI firms but individuals also contribute to the
							creation of a platform that fosters and connect
							regulators, service providers, FinTech Startups, AI
							startups, service providers, investors, and mentors.
							The Africa FinTech and AI Awards 2023 works with
							many well-thought leaders in FinTech and AI to
							select Award Winners. Judges contribute
							significantly to the success of the Awards.
						</p>
					</div>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default Awards;
