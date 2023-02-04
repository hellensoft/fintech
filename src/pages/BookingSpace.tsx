import { FC, useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import countryList from "react-select-country-list";
import * as yup from "yup";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoSend } from "react-icons/io5";

interface IBookingSpage {}

const BookingSpage: FC<IBookingSpage> = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const countries = countryList().getData();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const boothOptions = ["Exhibitor", "Start-Up Extibitor"];
    const spaceOptions = ["$4,000 (3m*3m)", "$2,500 (2m*2m)", "$700 (1m*1m)"];

    return (
        <div>
            <PageIntro
                title="Booking Space"
                description="Fill the form below to book your space"
            />
            <SectionWrapper>
                <div className="py-24 max-w-5xl mx-auto">
                    {isSubmitted ? (
                        <div className="bg-sectionGray py-12 px-6">
                            <div className="">
                                <BsCheckCircle className="text-4xl text-greenPrimary mx-auto" />
                            </div>
                            <div className="text-center mt-6">
                                <h1 className="text-2xl font-semibold text-darkBlue mb-2">
                                    Your request has been submitted
                                </h1>
                                <p className="text-gray-500">
                                    Thank you for booking. We will get back to
                                    you in no time.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <Formik
                            initialValues={{
                                country: "Tanzania, United Republic of",
                                city: "",
                                companyName: "",
                                phoneNumber: "",
                                firstName: "",
                                lastName: "",
                                email: "",
                                boothType: "",
                                numberOfBooth: "",
                                spaceDetails: "",
                                adjacentBooth: false,
                                acceptTerms: false,
                            }}
                            validationSchema={yup.object().shape({
                                firstName: yup
                                    .string()
                                    .required("Please fill this field"),
                                country: yup
                                    .string()
                                    .required("Please fill this field"),
                                boothType: yup
                                    .string()
                                    .required("Please fill this field")
                                    .min(1, "Please select a booth type"),
                                spaceDetails: yup
                                    .string()
                                    .required("Please fill this field")
                                    .min(1, "Please select a space type"),
                                companyName: yup
                                    .string()
                                    .required("Please fill this field"),
                                lastName: yup
                                    .string()
                                    .required("Please fill this field"),
                                city: yup
                                    .string()
                                    .required("Please fill this field"),
                                email: yup
                                    .string()
                                    .email("Please enter a valid email")
                                    .required("Please fill this field"),
                                phoneNumber: yup
                                    .number()
                                    .required("Please fill this field"),
                                numberOfBooth: yup
                                    .number()
                                    .required("Please fill this field"),
                            })}
                            onSubmit={(values) => {
                                console.log(values);
                                setLoading(true);
                                fetch(
                                    `${process.env.REACT_APP_BACKEND_URL}/fintech/space-booking`,
                                    {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(values),
                                    }
                                )
                                    .then((res) => res.json())
                                    .then((res) => {
                                        setLoading(false);
                                        setIsSubmitted(true);
                                    })
                                    .catch((err) => {
                                        setErrorMessage(err.message);
                                        setLoading(false);
                                    });
                            }}
                        >
                            {({ values }) => (
                                <Form className="grid grid-cols-1 gap-6">
                                    {/* FIRST NAME */}

                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
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

                                    {/* LAST NAME */}

                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="lastName"
                                        >
                                            Last Name:
                                            <span className="text-bluePrimary ml-1">
                                                *
                                            </span>
                                        </label>
                                        <div>
                                            <Field
                                                id="lastName"
                                                name="lastName"
                                                type="text"
                                                placeholder="Last Name"
                                                className="w-full p-2 border text-grayText focus:outline-none rounded"
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

                                    {/* COMPANY NAME */}

                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="companyName"
                                        >
                                            Company Name:
                                            <span className="text-bluePrimary ml-1">
                                                *
                                            </span>
                                        </label>
                                        <div>
                                            <Field
                                                id="companyName"
                                                type="text"
                                                name="companyName"
                                                placeholder="Company Name"
                                                className="w-full p-2 border text-grayText focus:outline-none rounded"
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

                                    {/* EMAIL ADDRESS */}

                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="email"
                                        >
                                            Email Address:
                                            <span className="text-bluePrimary ml-1">
                                                *
                                            </span>
                                        </label>
                                        <div>
                                            <Field
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full p-2 border text-grayText focus:outline-none rounded"
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

                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="country"
                                        >
                                            Phone number:
                                            <span className="text-bluePrimary ml-1">
                                                *
                                            </span>
                                        </label>
                                        <div>
                                            <Field
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                type="number"
                                                placeholder="Phone number"
                                                className="w-full p-2 border text-grayText focus:outline-none rounded pr-10 bg-transparent"
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

                                    {/* COUNTRY NAME */}

                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="country"
                                        >
                                            Country:
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
                                                className="w-full p-2 border text-grayText focus:outline-none rounded pr-10 bg-transparent"
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

                                    {/* COMPANY CITY */}

                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="city"
                                        >
                                            Company City:
                                            <span className="text-bluePrimary ml-1">
                                                *
                                            </span>
                                        </label>
                                        <div>
                                            <Field
                                                id="city"
                                                type="text"
                                                name="city"
                                                placeholder="Company City"
                                                className="w-full p-2 border text-grayText focus:outline-none rounded"
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

                                    {/* BOOTH TYPE   */}
                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="boothType"
                                        >
                                            Booth Type:
                                            <span className="text-bluePrimary ml-1">
                                                *
                                            </span>
                                        </label>
                                        <div>
                                            <Field
                                                id="boothType"
                                                name="boothType"
                                                as="select"
                                                className="w-full p-2 border text-grayText focus:outline-none rounded pr-10 bg-transparent"
                                            >
                                                <option value={undefined}>
                                                    Please select
                                                </option>
                                                {boothOptions.map(
                                                    (interest, index) => (
                                                        <option
                                                            key={index}
                                                            value={interest}
                                                        >
                                                            {interest}
                                                        </option>
                                                    )
                                                )}
                                            </Field>
                                            <ErrorMessage name="boothType">
                                                {(error) => (
                                                    <p className="text-sm text-red-600 ml-2">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                    </div>

                                    {/* SPACE TYPE   */}
                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="boothType"
                                        >
                                            Space type:
                                            <span className="text-bluePrimary ml-1">
                                                *
                                            </span>
                                        </label>
                                        <div>
                                            <Field
                                                id="spaceDetails"
                                                name="spaceDetails"
                                                as="select"
                                                className="w-full p-2 border text-grayText focus:outline-none rounded pr-10 bg-transparent"
                                            >
                                                <option value={undefined}>
                                                    Please select
                                                </option>
                                                {spaceOptions.map(
                                                    (interest, index) => (
                                                        <option
                                                            key={index}
                                                            value={interest}
                                                        >
                                                            {interest}
                                                        </option>
                                                    )
                                                )}
                                            </Field>
                                            <ErrorMessage name="spaceDetails">
                                                {(error) => (
                                                    <p className="text-sm text-red-600 ml-2">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                    </div>

                                    {/* NUMBER OF BOOTH */}

                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="numberOfBooth"
                                        >
                                            Number of Booths:
                                            <span className="text-bluePrimary ml-1">
                                                *
                                            </span>
                                        </label>
                                        <div>
                                            <Field
                                                id="numberOfBooth"
                                                type="number"
                                                name="numberOfBooth"
                                                placeholder="Company numberOfBooth"
                                                className="w-full p-2 border text-grayText focus:outline-none rounded"
                                            />
                                            <ErrorMessage name="numberOfBooth">
                                                {(error) => (
                                                    <p className="text-sm text-red-600 ml-2">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                    </div>

                                    {/* ADJACENT BOOTH */}

                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="numberOfBooth"
                                        >
                                            Adjacent Booth:
                                            <span className="text-bluePrimary ml-1">
                                                *
                                            </span>
                                        </label>
                                        <label className="flex items-start my-4">
                                            <Field
                                                type="checkbox"
                                                name="adjacentBooth"
                                                className="rounded mt-1 mr-2 text-bluePrimary"
                                            />
                                            <p className="text-grayText2">
                                                Select to agree adjacent booth
                                            </p>
                                        </label>
                                    </div>

                                    <div className="py-8">
                                        <h2 className="text-bluePrimary text-xl font-semibold mb-2">
                                            Terms, conditions and privacy:
                                        </h2>
                                        <p className="text-grayText2">
                                            Fintech may contact you from time to
                                            time with updates and information
                                            about our events, products and
                                            services that may be of interest. We
                                            may also pass your details to
                                            carefully selected third parties and
                                            to sponsors and exhibitors at this
                                            event. Please see our privacy policy
                                            for full details.
                                        </p>
                                        <label className="flex items-start my-4">
                                            <Field
                                                type="checkbox"
                                                name="acceptTerms"
                                                className="rounded mt-1 mr-2 text-bluePrimary"
                                            />
                                            <p className="text-grayText2">
                                                By continuing with the
                                                registration you are confirming
                                                that you have read, understand
                                                and accept our terms and
                                                conditions and privacy policy{" "}
                                                <span className="text-bluePrimary ml-1">
                                                    *
                                                </span>
                                            </p>
                                        </label>
                                    </div>

                                    {errorMessage && (
                                        <p className="text-red-600 font-medium">
                                            {errorMessage}
                                        </p>
                                    )}

                                    <div className="flex items-center justify-center">
                                        <button
                                            disabled={!values.acceptTerms}
                                            className="text-white px-12 py-2 disabled:bg-grayText disabled:cursor-not-allowed bg-bluePrimary rounded hover:bg-greenPrimary duration-300 flex items-center justify-center gap-2"
                                        >
                                            {loading ? (
                                                <AiOutlineLoading3Quarters className="animate-spin" />
                                            ) : (
                                                <IoSend />
                                            )}
                                            <span>Book</span>
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    )}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default BookingSpage;
