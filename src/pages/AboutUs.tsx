import { FC } from "react";
import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";
import teamMembers from "../data/teamMember.json";

interface IAboutUs {}

const AboutUs: FC<IAboutUs> = () => {
    return (
        <div>
            <PageIntro title="About Us" description="Our Team" />
            <SectionWrapper>
                <div className="py-16 md:py-24">
                    <div className="pt-12 md:pt-20 pb-4 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 content-center items-center">
                        <div className="space-y-6">
                            <h1 className="text-bluePrimary text-2xl sm:text-3xl text-center font-semibold">
                                OUR HISTORY
                            </h1>
                            <p className="text-grayText text-sm sm:text-base font-medium">
                                The 2019 edition of Tanzania Fintech and Banking
                                Conference as part of Fintech Festivals Tanzania
                                2023, previously known as Tanzania Financial
                                Services expo, had attracted more than 100
                                exhibiting companies from over 15 countries.
                            </p>
                            <p className="text-grayText text-sm sm:text-base font-medium">
                                The exhibition also saw over 20 start-ups and
                                hosted 4 country pavilions – France, India,
                                Switzerland and USA. C-suite, senior management
                                level decision makers and influencers made up
                                40% of total conference attendees.
                            </p>
                            <p className="text-grayText text-sm sm:text-base font-medium">
                                Fintech Festivals Tanzania 2023 is guaranteed to
                                welcome over 3,000 international participants at
                                the 2day festival with the vast majority being
                                C-suite, Heads-of-Departments, key decision
                                makers, key influencers and operators.
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
                </div>
            </SectionWrapper>
            <SectionWrapper>
                <div className="py-16 md:py-20">
                    <div className="max-w-[787px] mx-auto text-center mb-8">
                        <h1 className="text-bluePrimary text-2xl sm:text-3xl font-semibold mb-4">
                            Team Members
                        </h1>
                        <p className="text-grayText text-sm sm:text-base text-medium">
                            Our team comprises senior leaders in Financial
                            Services, Innovation and Media with solid expertise
                            in delivering compelling and memorable top-quality
                            events.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-full border-4 border-transparent aspect-square group-hover:border-4 group-hover:border-bluePrimary rounded-tl-[30px] rounded-br-[30px] duration-300 overflow-hidden">
                                    <img
                                        className="w-full group-hover:scale-110 duration-300 h-full object-cover object-center"
                                        src={member.image}
                                        alt={member.name}
                                    />
                                </div>
                                <h3 className="text-blackPrimary text-lg sm:text-xl mt-3 font-semibold">
                                    {member.name}
                                </h3>
                                <p className="text-bluePrimary uppercase font-semibold text-xs sm:text-sm">
                                    {member.position}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mb-20 flex-col sm:flex-row space-y-6 sm:space-y-0 max-w-5xl flex items-center justify-between mx-auto border shadow-lg rounded-md py-8 px-8">
                    <h2 className="text-xl text-center sm:text-start xs:text-3xl text-blackPrimary font-semibold">
                        Become a member
                    </h2>
                    <Link
                        className="font-medium bg-bluePrimary hover:bg-greenPrimary duration-300 py-2 px-6 rounded-md text-white"
                        to="/contact"
                    >
                        Contact Us
                    </Link>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default AboutUs;
