import { FC } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";

interface IHomeIntro {}

const HomeIntro: FC<IHomeIntro> = () => {
    return (
        <div className="relative">
            <video
                className="absolute -z-20 w-full object-cover object-center h-full top-0 left-0"
                loop
                autoPlay
            >
                <source src="/videos/home-intro-video.webm" type="video/webm" />
            </video>
            <div className="bg-blueTransparent">
                <SectionWrapper>
                    <div className="max-w-[980px] mx-auto py-28 sm:py-40">
                        <div className="text-center">
                            <h1 className="text-lg sm:text-xl font-semibold text-white">
                                08<sup>th</sup> - 09<sup>th</sup> November 2023
                            </h1>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-white uppercase">
                                The future of Fintech & Ecommerce in Africa
                            </h1>
                            <p className="my-4 mb-8 text-sm xs:text-base max-w-2xl mx-auto font-medium text-[#fffe]">
                                Whether you are a start-up, technology company,
                                investor, financial institution, research
                                institute, or innovation professional, Fintech
                                will play a pivotal role in further
                                strengthening the ecosystem and enhancing
                                collaboration between Tanzania & Global FinTech
                                community.
                            </p>
                            <div className="space-x-4">
                                <Link
                                    className="font-medium bg-greenPrimary border border-greenPrimary hover:bg-bluePrimary duration-300 py-3 px-6 xs:px-4 sm:px-12 text-white uppercase"
                                    to="/apply-sponsor"
                                >
                                    Sponsor/Exhibit Now
                                </Link>
                                <Link
                                    className="font-medium bg-greenPrimary border border-greenPrimary hover:bg-bluePrimary duration-300 py-3 px-6 xs:px-4 sm:px-12 text-white uppercase"
                                    to="/apply-speaker"
                                >
                                    Apply to Speak
                                </Link>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </div>
        </div>
    );
};

export default HomeIntro;
