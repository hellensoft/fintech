import { FC } from "react";
// import Exhibitors from "../components/Exhibitors";
import Forum from "../components/Forum";
import Happening from "../components/Happening";
import SectionWrapper from "../components/SectionWrapper";
import SponsorPrices from "../components/SponsorPrices";
// import Sponsers from "../components/Sponsers";
import Statistics from "../components/Statistics";
import TakeTheStage from "../components/TakeTheState";
import TicketCards from "../components/TicketCards";
import WhoAttends from "../components/WhoAttends";
import WhoWillMeet from "../components/WhoWillMeet";
import HomeIntro from "../containers/HomeIntro";

interface IHome {}

const Home: FC<IHome> = () => {
	return (
		<div>
			<HomeIntro />
			<Statistics />
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
							Are You
							<br /> A B2B FinTech Company?
						</h1>
						<p className="text-[#52576a] text-sm xs:text-base font-medium">
							There are various choices with more than 70
							sessions, 130+ speakers, and over 22 hours of
							content. Get to hear from the Minister and the
							Governor; learn from Regulators and Chief Executive
							Officers of Top Financial institutions in Tanzania
							and East Africa; uncover secrets from a successful
							startup fintech firm; discover success with Founders
							of Top Fintech Firms around the world, and much
							more.
						</p>
					</div>
				</div>
			</SectionWrapper>
			{/* <Sponsers /> */}
			<TakeTheStage />
            <Happening />
			<TicketCards />
			<SponsorPrices />
			<Forum />
			<WhoAttends />
            <WhoWillMeet />
			{/* <Exhibitors /> */}
		</div>
	);
};

export default Home;
