import { FC, useState } from "react";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";
import countryList from "react-select-country-list";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoSend } from "react-icons/io5";
import { BsCheckCircle } from "react-icons/bs";

interface IEnquiry {}

const Enquiry: FC<IEnquiry> = () => {
    const countries = countryList().getData();
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState<null | string>(null);

    const interestedOptions = [
        "Sponsoring",
        "Exhibiting",
        "Attending",
        "Media pass",
        "Other",
    ];

    const hereOptions = [
        "Attended another Fintech event",
        "Fintech Association",
        "Magazine / newspaper ad",
        "Website",
        "Word of mouth",
        "Email from organisers",
        "Direct mail brochure",
        "A telephone call",
        "Search engine",
    ];

    const workOption = [
        "Bank",
        "Distributer / Reseller",
        "E-commerce / Retail Technology Provider",
        "E-tailer / Marketplace",
        "Financial Service Provider",
        "Government",
        "Grocery / Supermarket",
        "Identity / Smartcard Technology Provider",
        "Payment/ Banking Technology Provider",
        "QSR / Hospitality",
        "Regulatory Body",
        "Retailer",
        "Wholesaler / B2B Enterprise",
        "Other",
    ];

    return (
        <div>
            <PageIntro title="Your enquiry" description="Join us now" />
            <SectionWrapper>
                <div className="py-24 max-w-5xl mx-auto">
                    {isSubmitted ? (
                        <div className="bg-sectionGray py-12 px-6">
                            <div className="">
                                <BsCheckCircle className="text-4xl text-greenPrimary mx-auto" />
                            </div>
                            <div className="text-center mt-6">
                                <h1 className="text-2xl font-semibold text-darkBlue mb-2">
                                    Your Equery has been submitted
                                </h1>
                                <p className="text-gray-500">
                                    Thank you for applying. We will get back to
                                    you in no time.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <Formik
                            initialValues={{
                                interestedIn: "",
                                jobTitle: "",
                                country: "Tanzania, United Republic of",
                                city: "",
                                companyName: "",
                                phoneNumber: "",
                                workingIn: "",
                                firstName: "",
                                lastName: "",
                                email: "",
                                hearedFrom: "",
                                acceptTerms: false,
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
                            })}
                            onSubmit={(values) => {
                                setLoading(true);
                                fetch(
                                    `${process.env.REACT_APP_BACKEND_URL}/fintech/enquire`,
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
                                    {/* INTERESTED IN  */}
                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="interestedIn"
                                        >
                                            I am interested in the following:
                                            <span className="text-bluePrimary ml-1">
                                                *
                                            </span>
                                        </label>
                                        <div>
                                            <Field
                                                id="interestedIn"
                                                name="interestedIn"
                                                as="select"
                                                placeholder="Country"
                                                className="w-full p-2 border text-grayText focus:outline-none rounded pr-10 bg-transparent"
                                            >
                                                <option value="">
                                                    Please select
                                                </option>
                                                {interestedOptions.map(
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
                                            <ErrorMessage name="interestedIn">
                                                {(error:any) => (
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
                                                {(error:any) => (
                                                    <p className="text-sm text-red-600 ml-2">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                    </div>

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
                                                {(error:any) => (
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
                                                {(error:any) => (
                                                    <p className="text-sm text-red-600 ml-2">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                    </div>

                                    {/* JOB TITLE */}

                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="jobTitle"
                                        >
                                            Job Title:
                                            <span className="text-bluePrimary ml-1">
                                                *
                                            </span>
                                        </label>
                                        <div>
                                            <Field
                                                id="jobTitle"
                                                name="jobTitle"
                                                type="text"
                                                placeholder="Job Title"
                                                className="w-full p-2 border text-grayText focus:outline-none rounded"
                                            />
                                            <ErrorMessage name="jobTitle">
                                                {(error:any) => (
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
                                                {(error:any) => (
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
                                                {(error:any) => (
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
                                                {(error:any) => (
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
                                                {(error:any) => (
                                                    <p className="text-sm text-red-600 ml-2">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                    </div>

                                    {/* WORKING IN   */}
                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="workingIn"
                                        >
                                            I work for:
                                            <span className="text-bluePrimary ml-1">
                                                *
                                            </span>
                                        </label>
                                        <div>
                                            <Field
                                                id="workingIn"
                                                name="workingIn"
                                                as="select"
                                                className="w-full p-2 border text-grayText focus:outline-none rounded pr-10 bg-transparent"
                                            >
                                                <option value={undefined}>
                                                    Please select
                                                </option>
                                                {workOption.map(
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
                                            <ErrorMessage name="workingIn">
                                                {(error:any) => (
                                                    <p className="text-sm text-red-600 ml-2">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                    </div>

                                    {/* HOW DID YOU HERE */}
                                    <div className="grid grid-cols-1 sm:grid-cols-[270px_1fr] lg:grid-cols-[350px_1fr] gap-2 sm:gap-4 items-center">
                                        <label
                                            className="text-grayText text-start sm:text-end"
                                            htmlFor="hearedFrom"
                                        >
                                            How did you here us:
                                        </label>
                                        <div>
                                            <Field
                                                id="hearedFrom"
                                                name="hearedFrom"
                                                as="select"
                                                className="w-full p-2 border text-grayText focus:outline-none rounded pr-10 bg-transparent"
                                            >
                                                <option value={undefined}>
                                                    Please select
                                                </option>
                                                {hereOptions.map(
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
                                            <ErrorMessage name="hearedFrom">
                                                {(error:any) => (
                                                    <p className="text-sm text-red-600 ml-2">
                                                        {error}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
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
                                            <span>Submit</span>
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

export default Enquiry;
