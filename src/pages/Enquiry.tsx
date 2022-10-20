import { FC } from "react";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

interface IEnquiry {}

const Enquiry: FC<IEnquiry> = () => {
	return (
		<div>
			<PageIntro title="Your enquiry" description="Join us now" />
			<SectionWrapper>
				<div className="py-24 max-w-5xl mx-auto">
					<Formik
						initialValues={{
                            interestedIn: "",
                            jobTitle: "",
                            companyName: "",
							firstName: "",
							lastName: "",
							email: "",
							message: "",
						}}
						validationSchema={yup.object().shape({
							firstName: yup
								.string()
								.required("Please fill this field"),
							lastName: yup
								.string()
								.required("Please fill this field"),
							email: yup
								.string()
								.email("Please enter a valid email")
								.required("Please fill this field"),
							message: yup
								.string()
								.required("Please fill this field"),
						})}
						onSubmit={(values) => console.log(values)}
					>
						<Form className="grid grid-cols-1 gap-6">
							<div className="grid grid-cols-2 gap-4 items-center">
								<label
									className="text-grayText text-end"
									htmlFor="firstName"
								>
									First Name:
									<span className="text-bluePrimary ml-1">
										*
									</span>
								</label>
								<div>
									<Field
										id="firstName"
										name="firstName"
										type="text"
										placeholder="First Name"
										className="w-full p-2 border text-grayText focus:outline-none rounded"
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
							<div className="text-center">
								<button className="text-white px-12 py-2 bg-bluePrimary rounded hover:bg-greenPrimary duration-300">
									Submit Enquiry
								</button>
							</div>
						</Form>
					</Formik>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default Enquiry;
