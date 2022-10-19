import { FC } from "react";
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
				<div className="py-16 md:py-28">
					<div className="max-w-[787px] mx-auto text-center mb-8">
						<h1 className="text-bluePrimary text-3xl font-semibold mb-4">
							Team Members
						</h1>
						<p className="text-grayText text-medium">
							Our team comprises senior leaders in Financial
							Services, Innovation and Media with solid expertise
							in delivering compelling and memorable top-quality
							events.
						</p>
					</div>
					<div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-8">
						{teamMembers.map((member, index) => (
							<div key={index} className='text-center'>
								<img
									className="w-full aspect-[1/1] object-cover object-center rounded-tl-[30px] rounded-br-[30px]"
									src={member.image}
									alt={member.name}
								/>
								<h3 className="text-blackPrimary text-xl mt-3 font-semibold">
									{member.name}
								</h3>
								<p className="text-bluePrimary font-semibold text-sm">
									{member.position}
								</p>
							</div>
						))}
					</div>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default AboutUs;
