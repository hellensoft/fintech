import { FC } from "react";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";
import countryList from "react-select-country-list";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import ApplySponsorDetails from "../components/ApplySponserDetails";
import { Link } from "react-router-dom";

interface IApplySponsor {}

const ApplySponsor: FC<IApplySponsor> = () => {
	const countries = countryList().getData();

	const industry = [
		"Accounting",
		"Archtecture & Planning",
		"Airlines/Aviation",
		"Arts & Crafts",
		"Altenative Dispute Resolution",
		"Automotive",
		"Altenative Medicine",
		"Aviation & Aerospace",
		"Animation",
		"Banking",
		"Apparel & Fashion",
		"Biotechnology",
		"Broadcast Media",
		"Building Materials",
		"Bussiness Supply & Equipment",
		"Capital Markets",
		"Chemical",
		"Civic & Social Organization",
		"Civic Engineering",
		"Cormmercial Real Estate",
		"Computer & Network Security",
		"Computer Games",
		"Computer Hardware",
		"Computer Networking",
		"Computer Software",
	];

	return (
		<div>
			<PageIntro
				title="Apply as a Sponsor/Exhibitor"
				description="Become a speaker"
			/>
			<ApplySponsorDetails />
			<SectionWrapper>
				<div className="py-20 max-w-5xl mx-auto">
					<Formik
						initialValues={{
							jobTitle: "",
							country: "Tanzania, United Republic of",
							companyName: "",
							companyPhone: "",
							city: "",
							phoneNumber: "",
							workingIn: "",
							firstName: "",
							lastName: "",
							website: "",
							industry: "",
							linkedin: "",
							twitter: "",
							facebook: "",
							email: "",
							companyEmail: "",
							individualDetails: "",
							hearedFrom: "",
							financeName: "",
							financeJob: "",
							financeMobile: "",
							financeEmail: "",
							companyAddress: "",
							vatNumber: "",
							solutions: "",
							acceptTerms: false,
							consent: false,
							acceptPayment: false,
						}}
						validationSchema={yup.object().shape({
							firstName: yup
								.string()
								.required("Please fill this field"),
							interestedIn: yup
								.string()
								.required("Please fill this field"),
							jobTitle: yup
								.string()
								.required("Please fill this field"),
							country: yup
								.string()
								.required("Please fill this field"),
							workingIn: yup
								.string()
								.required("Please fill this field"),
							hearedFrom: yup
								.string()
								.required("Please fill this field"),
							companyName: yup
								.string()
								.required("Please fill this field"),
							lastName: yup
								.string()
								.required("Please fill this field"),
							email: yup
								.string()
								.email("Please enter a valid email")
								.required("Please fill this field"),
							phoneNumber: yup
								.number()
								.required("Please fill this field"),
							companyLogo: yup
								.mixed()
								.test(
									"fileSize",
									"File too large",
									(value) =>
										value === null ||
										(value && value.size <= 5000)
								)
								.test(
									"fileFormat",
									"Unsupported file type",
									(value) =>
										value === null ||
										(value &&
											["application/pdf"].includes(
												value.type
											))
								),
						})}
						onSubmit={(values) => console.log(values)}
					>
						{({ values, setFieldValue }) => (
							<Form className="grid grid-cols-1 gap-6">
								{/* POINT OF CONTACT */}

								<div className="">
									<h3 className="text-md md:text-lg font-medium text-blackPrimary">
										POINT OF CONTACT
									</h3>
									<p className="text-grayText text-sm xs:text-base">
										<span className="text-greenPrimary font-semibold">
											Note:
										</span>
										Our Event Coordinator will contact this
										person for Sponsorship related details.
										The details of your company
										representatives who will attend the
										event will be collected separately.
									</p>
									<div className="xs:grid space-y-4 xs:space-y-0 xs:grid-cols-2 my-4 gap-x-6 sm:gap-x-12 gap-y-4">
										{/* FIRST NAME */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="firstName"
											>
												First Name
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="firstName"
													name="firstName"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="firstName">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* LAST NAME */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="lastName"
											>
												Last Name
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="lastName"
													name="lastName"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="lastName">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* EMAIL ADDRESS */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="email"
											>
												Email Address
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="email"
													name="email"
													type="email"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="email">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* PHONE NUMBER */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="phoneNumber"
											>
												Phone number
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="phoneNumber"
													name="phoneNumber"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="phoneNumber">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>
									</div>
								</div>

								{/* COMPANY DETAILS */}

								<div className="">
									<h3 className="text-md md:text-lg font-medium text-blackPrimary">
										COMPANY DETAILS
									</h3>

									{/* COMPANY LOGO */}
									<div className="space-y-1">
										<label
											className="text-grayText text-sm sm:text-base text-start sm:text-end"
											htmlFor="companyLogo"
										>
											Company Logo
											<span className="text-bluePrimary ml-1">
												*
											</span>
										</label>
										<p className="text-grayText text-sm xs:text-base my-1">
											<span className="text-greenPrimary font-semibold">
												Note:
											</span>{" "}
											EPS/PDF vector format only. Low
											resolution logos will render very
											bad in print and online
										</p>
										<div>
											<input
												id="companyLogo"
												name="companyLogo"
												type="file"
												onChange={(e) => {
													if (
														e.currentTarget
															.files !== null
													) {
														setFieldValue(
															"companyLogo",
															e.currentTarget
																.files[0]
														);
													}
												}}
												className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
											/>
											<ErrorMessage name="companyLogo">
												{(error) => (
													<p className="text-sm text-red-600 ml-2">
														{error}
													</p>
												)}
											</ErrorMessage>
										</div>
									</div>

									<div className="xs:grid space-y-4 xs:space-y-0 xs:grid-cols-2 my-4 gap-x-6 sm:gap-x-12 gap-y-4">
										{/* COMPANY NAME */}
										<div className="space-y-1 col-span-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="companyName"
											>
												Company Name
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="companyName"
													name="companyName"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="companyName">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* COMPANY PHONE NUMBER */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="companyPhone"
											>
												Phone
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="companyPhone"
													name="companyPhone"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="companyPhone">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* COMPANY EMAIL */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="companyEmail"
											>
												Email Address
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="companyEmail"
													name="companyEmail"
													type="email"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="companyEmail">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* COMPANY CITY */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="city"
											>
												City
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="city"
													name="city"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="city">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* COMPANY COUNTRY */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="city"
											>
												COUNTRY
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="country"
													name="country"
													as="select"
													placeholder="Country"
													className="w-full py-1 px-2 border text-grayText focus:outline-none rounded pr-10 bg-transparent"
												>
													{countries.map(
														(country, index) => (
															<option
																key={index}
																value={
																	country.label
																}
															>
																{country.label}
															</option>
														)
													)}
												</Field>
												<ErrorMessage name="country">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* COMPANY WEBSITE */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="website"
											>
												WEBSITE
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="website"
													name="website"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="website">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* COMPANY INDRUSTRY */}
										<div className="space-y-1 xs:col-span-2">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="industry"
											>
												INDUSTRY
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="industry"
													name="industry"
													as="select"
													placeholder="industry"
													className="w-full py-1 px-2 border text-grayText focus:outline-none rounded pr-10 bg-transparent"
												>
													<option value="">
														Please choose
													</option>
													{industry.map(
														(industry, index) => (
															<option
																key={index}
																value={industry}
															>
																{industry}
															</option>
														)
													)}
												</Field>
												<ErrorMessage name="industry">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* SOCIAL MEDIA */}
										<div className="grid xs:grid-cols-3 col-span-2 gap-y-4 xs:gap-y-0 xs:gap-x-4 sm:gap-x-8">
											{/* LINKEDIN */}
											<div className="space-y-1">
												<label
													className="text-grayText text-sm sm:text-base text-start sm:text-end"
													htmlFor="linkedin"
												>
													LinkedIn
												</label>
												<div>
													<Field
														id="linkedin"
														name="linkedin"
														type="text"
														className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
													/>
													<ErrorMessage name="linkedin">
														{(error) => (
															<p className="text-sm text-red-600 ml-2">
																{error}
															</p>
														)}
													</ErrorMessage>
												</div>
											</div>
											{/* TWITTER */}
											<div className="space-y-1">
												<label
													className="text-grayText text-sm sm:text-base text-start sm:text-end"
													htmlFor="linkedin"
												>
													Twitter
												</label>
												<div>
													<Field
														id="twitter"
														name="twitter"
														type="text"
														className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
													/>
													<ErrorMessage name="twitter">
														{(error) => (
															<p className="text-sm text-red-600 ml-2">
																{error}
															</p>
														)}
													</ErrorMessage>
												</div>
											</div>
											{/* FACEBOOOK */}
											<div className="space-y-1">
												<label
													className="text-grayText text-sm sm:text-base text-start sm:text-end"
													htmlFor="facebook"
												>
													Facebook
												</label>
												<div>
													<Field
														id="facebook"
														name="facebook"
														type="text"
														className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
													/>
													<ErrorMessage name="facebook">
														{(error) => (
															<p className="text-sm text-red-600 ml-2">
																{error}
															</p>
														)}
													</ErrorMessage>
												</div>
											</div>
										</div>
									</div>
								</div>


								{/* FINANCE CONTACT */}

								<div className="">
									<h3 className="text-md md:text-lg font-medium text-blackPrimary">
										FINANCE CONTACT
									</h3>

									<div className="space-y-4 xs:space-y-0 xs:grid xs:grid-cols-2 my-4 gap-x-6 sm:gap-x-12 gap-y-4">
										{/* COMPANY NAME */}
										<div className="space-y-1 col-span-2">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="individualDetails"
											>
												Fill in the details of the
												individual whom we should
												contact for processing the
												registration/sponsorship fee
											</label>
											<div>
												<Field
													id="individualDetails"
													name="individualDetails"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="individualDetails">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* FINANCE NAME */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="financeName"
											>
												Name
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="financeName"
													name="financeName"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="financeName">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* FINANCE JOB */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="financeJob"
											>
												Job Title
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="financeJob"
													name="financeJob"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="financeJob">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* FINANCE NUMBER */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="financeMobile"
											>
												Mobile
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="financeMobile"
													name="financeMobile"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="financeMobile">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* FINANCE EMAIL */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="financeEmail"
											>
												Email
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="financeEmail"
													name="financeEmail"
													type="email"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="financeEmail">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* COMPANY ADDRESS */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="companyAddress"
											>
												Company Address
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="companyAddress"
													name="companyAddress"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="companyAddress">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* VAT NUMBER */}
										<div className="space-y-1">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="vatNumber"
											>
												VAT Identification Number
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="vatNumber"
													name="vatNumber"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="vatNumber">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>

										{/* COMPANY WEBSITE */}
										<div className="space-y-1 col-span-2">
											<label
												className="text-grayText text-sm sm:text-base text-start sm:text-end"
												htmlFor="solutions"
											>
												List the solutions/services that
												you are planning to promote at
												the event.
												<span className="text-bluePrimary ml-1">
													*
												</span>
											</label>
											<div>
												<Field
													id="solutions"
													name="solutions"
													type="text"
													className="w-full py-1 px-2 border placeholder:text-grayText2 text-sm md:text-base text-grayText focus:outline-none rounded"
												/>
												<ErrorMessage name="solutions">
													{(error) => (
														<p className="text-sm text-red-600 ml-2">
															{error}
														</p>
													)}
												</ErrorMessage>
											</div>
										</div>
									</div>
								</div>

								<div className="py-8">
									<h2 className="text-bluePrimary text-xl font-semibold mb-2">
										CONFIRMATION
									</h2>
									<label className="flex items-start my-4">
										<Field
											type="checkbox"
											name="consent"
											className="rounded mt-1 mr-2 text-bluePrimary"
										/>
										<p className="text-grayText2 text-sm md:text-base">
											(CONSENT) I provide my consent to
											Trescon to send me latest updates
											via email/Telegram/Whatsapp with
											information related to their events
											and activities.
											<span className="text-bluePrimary ml-1">
												*
											</span>
										</p>
									</label>
									<label className="flex items-start my-4">
										<Field
											type="checkbox"
											name="acceptTerms"
											className="rounded mt-1 mr-2 text-bluePrimary"
										/>
										<p className="text-grayText2 text-sm md:text-base">
											I agree to the general{" "}
											<Link
												className="text-greenPrimary hover:text-bluePrimary font-semibold"
												to="#"
											>
												Terms and conditions
											</Link>{" "}
											and{" "}
											<Link
												className="text-greenPrimary hover:text-bluePrimary font-semibold"
												to="#"
											>
												Privacy policy
											</Link>{" "}
											of Trescon.
											<span className="text-bluePrimary ml-1">
												*
											</span>
										</p>
									</label>
									<label className="flex items-start my-4">
										<Field
											type="checkbox"
											name="acceptPayment"
											className="rounded mt-1 mr-2 text-bluePrimary"
										/>
										<p className="text-grayText2 text-sm md:text-base">
											I confirm my 'Exhibitor Package'
											with 9 sq mt raw space at a cost of
											US$ 4000 and I agree to make the
											payment via online. Payment will be
											received by the organising company:
											Tanzania Fintech Festival.
											<span className="text-bluePrimary ml-1">
												*
											</span>
										</p>
									</label>
								</div>

								<div className="text-center">
									<button
										disabled={!values.acceptTerms || !values.acceptPayment || !values.consent}
										className="text-white px-12 py-2 disabled:bg-grayText disabled:cursor-not-allowed bg-bluePrimary rounded hover:bg-greenPrimary duration-300"
									>
										SUBMIT AND PAY
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default ApplySponsor;
