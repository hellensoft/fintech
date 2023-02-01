import { BsCheck } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import SectionWrapper from "./SectionWrapper";

const check = <BsCheck className="h-5 w-5 text-green-500" aria-hidden="true" />;
const minus = (
    <AiOutlineMinus className="h-5 w-5 text-gray-300" aria-hidden="true" />
);

const tiers = [
    {
        name: "Ecosystem",
        href: "#",
        price: "6000",
    },
    {
        name: "Expert",
        href: "#",
        price: "20,000",
    },
    {
        name: "Disruptor",
        href: "#",
        price: "40,000",
    },
];
const features = [
    {
        name: "Logo display in all material",
        tiers: { Ecosystem: check, Expert: check, Disruptor: check },
    },
    {
        name: "Complementary tickets",
        tiers: { Ecosystem: 10, Expert: 20, Disruptor: 30 },
    },
    {
        name: "Exhibitor stand m2",
        tiers: { Ecosystem: "4 sqm", Expert: "9 sqm", Disruptor: "12 sqm" },
    },
    {
        name: "1 article/ advertorial (print & digital) *",
        tiers: { Ecosystem: check, Expert: check, Disruptor: check },
    },
    {
        name: "2 min promo video*",
        tiers: { Disruptor: check },
    },
    {
        name: "Expert video interview *",
        tiers: {
            Ecosystem: minus,
            Expert: "10 minutes",
            Disruptor: "20 minutes",
        },
    },
    {
        name: "Interview infosnack 90 sec *",
        tiers: { Ecosystem: minus, Expert: check, Disruptor: check },
    },
    {
        name: "1 panel seat 30 min session",
        tiers: { Ecosystem: minus, Expert: check, Disruptor: check },
    },
    {
        name: "1 keynote in breakout 20 min **",
        tiers: { Ecosystem: minus, Expert: check, Disruptor: check },
    },
    {
        name: "1 opening keynote in breakout 20 min **-",
        tiers: { Ecosystem: minus, Disruptor: minus },
    },
    {
        name: "License to hold affiliate side event",
        tiers: { Ecosystem: minus, Disruptor: check },
    },
];

const PartnerPackage = () => {
    return (
        <SectionWrapper>
            <div className="py-16 max-w-5xl mx-auto">
                <h1 className="text-2xl text-center sm:text-3xl font-semibold text-bluePrimary mb-12">
                    FFT2023 Partnership Packages
                </h1>
                {/* {sm devices} */}
                <div className="mx-auto max-w-2xl space-y-16 lg:hidden">
                    {tiers.map((tier, tierIdx) => (
                        <section key={tier.name}>
                            <div className="mb-8 px-0 sm:px-4">
                                <h2 className="text-xl font-semibold leading-6 text-gray-900">
                                    {tier.name}
                                </h2>
                            </div>

                            <table key="phoneFeatures" className="w-full">
                                <thead>
                                    <tr>
                                        <th className="sr-only" scope="col">
                                            Feature
                                        </th>
                                        <th className="sr-only" scope="col">
                                            Included
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {features.map((feature) => (
                                        <tr
                                            key={feature.name}
                                            className="border-t border-gray-200"
                                        >
                                            <th
                                                className="py-5 px-0 text-left text-sm font-normal text-gray-500 sm:px-4"
                                                scope="row"
                                            >
                                                {feature.name}
                                            </th>
                                            <td className="py-5 pr-6 sm:pr-4">
                                                <p className="flex items-center justify-center text-xs whitespace-nowrap sm:text-sm text-gray-700">
                                                    {
                                                        feature.tiers[
                                                            tier.name as keyof typeof feature.tiers
                                                        ]
                                                    }
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div
                                className={`border-t border-gray-200 px-0 sm:px-4 flex justify-end`}
                            >
                                <td key={tier.name} className="px-6 pt-5">
                                    <p className="text-end">
                                        <span className="text-xl font-semibold tracking-tight text-gray-900">
                                            ${tier.price}
                                        </span>
                                    </p>
                                </td>
                            </div>
                        </section>
                    ))}
                </div>

                {/* lg+ */}
                <div className="hidden lg:block">
                    <table className="h-px w-full table-fixed">
                        <caption className="sr-only">
                            Pricing plan comparison
                        </caption>
                        <thead>
                            <tr>
                                <th
                                    className="px-6 pb-4 text-left text-sm font-medium text-gray-900"
                                    scope="col"
                                >
                                    <span className="sr-only">Feature by</span>
                                </th>
                                {tiers.map((tier) => (
                                    <th
                                        key={tier.name}
                                        className="w-1/5 px-6 pb-4 text-center text-lg font-medium leading-6 text-gray-900"
                                        scope="col"
                                    >
                                        {tier.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 border-t border-gray-200">
                            {features.map((feature) => (
                                <tr
                                    key={feature.name}
                                    className="divide-x border border-gray-200 divide-gray-200"
                                >
                                    <th
                                        className="py-5 px-6 text-left text-sm font-normal text-gray-500"
                                        scope="row"
                                    >
                                        {feature.name}
                                    </th>
                                    {tiers.map((tier) => (
                                        <td
                                            key={tier.name}
                                            className="py-5 px-6"
                                        >
                                            <p className="flex items-center justify-center text-sm text-gray-700">
                                                {
                                                    feature.tiers[
                                                        tier.name as keyof typeof feature.tiers
                                                    ]
                                                }
                                            </p>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="border-t border-gray-200">
                                <th className="sr-only" scope="row">
                                    Choose your plan
                                </th>
                                {tiers.map((tier) => (
                                    <td
                                        key={tier.name}
                                        className="px-6 pt-5 text-center"
                                    >
                                        <p>
                                            <span className="text-2xl font-semibold tracking-tight text-gray-900">
                                                ${tier.price}
                                            </span>
                                        </p>
                                    </td>
                                ))}
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="space-y-2 mt-16">
                    <p className="text-blackPrimary font-medium text-sm sm:text-base">
                        <span className="text-bluePrimary font-semibold">
                            Note:
                        </span>{" "}
                        all prices exclude VAT at 18%
                    </p>
                    <p className="text-blackPrimary font-medium text-sm sm:text-base">
                        *Includes multiplatform distribution to ca. 8,000
                        recipients
                    </p>
                    <p className="text-blackPrimary font-medium text-sm sm:text-base">
                        **Subject to content and speaker seniority approval
                    </p>
                    <ul className="list-disc ml-8 sm:ml-16 space-y-1">
                        <li className="text-sm md:text-base font-medium text-grayText">
                            Logo Displayed on all Marketing materials USD 4,000
                        </li>
                        <li className="text-sm md:text-base font-medium text-grayText">
                            Delegate For Tanzania Fintech and Banking Conference
                            2023 Fee: $300/Day
                        </li>
                        <li className="text-sm md:text-base font-medium text-grayText">
                            Exhibition Cost 9sqm Stand is $4000 4sqm Stand is
                            $2500
                        </li>
                        <li className="text-sm md:text-base font-medium text-grayText">
                            Banner Advertisement in exhibition and conference
                            hall 4*8 maximum is $1,000
                        </li>
                        <li className="text-sm md:text-base font-medium text-grayText">
                            Tickets (pack of 10) For Three Days USD 8,000
                        </li>
                        <li className="text-sm md:text-base font-medium text-grayText">
                            Article/Advertorial (Print and Digital) USD 1,500
                        </li>
                        <li className="text-sm md:text-base font-medium text-grayText">
                            Expert video interview/ Podcast 10 minutes USD 1,000
                        </li>
                        <li className="text-sm md:text-base font-medium text-grayText">
                            Panel Interview 30 minutes USD 2,500
                        </li>
                        <li className="text-sm md:text-base font-medium text-grayText">
                            Keynote session in breakout rooms 20 minutes USD
                            3,000
                        </li>
                        <li className="text-sm md:text-base font-medium text-grayText">
                            Opening keynote session in breakout 20 minutes USD
                            2,000
                        </li>
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default PartnerPackage;
