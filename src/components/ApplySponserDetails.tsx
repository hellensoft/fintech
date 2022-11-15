import { FC } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
import { FaTicketAlt, FaPeopleCarry } from 'react-icons/fa'
import { BsDashLg, BsStar } from "react-icons/bs";

interface IApplySponsorDetails {}

const ApplySponsorDetails: FC<IApplySponsorDetails> = () => {
	return (
		<SectionWrapper>
			<div className="mt-20 border-b border-grayText2">
				<p className="text-grayText text-sm xs:text-base">
					<span className="text-greenPrimary font-semibold">
						Note:
					</span>{" "}
					This form is to book an 'EXHIBITOR PACKAGE' with 9 sq mt raw
					space at Tanzania Fintech Show, taking place on 23 - 25
					August 2023 at Dar es salaam, Tanzania.
				</p>
				<p className="text-grayText text-sm xs:text-base mt-2">
					If you are looking to explore other available sponsorship
					options, please fill this{" "}
					<Link
						className="text-bluePrimary font-semibold hover:text-greenPrimary duration-150"
						to="/enquiry"
					>
						enquiry form.
					</Link>
				</p>
				<div className="my-6">
					<h1 className="text-xl sm:text-2xl text-blackPrimary font-semibold">
						Instructions to book your exhibition space
					</h1>
					<div className="mt-2">
						<p className="text-grayText text-sm xs:text-base">
							<span className="text-greenPrimary font-semibold">
								STEP 1:
							</span>{" "}
							Complete this form ensuring correct spelling,
							capitalization and spacing where necessary and
							submit.
						</p>
						<p className="text-grayText text-sm xs:text-base">
							<span className="text-greenPrimary font-semibold">
								STEP 2:
							</span>{" "}
							Submit and proceed to make payment online.
						</p>
					</div>
				</div>
				<div className="my-6">
					<h1 className="text-xl sm:text-2xl text-blackPrimary font-semibold">
						Package Benefits
					</h1>
					<div className="mt-4 space-y-4">
						<div className="flex items-start space-x-3">
							<div className="p-2 rounded-full bg-greenPrimary">
								<FaPeopleCarry className="w-4 sm:w-8 h-4 sm:h-8 text-white" />
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
							<div className="p-2 rounded-full bg-greenPrimary">
								<FaTicketAlt className="w-4 sm:w-8 h-4 sm:h-8 text-white" />
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
							<div className="p-2 rounded-full bg-greenPrimary">
								<BsStar className="w-4 sm:w-8 h-4 sm:h-8 text-white" />
							</div>
							<div className="mt-1">
								<p className="text-grayText text-sm xs:text-base">
									Branding:
								</p>
								<ul className="list-disc ml-4 mt-2 grid grid-cols-2 gap-x-20 gap-y-2">
									<li className="text-grayText text-sm xs:text-base">
										Your company logo with a hyperlink to
										your website will appear on the event
										website.
									</li>
									<li className="text-grayText text-sm xs:text-base">
                                    Listing of company name, logo, and short description will be featured on the event websitev
									</li>
									<div className="">
										<li className="text-grayText text-sm xs:text-base">
                                        Your company logo will be branded on pre-event promotional materials and at-event materials including but not limited to:
										</li>
                                        <div className="my-3 ml-4 space-y-2">
                                            <div className="text-grayText text-sm xs:text-base flex items-center space-x-2">
                                                <BsDashLg />
                                                <span>LED screen stage backdrop</span>
                                            </div>
                                            <div className="text-grayText text-sm xs:text-base flex items-center space-x-2">
                                                <BsDashLg />
                                                <span>Roll-up standees</span>
                                            </div>
                                            <div className="text-grayText text-sm xs:text-base flex items-center space-x-2">
                                                <BsDashLg />
                                                <span>Event emailers</span>
                                            </div>
                                            <div className="text-grayText text-sm xs:text-base flex items-center space-x-2">
                                                <BsDashLg />
                                                <span>Post-event report</span>
                                            </div>
                                        </div>
									</div>
									<li className="text-grayText text-sm xs:text-base">
                                    Event website to contain and maintain the same level of branding for up to 6 months after the event or until the announcement of the next edition, whichever is earlier
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default ApplySponsorDetails;
