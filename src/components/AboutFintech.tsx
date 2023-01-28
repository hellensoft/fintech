import { FC } from "react";
import SectionWrapper from "./SectionWrapper";

interface IAboutFintech {}

const AboutFintech: FC<IAboutFintech> = () => {
    return (
        <SectionWrapper>
            <div className="py-16 md:py-24">
                <h1 className="text-bluePrimary text-2xl sm:text-[34px] text-center font-semibold">
                    ABOUT FINTECH FESTIVAL
                </h1>
                <div className="pt-12 md:pt-20 pb-4 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 content-center items-center">
                    <div className="space-y-6">
                        <p className="text-grayText text-sm sm:text-base font-medium">
                            FinTech Festival is the largest Financial Technology
                            event in East Africa, providing a platform for the
                            FinTech community to connect, collaborate and
                            co-create.
                        </p>
                        <p className="text-grayText text-sm sm:text-base font-medium">
                            Whether you are a start-up, technology company,
                            investor, financial institution, research institute,
                            or innovation professional, it will play a pivotal
                            role in further strengthening the ecosystem of
                            financial and technical solutions in Tanzania,
                            Africa and world at large.
                        </p>
                        <p className="text-grayText text-sm sm:text-base font-medium">
                            Financial technology (better known as Fintech) is
                            used to describe new tech that seeks to improve and
                            automate the delivery and use of financial services.
                        </p>
                        <p className="text-grayText text-sm sm:text-base font-medium">
                            At its core, fintech is utilized to help companies,
                            business owners, and consumers better manage their
                            financial operations, processes, and lives by
                            utilizing specialized software and algorithms that
                            are used on computers and, increasingly,
                            smartphones. Fintech, the word, is a combination of
                            "financial technology."
                        </p>
                    </div>
                    <div>
                        <img
                            src="/images/photo_2023-01-28_11-27-26.jpeg"
                            className="rounded-tl-[50px] rounded-br-[50px]"
                            alt="fintech"
                        />
                    </div>
                </div>
                <div className="py-0 md:py-20 grid-cols-1 grid md:grid-cols-2 gap-12 content-center items-center">
                    <div>
                        <img
                            src="/images/fintech.png"
                            className="rounded-tl-[50px] hidden md:inline-block rounded-br-[50px]"
                            alt="fintech"
                        />
                    </div>
                    <div className="space-y-6">
                        <p className="text-grayText text-sm sm:text-base font-medium">
                            FinTech Festival Tanzania aims to unleash the
                            potential of Financial Technology in Tanzania and
                            showcase the opportunities to investors and global
                            FinTech fraternity to venture in the Tanzania
                            market.
                        </p>
                        <p className="text-grayText text-sm sm:text-base font-medium">
                            The event is one big celebration of new ideas,
                            technologies, conferences full of rich dialogues,
                            productive engagements and unlimited networking that
                            involves the greatest minds from the world of
                            Finance and Technology.
                        </p>
                        <p className="text-grayText text-sm sm:text-base font-medium">
                            Fintech, the application of digital technology to
                            financial services, is reshaping the future of
                            finance– a process that the COVID-19 pandemic has
                            accelerated. The ongoing digitization of financial
                            services and money creates opportunities to build
                            more inclusive and efficient financial services and
                            promote economic development.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pb-16">
                <h1 className="text-bluePrimary max-w-[720px] font-semibold text-xl sm:text-2xl mb-6">
                    How to join and benefit in FinTech Festival Tanzania 2023
                </h1>
                <p className="text-sm md:text-base font-medium text-grayText">
                    When fintech emerged in the 21st century, the term was
                    initially applied to the technology employed at the back-end
                    systems of established financial institutions.
                </p>
                <p className="text-sm md:text-base font-medium text-grayText mt-5">
                    Since then, however, there has been a shift to more
                    consumer-oriented services and therefore a more
                    consumer-oriented definition. Fintech now includes different
                    sectors and industries such as education, retail banking,
                    fundraising and non-profit, and investment management, to
                    name a few.
                </p>
                <p className="text-sm md:text-base font-medium text-grayText">
                    Fintech today also includes the development and use of
                    cryptocurrencies, such as Bitcoins. While that segment of
                    fintech may see the most headlines, the big money still lies
                    in the traditional global banking industry and its
                    multi-trillion-dollar market capitalization.
                </p>
                <p className="text-sm md:text-base font-medium text-grayText mt-5">
                    The Fintech Festival Tanzania 2023 will pack more than 70
                    sessions, 130+ speakers and over 22 hours of content, there
                    is a variety of choice. Get to hear from expert in Financial
                    Technology across the globe, the Ministers, the regulators,
                    learn from Regulators and C.E.O’s of Top Financial
                    institution in Tanzania and East Africa.
                </p>
                <p className="text-sm md:text-base font-medium text-grayText mt-5">
                    By Joining this Festive you will uncover secrets from a
                    successful startup fintech firm, discover success with
                    Founders of Top Fintech Firms around the world and much
                    more.
                </p>
            </div>

            <div className="pb-16">
                <h1 className="text-bluePrimary max-w-[720px] font-semibold text-xl sm:text-2xl mb-6">
                    According to the world bank on Fintech and Future of Finance
                    Report
                </h1>
                <p className="text-sm md:text-base font-medium text-grayText">
                    Fintech is transforming the world economies and financial
                    sector landscape rapidly while blurring the boundaries of
                    both financial firms and the financial sector. This presents
                    a paradigm shift that has various policy implications,
                    including: -
                </p>

                <ul className="list-disc ml-8 sm:ml-16 space-y-6 mt-10">
                    <li className="text-sm md:text-base font-medium text-grayText">
                        Foster beneficial innovation and competition, while
                        managing the risks.
                    </li>
                    <li className="text-sm md:text-base font-medium text-grayText">
                        Broaden monitoring horizons and re-assess regulatory
                        perimeters as embedding of financial services blurs the
                        boundaries of the financial sector.
                    </li>
                    <li className="text-sm md:text-base font-medium text-grayText">
                        Be mindful of evolving policy tradeoffs as fintech
                        adoption deepens.
                    </li>
                    <li className="text-sm md:text-base font-medium text-grayText">
                        Review regulatory, supervisory, and oversight frameworks
                        to ensure they remain fit for purpose and enable the
                        authorities to foster a safe, efficient, and inclusive
                        financial system.
                    </li>
                    <li className="text-sm md:text-base font-medium text-grayText">
                        Anticipate market structure tendencies and proactively
                        shape them to foster competition and contestability in
                        the financial sector.
                    </li>
                    <li className="text-sm md:text-base font-medium text-grayText">
                        Modernize and open up financial infrastructures to
                        enable competition and contestability.
                    </li>
                    <li className="text-sm md:text-base font-medium text-grayText">
                        Ensure public money remains fit for the digital world
                        amid rapid advances in private money solutions.
                    </li>
                    <li className="text-sm md:text-base font-medium text-grayText">
                        Pursue strong cross-border coordination and sharing of
                        information and best practices, given the supra-national
                        nature of fintech.
                    </li>
                </ul>
                <p className="text-sm md:text-base font-medium text-grayText mt-5">
                    Therefore, In Tanzania & Africa we need to move ahead of the
                    Curve and Unlock the Potentials presented by Fintech.
                </p>
            </div>
        </SectionWrapper>
    );
};

export default AboutFintech;
