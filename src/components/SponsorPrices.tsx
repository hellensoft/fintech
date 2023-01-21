import { FC } from "react";
import { Link } from "react-router-dom";
import { FaPeopleCarry } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";
import { BsStar, BsDashLg } from "react-icons/bs";

interface ISponsorPrices {}

const prices = [
	{
		name: "EXHIBITOR",
		price: "4000 (3m*3m)",
		description: "USD 2500 (2m*2m)"
	},
	{
		name: "STARTUP EXHIBITOR",
		price: 1500,
		description: ""
	},
];

const SponsorPrices: FC<ISponsorPrices> = () => {
	return (
		<div className="grid lg:grid-cols-2">
			<div className="pl-[calc(((100vw-1280px)/2))] py-20 bg-bluePrimary">
				<div className="px-4">
					<div className="lg:max-w-[360px] mx-auto space-y-12">
						<div className="space-y-12 items-center lg:space-y-12 flex flex-col md:flex-row lg:flex-col space-x-0 md:space-x-4 lg:space-x-0">
							{prices.map((price, index) => (
								<div
									className="bg-white max-w-[360px] w-full mx-auto p-8 flex flex-col items-center rounded-lg space-y-2"
									key={index}
								>
									<h3 className="font-semibold text-blackPrimary text-2xl">
										{price.name}
									</h3>
									<h1 className="font-semibold text-blackPrimary text-2xl">
										USD {price.price}
									</h1>
									<p className="font-regular text-blackPrimary text-xl">
										<em>{price.description} </em>
									</p>
									<Link
										className="font-medium bg-bluePrimary hover:bg-greenPrimary duration-300 py-2 px-6  text-white"
										to="/enquiry"
									>
										Reserve space
									</Link>
								</div>
							))}
						</div>
						<p className="text-white text-center font-medium">
							Hurry! Raw exhibition spaces are limited, and are
							allotted on first-come-first-serve basis.
						</p>
					</div>
				</div>
			</div>
			<div className="pr-[calc(((100vw-1280px)/2))] py-16 md:pl-8">
				<div className="px-4">
					<h1 className="text-2xl lg:text-3xl font-semibold text-blackPrimary mb-4">
						PACKAGE BENEFITTS
					</h1>
					<div className="space-y-4">
						<div className="flex items-start space-x-3">
							<div className="bg-greenPrimary rounded-full p-2 xs:p-3">
								<FaPeopleCarry className="w-4 xs:w-8 h-4 xs:h-8 text-white" />
							</div>
							<div className="mt-1">
								<p className="text-grayText text-sm xs:text-base">
									Exhibition space:{" "}
									<span className="text-greenPrimary font-semibold">
										9 sq mt
									</span>
								</p>
								<p className="text-grayText text-sm xs:text-base">
									Raw exhibition space with a table and 4
									chairs.
								</p>
							</div>
						</div>
						<div className="flex items-start space-x-3">
							<div className="bg-greenPrimary rounded-full p-2 xs:p-3">
								<HiOutlineTicket className="w-4 xs:w-8 h-4 xs:h-8 text-white" />
							</div>
							<div className="mt-1">
								<p className="text-grayText text-sm xs:text-base">
									Tickets:{" "}
									<span className="text-greenPrimary font-semibold">
										2
									</span>
								</p>
								<p className="text-grayText text-sm xs:text-base">
									Standard pass (Access to Exhibition Zone,
									Conference Zone, Networking Breaks and
									Luncheons)
								</p>
							</div>
						</div>
						<div className="flex items-start space-x-3">
							<div className="bg-greenPrimary rounded-full p-2 xs:p-3">
								<BsStar className="w-4 xs:w-8 h-4 xs:h-8 text-white" />
							</div>
							<div className="mt-1">
								<p className="text-grayText text-sm xs:text-base">
									Branding:
								</p>
								<ul className="list-disc ml-4 mt-2 space-y-2">
									<li className="text-grayText text-sm xs:text-base">
										Your company logo with a hyperlink to
										your website will appear on the event
										website.
									</li>
									<li className="text-grayText text-sm xs:text-base">
										Your company logo will be branded on
										pre-event promotional materials and
										at-event materials including but not
										limited to:
									</li>
									<div className="ml-4 my-2">
										<div className="flex items-center space-x-2">
											<BsDashLg className="text-grayText" />
											<span className="text-grayText text-sm xs:text-base">
												LED screen stage backdrop
											</span>
										</div>
										<div className="flex items-center space-x-2">
											<BsDashLg className="text-grayText" />
											<span className="text-grayText text-sm xs:text-base">
												Roll-up standees
											</span>
										</div>
										<div className="flex items-center space-x-2">
											<BsDashLg className="text-grayText" />
											<span className="text-grayText text-sm xs:text-base">
												Event emailers
											</span>
										</div>
										<div className="flex items-center space-x-2">
											<BsDashLg className="text-grayText" />
											<span className="text-grayText text-sm xs:text-base">
												Post-event reportv
											</span>
										</div>
									</div>
									<li className="text-grayText text-sm xs:text-base">
										Listing of company name, logo, and short
										description will be featured on the
										event website
									</li>
									<li className="text-grayText text-sm xs:text-base">
										Event website to contain and maintain
										the same level of branding for up to 6
										months after the event or until the
										announcement of the next edition,
										whichever is earlier
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SponsorPrices;
