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
                            src="/images/fintech.png"
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
        </SectionWrapper>
    );
};

export default AboutFintech;
