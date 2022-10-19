import { FC } from "react";
import SectionWrapper from "./SectionWrapper";
import { FiMail, FiPhone } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";

interface IContactUs {}

const contacts = [
	{
		icon: FiMail,
		description: "deo@fintechfestivaltanzania.co.tz",
	},
	{
		icon: FiPhone,
		description: "+255 717 109 362",
	},
	{
		icon: MdLocationOn,
		description: "Brane Aves, Dar es salaam",
	},
];

const ContactUs: FC<IContactUs> = () => {
	return (
		<SectionWrapper>
			<div className="grid grid-cols-2 gap-8 py-28">
				<div>
					<h1 className="text-3xl text-bluePrimary font-semibold">
						Contact Info
					</h1>
					<p className="text-blackPrimary font-medium mb-6">
						Find us here
					</p>
					<div className="space-y-6">
						{contacts.map((contact, index) => (
							<div
								key={index}
								className="flex items-center space-x-4"
							>
								<contact.icon className="text-bluePrimary h-6 w-6" />
								<p className="text-blackPrimary font-medium">
									{contact.description}
								</p>
							</div>
						))}
					</div>
				</div>
				<Formik
					initialValues={{
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
					<Form className="grid grid-cols-1 gap-4">
						<div className="grid grid-cols-2 gap-4">
							<div>
								<Field
									name="firstName"
									type="text"
									placeholder="First Name"
									className="w-full p-2 border text-blackPrimary focus:outline-none rounded"
								/>
								<ErrorMessage name="firstName">
									{(error) => (
										<p className="text-sm text-red-600 ml-2">
											{error}
										</p>
									)}
								</ErrorMessage>
							</div>
							<div>
								<Field
									name="lastName"
									type="text"
									placeholder="Last Name"
									className="w-full p-2 border text-blackPrimary focus:outline-none rounded"
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
						<div>
							<Field
								name="email"
								type="email"
								placeholder="Email Address"
								className="w-full p-2 border text-blackPrimary focus:outline-none rounded"
							/>
							<ErrorMessage name="email">
								{(error) => (
									<p className="text-sm text-red-600 ml-2">
										{error}
									</p>
								)}
							</ErrorMessage>
						</div>
						<div>
							<Field
								name="message"
								as="textarea"
								placeholder="Message"
								className="w-full h-28 p-2 border text-blackPrimary focus:outline-none rounded"
							/>
							<ErrorMessage name="message">
								{(error) => (
									<p className="text-sm text-red-600 ml-2">
										{error}
									</p>
								)}
							</ErrorMessage>
						</div>
						<button className="text-white py-2 text-center bg-bluePrimary rounded hover:bg-greenPrimary duration-300">
							Send a message
						</button>
					</Form>
				</Formik>
			</div>
		</SectionWrapper>
	);
};

export default ContactUs;
