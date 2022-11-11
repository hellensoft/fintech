import { FC } from "react";
import SectionWrapper from "./SectionWrapper";

interface IAboutFintech {}

const AboutFintech: FC<IAboutFintech> = () => {
	return (
		<SectionWrapper>
			<div className="py-16 md:py-24">
				<h1 className="text-bluePrimary text-2xl sm:text-[34px] text-center font-semibold">
					ABOUT FINTECH FESTIVAL
				</h1>
				<div className="pt-12 md:pt-20 pb-4 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 content-center items-center">
					<div className="space-y-6">
						<p className="text-grayText text-sm sm:text-base font-medium">
							FinTech Festival is the largest Financial Technology
							event in East Africa, providing a plat- form for the
							FinTech community to connect, collaborate and
							co-create. Whether you are a start-up, technology
							company, investor, financial institution, research
							institute, or inno- vation professional, it will
							play a pivotal role in further strengthening the
							ecosystem and enhancing collaboration between
							Tanzania & Global FinTech.
						</p>
						<p className="text-grayText text-sm sm:text-base font-medium">
							The Festival will bring together East Africa and
							global knowledge sharing from leading academics,
							practitioners, and thought leaders across reimagined
							sessions covering designing, building, and ensuring
							sustainable financial services for Web 3.0.
						</p>
					</div>
					<div>
						<img src="/images/fintech.png" className='rounded-tl-[50px] rounded-br-[50px]' alt="fintech" />
					</div>
				</div>
				<div className="py-0 md:py-20 grid-cols-1 grid md:grid-cols-2 gap-12 content-center items-center">
					<div>
						<img src="/images/fintech.png" className='rounded-tl-[50px] hidden md:inline-block rounded-br-[50px]' alt="fintech" />
					</div>
					<div className="space-y-6">
						<p className="text-grayText text-sm sm:text-base font-medium">
							FinTech Festival Tanzania aims to unleash the
							potential of FinTech in Tanzania and show- case the
							opportunities for investors and the global FinTech
							fraternity to venture into the Tanzania market.
						</p>
						<p className="text-grayText text-sm sm:text-base font-medium">
							The event is one big celebration of new ideas and
							technologies, conferences full of rich dialogues,
							productive engagements, and unlimited networking
							that involves the greatest minds from the world of
							Finance and Technology.
						</p>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default AboutFintech;
