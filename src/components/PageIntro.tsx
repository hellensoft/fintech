import { FC } from "react";
import { HashLink } from 'react-router-hash-link';
import SectionWrapper from "./SectionWrapper";

interface IPageIntro {
	title: string;
	description: string;
	backLink?: string;
	backText?: string;
	currentText?: string;
}

const PageIntro: FC<IPageIntro> = ({
	title,
	description,
	backLink,
	backText,
	currentText,
}) => {
	return (
		<div className="relative">
			<video
				className="absolute -z-20 w-full object-cover object-center h-full top-0 left-0"
				loop
				autoPlay
			>
				<source src="https://www.youtube.com/watch?v=4H2Bt6p3pJU" type="video/webm" />
			</video>
			<div className="bg-blueTransparent">
				<SectionWrapper>
					<div className="text-center py-24">
						<h1 className="text-2xl sm:text-4xl text-white font-semibold">
							{title}
						</h1>
						{backLink && backText && currentText && (
							<p className="text-[#fffe] font-medium mt-2">
								<HashLink className='underline' to={backLink as string}>{backText}</HashLink>/  
								{currentText}
							</p>
						)}
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
