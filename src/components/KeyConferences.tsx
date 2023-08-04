import SectionWrapper from "./SectionWrapper";
import conferences from "../data/conferences.json";

const KeyConferences = () => {
    return (
        <SectionWrapper>
            <div className="py-12 sm:py-24">
                <h1 className="text-2xl md:text-4xl text-center font-semibold text-bluePrimary">
                    Key Conferences
                </h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 py-12">
                    {conferences.map((conf, index) => (
                        <div
                            className="relative group overflow-hidden rounded"
                            key={index}
                        >
                            <img src={conf.image} alt={conf.name} />
                            <div className="group-hover:inline-block translate-y-full duration-300 group-hover:translate-y-0 transform bg-white/95 border absolute bottom-0 left-0 w-full">
                                <div className="p-8">
                                    <h2 className="text-xl text-bluePrimary font-bold">
                                        {conf.name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default KeyConferences;
