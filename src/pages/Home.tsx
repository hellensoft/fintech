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
import speakers from "../data/speakers.json";

interface IHome {}

const Home: FC<IHome> = () => {
    return (
        <div>
            <HomeIntro />
            <Statistics />
            <SectionWrapper>
                <div className="py-32 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 content-center items-center">
                    <div>
                        <div className="w-full aspect-[16/11] h-auto">
                            <iframe
                                className="w-full h-full"
                                title="fintech"
                                src="https://www.youtube.com/embed/nMhvMPu0UcU?controls=0"
                            ></iframe>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-bluePrimary text-center text-2xl lg:text-3xl font-semibold">
                            Are You
                            <br /> A B2B FinTech Company?
                        </h1>
                        <p className="text-[#52576a] text-sm xs:text-base font-medium text-justify">
                            There are various choices with more than 70
                            sessions, 130+ speakers, and over 22 hours of
                            content. Get to hear from the Minister and policy
                            markers; learn from Regulators and Chief Executive
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
            <Forum />
            <TicketCards />
            <SponsorPrices />
            <Happening />
            <SectionWrapper>
                <div className="py-10 md:py-16">
                    <div className="max-w-[787px] mx-auto text-center mb-8">
                        <h1 className="text-bluePrimary text-2xl sm:text-3xl font-semibold mb-4">
                            Fintech Speakers
                        </h1>
                        <p className="text-grayText text-sm sm:text-base text-medium">
                            Our team comprises senior leaders in Financial
                            Services, Innovation and Media with solid expertise
                            in delivering compelling and memorable top-quality
                            events.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-8">
                        {speakers.map((speaker, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-full border-4 border-transparent aspect-square group-hover:border-4 group-hover:border-bluePrimary rounded-tl-[30px] rounded-br-[30px] duration-300 overflow-hidden">
                                    <img
                                        className="w-full group-hover:scale-110 duration-300 h-full object-cover object-center"
                                        src={speaker.image}
                                        alt={speaker.name}
                                    />
                                </div>
                                <h3 className="text-blackPrimary text-lg sm:text-xl mt-3 font-semibold">
                                    {speaker.name}
                                </h3>
                                <p className="text-bluePrimary uppercase font-semibold text-xs sm:text-sm">
                                    {speaker.position}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
            <TakeTheStage />
            <WhoAttends />
            <WhoWillMeet />
            {/* <Exhibitors /> */}
        </div>
    );
};

export default Home;
