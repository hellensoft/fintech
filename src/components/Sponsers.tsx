import { FC, Fragment } from "react";
import SectionWrapper from "./SectionWrapper";
import { Tab } from "@headlessui/react";
import sponserData from "../data/sponsers.json";

interface ISponsers {}

const Sponsers: FC<ISponsers> = () => {
	return (
		<SectionWrapper>
			<div className="py-24">
				<h1 className="text-center text-4xl font-semibold text-blackPrimary">
					Sponsers
				</h1>
				<div className="py-12">
					<Tab.Group as="div" className="flex items-start space-x-12">
						<Tab.List
							as="div"
							className="flex flex-col w-48 border rounded divide-y"
						>
							{sponserData.map((sponsor, index) => (
								<Tab key={index} as={Fragment}>
									{({ selected }) => (
										<button
											className={`
												${
													selected
														? "bg-bluePrimary text-white"
														: "bg-white text-blackPrimary hover:bg-[#ffe]"
												} focus:outline-none py-3 text-md w-full font-medium
											`}
										>
											{sponsor.name}
										</button>
									)}
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels>
							{sponserData.map((sponsor, index) => (
								<Tab.Panel as='div' key={index}>
									{sponsor.name}
								</Tab.Panel>
							))}
						</Tab.Panels>
					</Tab.Group>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default Sponsers;
