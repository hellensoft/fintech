import { FC } from "react";
import SectionWrapper from "./SectionWrapper";
import sponserData from "../data/sponsers.json";

interface ISponsers {}

const Sponsers: FC<ISponsers> = () => {
    return (
        <SectionWrapper>
            <div className="pb-24">
                <div className="space-y-6">
                    {sponserData.map((sponsors, index) => (
                        <div className="my-6" key={index}>
                            <h1 className="text-center text-3xl md:text-3xl font-semibold text-bluePrimary">
                                {sponsors.name}
                            </h1>
                            <div className="flex items-center justify-around my-8 gap-x-8">
                                {sponsors.list.map((spo, index) => (
                                    <div className="" key={index}>
                                        <img
                                            src={spo.logo}
                                            alt={spo.name}
                                            className="h-20 w-auto"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Sponsers;
