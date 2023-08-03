import { FC } from "react";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";
import TakeTheStage from "../components/TakeTheState";

interface IAgenda {}

const Agenda: FC<IAgenda> = () => {
    const timetableData = [
        {
            conferenceTitle: "The Future of Banking Conference",
            date: "08/11/2023",
            timeSlots: [
                {
                    time: "08:00 am - 09:00 am",
                    activity: "Breakfast and Registration",
                },
                {
                    time: "09:00 am - 10:30 am",
                    activity:
                        'Presentation on "Digital Transformation in Banking"',
                },
                {
                    time: "10:00 am - 11:00 am",
                    activity: "Guest of Honour Session",
                },
                {
                    time: "11:00 am - 11:15 am",
                    activity: "Coffee Break",
                },
                {
                    time: "11:15 am - 12:45 pm",
                    activity:
                        'Panel Discussion on "AI and Automation in Banking"',
                },
                {
                    time: "12:45 pm - 02:00 pm",
                    activity: "Lunch Break",
                },
                {
                    time: "02:00 pm - 03:30 pm",
                    activity:
                        'Presentation on "Open Banking and Collaborative Partnerships"',
                },
                {
                    time: "03:30 pm - 03:45 pm",
                    activity: "Tea Break",
                },
                {
                    time: "03:45 pm - 04:30 pm",
                    activity:
                        'Panel Discussion on "Cybersecurity and Data Privacy in Banking"',
                },
            ],
        },
        {
            conferenceTitle: "The Future of E-commerce Africa Conference",
            date: "08/11/2023",
            timeSlots: [
                {
                    time: "08:00 am - 09:00 am",
                    activity: "Breakfast and Registratio\n",
                },
                {
                    time: "09:00 am - 10:30 am",
                    activity:
                        'Presentation on "E-commerce Market Trends in Africa"',
                },
                { time: "10:30 am - 10:45 am", activity: "Coffee Break" },
                {
                    time: "10:45 am - 12:15 pm",
                    activity:
                        'Panel Discussion on "Digital Payments and E-commerce"',
                },
                { time: "12:15 pm - 01:30 pm", activity: "Lunch Break" },
                {
                    time: "01:30 pm - 03:00 pm",
                    activity:
                        'Presentation on "Logistics and Last-Mile Delivery Challenges"',
                },
                { time: "03:00 pm - 03:15 pm", activity: "Tea Break" },
                {
                    time: "03:15 pm - 04:00 pm",
                    activity: 'Panel Discussion on "Cross-Border E-commerce"',
                },
            ],
        },
        {
            conferenceTitle: "The Future of Insurance Africa Conference",
            date: "08/11/2023",
            timeSlots: [
                {
                    time: "08:00 am - 09:00 am",
                    activity: "Breakfast and Registration",
                },
                {
                    time: "09:00 am - 10:30 am",
                    activity: 'Presentation on "Insurtech Innovations"',
                },
                { time: "10:30 am - 10:45 am", activity: "Coffee Break" },
                {
                    time: "10:45 am - 12:15 pm",
                    activity:
                        'Panel Discussion on "Microinsurance and Inclusive Insurance"',
                },
                { time: "12:15 pm - 01:30 pm", activity: "Lunch Break" },
                {
                    time: "01:30 pm - 03:00 pm",
                    activity:
                        'Presentation on "Data Analytics and Risk Management"',
                },
                { time: "03:00 pm - 03:15 pm", activity: "Tea Break" },
                {
                    time: "03:15 pm - 04:00 pm",
                    activity:
                        'Panel Discussion on "Regulatory Challenges and Opportunities"',
                },
            ],
        },
        {
            conferenceTitle: "The Future of Microfinance Conference",
            date: "09/11/2023",
            timeSlots: [
                {
                    time: "08:00 am - 09:00 am",
                    activity: "Breakfast and Registration",
                },
                {
                    time: "09:00 am - 10:30 am",
                    activity:
                        'Presentation on "Digital Transformation in Microfinance"',
                },
                { time: "10:30 am - 10:45 am", activity: "Coffee Break" },
                {
                    time: "10:45 am - 12:15 pm",
                    activity:
                        'Panel Discussion on "Fintech and Microfinance Integration"',
                },
                { time: "12:15 pm - 01:30 pm", activity: "Lunch Break" },
                {
                    time: "01:30 pm - 03:00 pm",
                    activity:
                        'Presentation on "Microfinance Innovations for Financial Inclusion"',
                },
                { time: "03:00 pm - 03:15 pm", activity: "Tea Break" },
                {
                    time: "03:15 pm - 04:00 pm",
                    activity:
                        'Panel Discussion on "Challenges and Opportunities in Microfinance"',
                },
                { time: "06:00 pm - 11:00 pm", activity: "Gala Dinner" },
            ],
        },
        {
            conferenceTitle: "The Future of Blockchain Conference Africa",
            date: "09/11/2023",
            timeSlots: [
                {
                    time: "08:00 am - 09:00 am",
                    activity: "Breakfast and Registration",
                },
                {
                    time: "09:00 am - 10:30 am",
                    activity: 'Presentation on "Blockchain for Social Impact"',
                },
                { time: "10:30 am - 10:45 am", activity: "Coffee Break" },
                {
                    time: "10:45 am - 12:15 pm",
                    activity:
                        'Panel Discussion on "Decentralized Finance (DeFi)"',
                },
                { time: "12:15 pm - 01:30 pm", activity: "Lunch Break" },
                {
                    time: "01:30 pm - 03:00 pm",
                    activity:
                        'Presentation on "Blockchain Adoption in Supply Chain Management"',
                },
                { time: "03:00 pm - 03:15 pm", activity: "Tea Break" },
                {
                    time: "03:15 pm - 04:00 pm",
                    activity:
                        'Panel Discussion on "Regulatory Frameworks for Blockchain"',
                },
                { time: "06:00 pm - 11:00 pm", activity: "Gala Dinner" },
            ],
        },
    ];

    return (
        <div>
            <PageIntro
                title="FinTech Festivals Tanzania Agenda"
                description="Fintech Festivals Tanzania 2023 Schedule"
            />
            <SectionWrapper>
                <div className="flex flex-col max-w-4xl mx-auto px-4 py-20 space-y-4">
                    <h1 className="text-xl sm:text-3xl text-bluePrimary font-semibold mb-4 text-center">
                        Proposed schedule Fintech festival Tanzania 2023
                    </h1>
                    <div className="py-12 gap-y-8">
                        {timetableData.map((conference, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-2 gap-8 relative"
                            >
                                <div className="py-12 relative">
                                    <div className="sticky top-32">
                                        <h2 className="text-xl font-bold">
                                            {conference.conferenceTitle}
                                        </h2>
                                        <p className="text-gray-600">
                                            Date: {conference.date}
                                        </p>
                                    </div>
                                </div>
                                <ol className="ml-8 my-8 py-2 max-w-3xl border-l border-gray-200 dark:border-gray-700">
                                    {conference.timeSlots.map((time, index) => (
                                        <li
                                            className="my-8 ml-6 relative"
                                            key={index}
                                        >
                                            <div className="absolute top-1.5 w-3 h-3 bg-gray-200 rounded-full -left-[30px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                            <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                                {time.time}
                                            </time>
                                            {/* <div className="">
                                                <h3 className="text-md font-medium text-gray-500 dark:text-gray-400">
                                                    Organization:{" "}
                                                    {time.organization}
                                                </h3>
                                            </div> */}
                                            <div className="flex items-end justify-between">
                                                <h3 className="text-lg font-semibold text-purplePrimary dark:text-grayLighter">
                                                    {time.activity}
                                                </h3>
                                                {/* <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                    {time.jobType} -{" "}
                                                    {time.location}
                                                </p> */}
                                            </div>
                                            {/* <p className="my-2 text-base font-normal text-gray-500 dark:text-gray-400">
                                                {time.description}
                                            </p> */}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
            <TakeTheStage />
        </div>
    );
};

export default Agenda;
