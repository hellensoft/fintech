import { FC } from "react";
import SectionWrapper from "./SectionWrapper";

interface IForum {}

const data: { title: string; subTItle: string }[] = [
    {
        title: "Government Fintech Forum",
        subTItle: "A policy leadership forum.",
    },
    {
        title: "CxO21",
        subTItle: "A digital banking innovation forum.",
    },
    {
        title: "Risk 4.0",
        subTItle: "A security forum.",
    },
    {
        title: "Fintech for Good",
        subTItle: "A sustainable innovation forum.",
    },
    {
        title: "Token",
        subTItle: "A block-chain forum.",
    },
    {
        title: "The Fintech East Africa Awards",
        subTItle: "Talent recognition ceremony.",
    },
    {
        title: "Fintech Online Market",
        subTItle: "The commerce and payments forum.",
    },
    {
        title: "Innovation Challenge demo day",
        subTItle: "",
    },
    {
        title: "The Plug and Play demo day",
        subTItle: "",
    },
    {
        title: "Web3",
        subTItle: "",
    },
    {
        title: "InsurTech",
        subTItle: "",
    },
    {
        title: "Microfinance in Saccos",
        subTItle: "",
    },
];

const Forum: FC<IForum> = () => {
    return (
        <div className="bg-bluePrimary">
            <SectionWrapper>
                <div className="py-24">
                    <h2 className="text-white font-semibold text-center mb-4 text-3xl sm:text-4xl lg:text-5xl">
                        2023 Forum Focus Theme
                    </h2>
                    <p className="text-[#dddddd] text-sm xs:text-base font-medium mt-1 mb-12 max-w-[850px] text-center mx-auto">
                        Fintech Festivals Tanzania 2023 would welcome over 3,000
                        international participants at the 2-day festival, the
                        vast majority being C-suite, Heads-of-Departments, key
                        decision makers, key influencers, and decision-makers.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-10 max-w-[760px] mx-auto">
                        {data.map((data, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4"
                            >
                                <span className="text-yellowPrimary hidden xs:inline-block text-2xl font-semibold">
                                    {index + 1}
                                </span>
                                <div className="flex flex-col items-start">
                                    <h2 className="text-white font-semibold text-md sm:text-xl">
                                        {data.title}
                                    </h2>
                                    <p className="text-[#dddddd] text-sm sm:text-base font-medium mt-1">
                                        {data.subTItle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default Forum;
