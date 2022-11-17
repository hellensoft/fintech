import { FC, Fragment } from "react";
import SectionWrapper from "./SectionWrapper";
import toMeet from "../data/toMeet.json";
import { Tab } from "@headlessui/react";

interface IWhoWillMeet {}

const WhoWillMeet: FC<IWhoWillMeet> = () => {
	return (
		<SectionWrapper>
			<div className="py-24">
				<h1 className="text-2xl md:text-3xl text-center font-semibold text-blackPrimary">
					WHO WILL YOU MEET?
				</h1>
				<div className="bg-greenPrimary mt-12">
					<Tab.Group>
						<Tab.List className="grid md:grid-cols-3 border-b divide-y md:divide-y-0 md:divide-x">
							{toMeet.map((meet, index) => (
								<Tab as={Fragment} key={index}>
									{({ selected }) => (
										<button
											className={`text-white text-lg md:text-xl font-semibold py-3 ${
												selected && "bg-bluePrimary"
											}`}
										>
											{meet.title}
										</button>
									)}
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels className="px-8 py-6">
							{toMeet.map((meet, index) => (
								<Tab.Panel className='space-y-8' key={index}>
									{meet.items.map((item, index) => (
										<div key={index} className="">
											<h2 className="text-md md:text-lg text-white font-medium">
												{item.name}
											</h2>
											<div className="ml-6 mt-2">
												<ul className="list-disc grid sm:grid-cols-2 2lg:grid-cols-3 gap-x-2 gap-y-1">
													{item.items.map(
														(list, index) => (
															<li className="text-gray-300 text-sm md:text-base" key={index}>
																{list}
															</li>
														)
													)}
												</ul>
											</div>
										</div>
									))}
								</Tab.Panel>
							))}
						</Tab.Panels>
					</Tab.Group>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default WhoWillMeet;
