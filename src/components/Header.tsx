import { FC, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import SectionWrapper from "./SectionWrapper";
import navigations from "../data/topNav.json";

interface IHeader {}

const Header: FC<IHeader> = () => {
	return (
		<div className="border-b">
			<SectionWrapper>
				<div className="flex items-center justify-between py-8">
					<div>
						<Link to="/">
							<img
								className="h-16 w-auto"
								src="/images/logo-words.png"
								alt="logo"
							/>
						</Link>
					</div>
					<div className="ml-auto space-x-8 flex items-center">
						{navigations.map((nav, index) => (
							<Fragment key={index}>
								{nav.multiple ? (
									<Popover key={index} className="relative">
										{({ open }) => (
											<>
												<Popover.Button
													className={`hover:text-greenPrimary font-medium focus:outline-none flex items-center ${
														open
															? "text-greenPrimary"
															: "text-bluePrimary"
													} duration-300`}
												>
													<span>{nav.name}</span>
													<BsChevronDown
														className={`ml-2 duration-300 ${
															open
																? "rotate-180"
																: "rotate-0"
														}`}
													/>
												</Popover.Button>
												<Transition
													as={Fragment}
													enter="transition duration-100 ease-out"
													enterFrom="transform scale-95 opacity-0"
													enterTo="transform scale-100 opacity-100"
													leave="transition duration-75 ease-out"
													leaveFrom="transform scale-100 opacity-100"
													leaveTo="transform scale-95 opacity-0"
												>
													<Popover.Panel className="absolute z-10">
														<div className="bg-white shadow-md rounded mt-4 w-auto min-w-[250px] border flex flex-col items-start divide-y">
															{nav.links?.map(
																(
																	link,
																	index
																) => (
																	<NavLink
																		key={
																			index
																		}
																		to={
																			link.link ||
																			"/"
																		}
																		className={({
																			isActive,
																		}) =>
																			`hover:text-greenPrimary font-medium text-bluePrimary hover:bg-[#eee] px-4 py-2 w-full ${
																				isActive &&
																				"bg-[#eee] text-bluePrimary"
																			}`
																		}
																	>
																		{
																			link.name
																		}
																	</NavLink>
																)
															)}
														</div>
													</Popover.Panel>
												</Transition>
											</>
										)}
									</Popover>
								) : (
									<NavLink
										key={index}
										to={nav.link || "/"}
										className={({ isActive }) =>
											`hover:text-greenPrimary font-medium text-bluePrimary ${
												isActive && "text-greenPrimary"
											}`
										}
									>
										{nav.name}
									</NavLink>
								)}
							</Fragment>
						))}
						<Link
							className="font-medium bg-bluePrimary hover:bg-greenPrimary duration-300 py-2 px-6 rounded-md text-white"
							to="/register"
						>
							Register
						</Link>
					</div>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default Header;
