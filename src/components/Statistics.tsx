import { FC } from "react";
import SectionWrapper from "./SectionWrapper";
import statistics from "../data/statics.json";

interface IStatistics {}

const Statistics: FC<IStatistics> = () => {
    return (
        <div className="bg-bluePrimary">
            <SectionWrapper>
                <div className="py-24">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-0 md:gap-8">
                        {statistics.map((data, index) => (
                            <div
                                className="flex flex-col items-center"
                                key={index}
                            >
                                <h2 className="text-white font-semibold text-3xl sm:text-4xl">
                                    {data.number}
                                </h2>
                                <p className="text-[#fffe] font-medium text-sm lg:text-base text-center mt-2">
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
