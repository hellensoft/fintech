import { FC } from "react";
import { Link } from "react-router-dom";
import AboutFintech from "../components/AboutFintech";
import PageIntro from "../components/PageIntro";
import SectionWrapper from "../components/SectionWrapper";
import teamMembers from "../data/teamMember.json";

interface IAboutUs {}

const AboutUs: FC<IAboutUs> = () => {
	return (
		<div>
			<PageIntro title="About Us" description="Our Team" />
			<AboutFintech />
			<SectionWrapper>
				<div className="py-16 md:py-20">
					<div className="max-w-[787px] mx-auto text-center mb-8">
						<h1 className="text-bluePrimary text-2xl sm:text-3xl font-semibold mb-4">
							Team Members
						</h1>
						<p className="text-grayText text-sm sm:text-base text-medium">
							Our team comprises senior leaders in Financial
							Services, Innovation and Media with solid expertise
							in delivering compelling and memorable top-quality
							events.
						</p>
					</div>
					<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-8">
						{teamMembers.map((member, index) => (
							<div key={index} className="text-center group">
								<div className="w-full border-4 border-transparent aspect-square group-hover:border-4 group-hover:border-bluePrimary rounded-tl-[30px] rounded-br-[30px] duration-300 overflow-hidden">
									<img
										className="w-full group-hover:scale-110 duration-300 h-full object-cover object-center"
										src={member.image}
										alt={member.name}
									/>
								</div>
								<h3 className="text-blackPrimary text-lg sm:text-xl mt-3 font-semibold">
									{member.name}
								</h3>
								<p className="text-bluePrimary uppercase font-semibold text-xs sm:text-sm">
									{member.position}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="mb-20 flex-col sm:flex-row space-y-6 sm:space-y-0 max-w-5xl flex items-center justify-between mx-auto border shadow-lg rounded-md py-8 px-8">
					<h2 className="text-xl text-center sm:text-start xs:text-3xl text-blackPrimary font-semibold">
						Become a member
					</h2>
					<Link
						className="font-medium bg-bluePrimary hover:bg-greenPrimary duration-300 py-2 px-6 rounded-md text-white"
						to="/contact"
					>
						Contact Us
					</Link>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default AboutUs;
