import { BsCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

const tiers = [
	{
		name: "STANDARD",
		href: "#",
		priceMonthly: 300,
		description: "Valid till 20 August 2023",
		features: [
			"Conference zone",
			"Networking zone",
			"Exhibition zone",
			"Executive lunch and coffee zone",
		],
	},
	{
		name: "VIP",
		href: "#",
		priceMonthly: 1000,
		description: "Valid till 20 August 2023",
		features: [
			"All in Standard Package",
			"Startup zone",
			"Coctail Party",
			"African Fintech Awards",
			"Live Presentation",
			"VIP and Speakers Zone",
		],
	},
];

const TicketCards = () => {
	return (
		<div className="bg-bluePrimary">
			<div className="sm:pt-16 lg:pt-24">
				<div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
					<div className="mx-auto max-w-3xl space-y-2 lg:max-w-none">
						<p className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-5xl">
							Fintech Festival Tanzania 2023
						</p>
						<p className="text-xl text-gray-300">
							Purchase your ticket today.
						</p>
					</div>
				</div>
			</div>
			<div className="mt-8 bg-gray-50 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
				<div className="relative">
					<div className="absolute inset-0 h-3/4 bg-bluePrimary" />
					<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-md space-y-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0">
							{tiers.map((tier) => (
								<div
									key={tier.name}
									className="flex flex-col overflow-hidden rounded-lg shadow-lg"
								>
									<div className="bg-white px-6 py-8 sm:p-10 sm:pb-6">
										<div>
											<h3
												className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-base font-semibold text-indigo-600"
												id="tier-standard"
											>
												{tier.name}
											</h3>
										</div>
										<div className="mt-4 flex items-baseline text-6xl font-bold tracking-tight">
											${tier.priceMonthly}{" "}
											<span className="text-base font-normal -mt-4 ml-2">
												/ 3 days
											</span>
										</div>
										<p className="mt-5 text-lg text-gray-500">
											{tier.description}
										</p>
									</div>
									<div className="flex flex-1 flex-col justify-between space-y-6 bg-gray-50 px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
										<ul role="list" className="space-y-4">
											{tier.features.map((feature) => (
												<li
													key={feature}
													className="flex items-start"
												>
													<div className="flex-shrink-0">
														<BsCheck
															className="h-6 w-6 text-green-500"
															aria-hidden="true"
														/>
													</div>
													<p className="ml-3 text-base text-gray-700">
														{feature}
													</p>
												</li>
											))}
										</ul>
										<div className="rounded-md shadow">
											<a
												href={tier.href}
												className="flex items-center justify-center rounded-md border border-transparent bg-bluePrimary px-5 py-3 text-base font-medium text-white hover:bg-greenPrimary"
												aria-describedby="tier-standard"
											>
												Get started
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="relative mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:mt-5 lg:px-8">
					<div className="mx-auto max-w-md lg:max-w-5xl">
						<div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
							<div className="flex-1">
								<div>
									<h3 className="inline-flex rounded-full bg-white px-4 py-1 text-base font-semibold text-gray-800">
										Become a Sponsor
									</h3>
								</div>
								<div className="mt-4 text-lg text-gray-600">
								Showcase your Fintech products, or just how you contribute to Fintech growth and evolution, or simply give back to the fintech community for massive contribution they have done to your business.
								</div>
							</div>
							<div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
								<Link
									to="/apply-sponsor"
									className="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
								>
									Apply to Sponsor
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TicketCards;
