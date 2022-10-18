import { FC } from "react";
import SectionWrapper from "./SectionWrapper";

interface IPageIntro {
	title: string;
	description: string;
}

const PageIntro: FC<IPageIntro> = ({ title, description }) => {
	return (
		<div className="relative">
			<video
				className="absolute -z-20 w-full object-cover object-center h-full top-0 left-0"
				loop
				autoPlay
			>
				<source src="/videos/home-intro-video.webm" type="video/webm" />
			</video>
			<div className="bg-blueTransparent">
				<SectionWrapper>
					<div className="text-center py-24">
						<h1 className="text-4xl text-white font-semibold">
							{title}
						</h1>
						<p className="text-[#fffe] font-medium mt-2">
							{description}
						</p>
					</div>
				</SectionWrapper>
			</div>
		</div>
	);
};

export default PageIntro;
