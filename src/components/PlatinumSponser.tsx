import { BsCheck } from "react-icons/bs";
import SectionWrapper from "./SectionWrapper";

const features = [
    "Exclusive branding in all materials & Sponsored stage",
    "70 tickets",
    "Exhibitor stand 12sqm",
    "3 articles (print & digital) - 2 before and after event",
    "2 min promo video",
    "Thought leadership interview (3o minutes)",
    "Host your own moderated Panel",
    "1 keynote in Plenum 20 minutes session",
];

const PlatinumSponser = () => {
    return (
        <div className="bg-greenPrimary py-20">
            <SectionWrapper>
                <div className="md:flex justify-center gap-12 space-y-12">
                    <div className="ml-12 md:ml-0">
                        <h1 className="mb-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                            Platinum Sponsor
                        </h1>
                        <ul className="list-disc ml-4 sm:ml-8 space-y-1">
                            <li className="text-sm md:text-base font-medium text-gray-300">
                                License to hold affiliated side event
                            </li>
                            <li className="text-sm md:text-base font-medium text-gray-300">
                                Total Investment USD 50,000
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <ul className="divide-y divide-gray-200">
                            {features.map((feature, featureIdx) =>
                                featureIdx === 0 ? (
                                    <li
                                        key={feature}
                                        className="flex py-4 md:py-0 md:pb-4"
                                    >
                                        <BsCheck
                                            className="h-6 w-6 flex-shrink-0 text-gray-100"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-3 text-base text-gray-200">
                                            {feature}
                                        </span>
                                    </li>
                                ) : (
                                    <li key={feature} className="flex py-4">
                                        <BsCheck
                                            className="h-6 w-6 flex-shrink-0 text-gray-100"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-3 text-base text-gray-200">
                                            {feature}
                                        </span>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default PlatinumSponser;
