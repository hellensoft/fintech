import { FC } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import SectionWrapper from "./SectionWrapper";
import { FaChevronDown } from "react-icons/fa";

interface IWhySponser {}

const questions = [
	{
		name: "AMPLIFY YOUR BRAND",
		description: "To reach new customers and markets.",
	},
	{
		name: "CREATE THOUGHT LEADERSHIP",
		description: "To advance the current thinking in the industry.",
	},
	{
		name: "GENERATE LEADS AND BUILD PURPOSEFUL RELATIONSHIPS",
		description: "With new customers, partners, and investors.",
	},
	{
		name: "LAUNCH NEW PRODUCTS / SERVICES",
		description:
			"In front of global media to generate exposure and mindshare",
	},
	{
		name: "ATTRACT LEADING TALENT TO YOUR BUSINESS",
		description: "To address skills gaps and growth areas.",
	},
];

const WhySponser: FC<IWhySponser> = () => {
	return (
		<SectionWrapper>
			<div className="py-12 sm:py-28">
				<div className="text-center mx-auto mb-12 max-w-[900px]">
					<h1 className="text-2xl sm:text-3xl text-bluePrimary font-semibold mb-2">
						WHY EXHIBITOR OR SPONSOR?
					</h1>
					<p className="text-grayText text-sm sm:text-base font-medium">
						This is an opportunity to become a partner and get
						exposure to more than 3,000 execu- tives from across
						Tanzania, Africa, and the entire World. Get in front of
						the FinTech com- munity, which prioritises meeting new
						solution providers and forging relations to grow their
						businesses.
					</p>
				</div>
				<div className="flex flex-col items-start space-y-4 max-w-4xl mx-auto">
					{questions.map((question, index) => (
						<Disclosure
							as="div"
							key={index}
							className="w-full shadow border rounded-md p-4"
						>
							{({ open }) => (
								<>
									<Disclosure.Button className="text-base xs:text-md text-bluePrimary w-full flex text-start items-center justify-between font-medium">
										<span>{question.name}</span>
										<div>
											<FaChevronDown
												className={`h-3 xs:h-5 w-3 xs:w-5 duration-100 ${
													open
														? "rotate-180"
														: "rotate-0"
												}`}
											/>
										</div>
									</Disclosure.Button>

									<Transition
										enter="transition duration-100 ease-out"
										enterFrom="transform scale-95 opacity-0"
										enterTo="transform scale-100 opacity-100"
										leave="transition duration-75 ease-out"
										leaveFrom="transform scale-100 opacity-100"
										leaveTo="transform scale-95 opacity-0"
									>
										<Disclosure.Panel
											as="div"
											className="border-t mt-2 pt-4"
										>
											<p className="text-grayText text-sm sm:text-base font-medium">
												{question.description}
											</p>
										</Disclosure.Panel>
									</Transition>
								</>
							)}
						</Disclosure>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
};

export default WhySponser;
