const additionalPrices = [
    {
        name: "Cocktail Party (one day – 500 pax)",
        price: "USD 13,500.00",
    },
    {
        name: "Breakfast (one day – 100 pax)",
        price: "USD 5,000.00",
    },
    {
        name: "Reception (500 pax) ",
        price: " USD 15,000.000",
    },
    {
        name: "BBQ (1 day – 700 pax) ",
        price: " USD 13,500.00",
    },
    {
        name: "Deep Dive Session (100 pax)",
        price: "USD 27,000.00",
    },
    {
        name: "Award Ceremony (400 pax)",
        price: "USD 20,500.00",
    },
    {
        name: "Fintech Speed Dating",
        price: "USD 10,000.00",
    },
    {
        name: "(100 pax) Closing Party (400 pax)",
        price: "USD 15,000.00",
    },
];

const OtherPricingDetails = () => {
    return (
        <div className="grid lg:grid-cols-2">
            <div className="pl-[calc(((100vw-1280px)/2))] py-20 bg-bluePrimary">
                <div className="px-4 mr-12">
                    <h1 className="text-lg lg:text-xl font-semibold text-white mb-4">
                        Side events and additional opportunities to get involved
                        in
                    </h1>
                    <p className="text-sm sm:text-base text-gray-300">
                        Additional Partnership Opportunities
                    </p>
                    <ul className="list-decimal ml-4 mt-2 space-y-2">
                        {additionalPrices.map((price, priceIdx) => (
                            <li className="text-grayText text-sm xs:text-base flex items-center justify-between">
                                <span className="font-semibold text-gray-300">
                                    {price.name}
                                </span>
                                <span className="font-semibold text-gray-300">
                                    {price.price}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="pr-[calc(((100vw-1280px)/2))] py-16 md:pl-8">
                <div className="px-4">
                    <h1 className="text-lg lg:text-xl font-semibold text-blackPrimary mb-4">
                        Expected Services / Provisions during the FFT2023:
                    </h1>
                    <ul className="list-decimal ml-4 mt-2 space-y-2">
                        <li className="text-grayText text-sm xs:text-base">
                            Tables and chairs(as many as you want)
                        </li>
                        <li className="text-grayText text-sm xs:text-base">
                            Construction of the stall (you have to do the
                            interior decor of the stall in order to
                            maintainbrand consistency of the company)
                        </li>
                        <li className="text-grayText text-sm xs:text-base">
                            Free write-up in the Expo catalogue that is handed
                            to our visitors free of charge at theentrance.
                            (Printed 3,000 copies).
                        </li>
                        <li className="text-grayText text-sm xs:text-base">
                            Power socket for every stall.
                        </li>
                        <li className="text-grayText text-sm xs:text-base">
                            Light bulbs.
                        </li>
                        <li className="text-grayText text-sm xs:text-base">
                            Laptop locker (to keep your laptops safe).
                        </li>
                        <li className="text-grayText text-sm xs:text-base">
                            Running your company logo in the Expo newspaper
                            adverts every Thursday, one month towardsthe event.
                        </li>
                        <li className="text-grayText text-sm xs:text-base">
                            Featuring your logo in Our website
                        </li>
                        <li className="text-grayText text-sm xs:text-base">
                            Two tickets to the Tanzania Fintech and Banking
                            Conference 2023.
                        </li>
                        <li className="text-grayText text-sm xs:text-base">
                            Seven-day car pass for free parking at the JNICC
                            parking area during theexpo.
                        </li>
                        <li className="text-grayText text-sm xs:text-base">
                            24-hour security during the expo.
                        </li>
                        <li className="text-grayText text-sm xs:text-base">
                            Drinking water.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OtherPricingDetails;
