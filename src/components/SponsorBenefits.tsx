import { FC } from "react";
import SectionWrapper from "./SectionWrapper";
import { HiChevronDoubleRight } from "react-icons/hi";

interface ISponsorBenefits {}

const benefits = [
	{
		name: "We bring attention to your brand",
		description:
			"Your brand is featured in all our marketing material, before, during and after the event, including on www.fintechfestivaltanzaniaco.tz and Tanzaniafintechmagazine.com",
	},
	{
		name: "We expose your expertise",
		description:
			"Your experts will gain ecosystem-wide visibility with opportunities to showcase their expertise, thought leadership and vision.",
	},
	{
		name: "We foster innovation",
		description:
			"You will receive a list of qualified attendees and benefits from organised opportunities to meet face to face and make magic happen.",
	},
];

const SponsorBenefits: FC<ISponsorBenefits> = () => {
	return (
		<SectionWrapper>
			<div className="py-24">
				<div className="max-w-[850px] mb-12">
					<h1 className="text-2xl sm:text-3xl font-semibold text-bluePrimary mb-2">
						Sponsor Benefits
					</h1>
					<p className="text-grayText text-sm sm:text-base font-medium">
						Partnering with us will place you at the centre of the
						Tanzania and East Africa ecosys- tems. As a Sponsor,
						your brand will be featured as an industry builder and
						contributor of transformational ideas through the
						following physical & digital channels:
					</p>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
					{benefits.map((benefit, index) => (
						<div key={index}>
							<div className="flex items-center space-x-1 xs:space-x-2 mb-2">
								<HiChevronDoubleRight className="text-bluePrimary w-4 xs:w-6 h-4 xs:h-6" />
								<h3 className="text-md sm:text-xl font-semibold text-bluePrimary">
									{benefit.name}
								</h3>
							</div>
							<p className='text-blackPrimary text-sm sm:text-base'>{benefit.description}</p>
						</div>
					))}
				</div>
				<div className="flex items-center justify-center mt-8">
					<img src="/images/benefit.png" alt="benefit text" />
				</div>
			</div>
		</SectionWrapper>
	);
};

export default SponsorBenefits;
